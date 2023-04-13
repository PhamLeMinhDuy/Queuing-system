import React, { useEffect } from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';
import { CollectionReference, DocumentData, collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';

export const Table = () => {
    const [list, setList] = React.useState<Record<string, any>>({});
      
        interface ServiceInterface {
        id?: string;
        number?:string;
        state?:string;
    }
    type DeviceWithId = {
        id: string;
      } & ServiceInterface
      const colRef = query(collection(db, 'servicemanager'), orderBy('number'));
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
    const data: DeviceWithId[] = Object.keys(list).map((serviceId) => ({
        id: serviceId,
        number: list[serviceId].number,
        state: list[serviceId].state,
    }));
    interface Column {
        Header: string;
        accessor: string;
    }
    interface Data {
        id: string;
        number: string;
        state: string;
    }
    const columns: Column[] = [
        {
            Header: 'Số thứ tự',
            accessor: 'number',
        },
        {
            Header: 'Tình trạng',
            accessor: 'state',
        },
    ];
    // const data = [
    //     {
    //         id: '1',
    //         number: '2010001',
    //         state: 'Đã hoàn thành',
    //     },
    //     {
    //         id: '2',
    //         number: '2010002',
    //         state: 'Đã hoàn thành',
        
    //     },{
    //         id: '3',
    //         number: '2010003',
    //         state: 'Đang thực hiện',
    //     },{
    //         id: '4',
    //         number: '2010004',
    //         state: 'Vắng',
        
    //     },{
    //         id: '5',
    //         number: '2010005',
    //         state: 'Đã hoàn thành',
    //     },{
    //         id: '6',
    //         number: '2010006',
    //         state: 'Đang thực hiện',
        
    //     },{
    //         id: '7',
    //         number: '2010007',
    //         state: 'Vắng',
    //     },{
    //         id: '8',
    //         number: '2010008',
    //         state: 'Đã hoàn thành',
    //     }
    // ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
