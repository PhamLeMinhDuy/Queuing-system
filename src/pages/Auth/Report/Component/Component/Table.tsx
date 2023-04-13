import React, { useEffect } from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';

export const Table = () => {

        const [list, setList] = React.useState<Record<string, any>>({});
          
        interface ServiceInterface {
          id?: string;
          number?:string;
          service?:string;
          source?:string;
          state?:string;
          time?:string;
      }
      type ReportWithId = {
        id: string;
      } & ServiceInterface
      const colRef: CollectionReference<DocumentData> = collection(db, 'reportlist'); 
      useEffect(() => {
        const getDevices = async () => {
          const querySnapshot = await getDocs(colRef);
          const devices: Record<string, ServiceInterface> = {};
          querySnapshot.forEach((doc) => {
            devices[doc.id] = doc.data() as ServiceInterface;
          });
          setList(devices);
        };
        getDevices();
      }, []);
    
      const data: ReportWithId[] = Object.keys(list).map((reportId) => ({
        id: reportId,
        number: list[reportId].number,
        name: list[reportId].service,
        time: list[reportId].time,
        state: list[reportId].state,
        source: list[reportId].source,
      }));
    interface Column {
        Header: string;
        accessor: string;
    }
    interface Data {
        id: string;
        number: string;
        name: string;
        time: string;
        state: string;
        source: string;
    }
    const columns: Column[] = [
        {
            Header: 'Số thứ tự',
            accessor: 'number',
        },
        {
            Header: 'Tên dịch vụ',
            accessor: 'name',
        },
        {
            Header: 'Thời gian cấp',
            accessor: 'time',
        },
        {
            Header: 'Tình trạng',
            accessor: 'state',
        },
        {
            Header: 'Nguồn cấp',
            accessor: 'source',
        },
    ];
    // const data = [
    //     {
    //         id: '1',
    //         number: '2010001',
    //         name: 'Khám tim mạch',
    //         time: '07:20 - 07/10/2021',
    //         state: 'Đang chờ',
    //         source: 'Kiosk',
    //     },
    //     {
    //         id: '2',
    //         number: '2010002',
    //         name: 'Răng hàm mặt',
    //         time: '07:20 - 07/10/2021',
    //         state: 'Đã sử dụng',
    //         source: 'Hệ thống',
    //     },{
    //         id: '3',
    //         number: '2010003',
    //         name: 'Khám sản - phụ khoa',
    //         time: '07:20 - 07/10/2021',
    //         state: 'Bỏ qua',
    //         source: 'Kiosk',
    //     },{
    //         id: '4',
    //         number: '2010004',
    //         name: 'Răng hàm mặt',
    //         time: '07:20 - 07/10/2021',
    //         state: 'Đang chờ',
    //         source: 'Hệ thống',
    //     },{
    //         id: '5',
    //         number: '2010005',
    //         name: 'Tai mũi họng',
    //         time: '07:20 - 07/10/2021',
    //         state: 'Đang chờ',
    //         source: 'Kiosk',
    //     },{
    //         id: '6',
    //         number: '2010006',
    //         name: 'Khám tổng quát',
    //         time: '07:20 - 07/10/2021',
    //         state: 'Bỏ qua',
    //         source: 'Hệ thống',
    //     },{
    //         id: '7',
    //         number: '2010007',
    //         name: 'Khám hô hấp',
    //         time: '07:20 - 07/10/2021',
    //         state: 'Đã sử dụng',
    //         source: 'Kiosk',
    //     },
    // ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
