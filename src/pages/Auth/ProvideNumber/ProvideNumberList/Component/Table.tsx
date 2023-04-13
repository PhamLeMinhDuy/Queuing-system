import React, { useEffect } from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import { Link } from 'react-router-dom';

export const Table = () => {
    const [list, setList] = React.useState<Record<string, any>>({});
      
    interface ProvideNumberInterface {
        id?: string;
        customer?:string;
        number?:string;
        service?:string;
        source?:string;
        state?:string;
        expiry?:string;
        time?:string;
    }
    type ProvideNumberWithId = {
        id: string;
    } & ProvideNumberInterface & {
        detail: JSX.Element;
    };
    const colRef: CollectionReference<DocumentData> = collection(db, 'providenumberlist'); 
    useEffect(() => {
        const getDevices = async () => {
        const querySnapshot = await getDocs(colRef);
        const devices: Record<string, ProvideNumberInterface> = {};
        querySnapshot.forEach((doc) => {
            devices[doc.id] = doc.data() as ProvideNumberInterface;
        });
        setList(devices);
        };
        getDevices();
    }, []);

    const data: ProvideNumberWithId[] = Object.keys(list).map((providenumberId) => ({
        id: providenumberId,
        number: list[providenumberId].number,
        userName: list[providenumberId].customer,
        serviceName: list[providenumberId].service,
        time: list[providenumberId].time,
        expiry: list[providenumberId].expiry,
        state: list[providenumberId].state,
        source: list[providenumberId].source,
        detail: <Link to={`/providenumberdetail/${providenumberId}`}>Chi tiết</Link>,
    }));

    interface Column {
        Header: string;
        accessor: string;
    }
    const columns: Column[] = [
        {
            Header: 'STT',
            accessor: 'number',
        },
        {
            Header: 'Tên khách hàng',
            accessor: 'userName',
        },
        {
            Header: 'Tên dịch vụ',
            accessor: 'serviceName',
        },
        {
            Header: 'Thời gian cấp',
            accessor: 'time',
        },
        {
            Header: 'Hạn sử dụng',
            accessor: 'expiry',
        },
        {
            Header: 'Trạng thái',
            accessor: 'state',
        },
        {
            Header: 'Nguồn cấp',
            accessor: 'source',
        },
        {
            Header: '',
            accessor: 'detail',
        },
    ];
    // const data = [
    //     {
    //         id: '1',
    //         number: '2010001',
    //         userName: 'Lê Huỳnh Ái Vân',
    //         serviceName: 'Khám tim mạch',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Đang chờ',
    //         update: 'Kiosk',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    //     {
    //         id: '2',
    //         number: '2010002',
    //         userName: 'Huỳnh Ái Vân',
    //         serviceName: 'Khám sản - Phụ Khoa',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Đã sử dụng',
    //         update: 'Kiosk',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    //     {
    //         id: '3',
    //         number: '2010003',
    //         userName: 'Lê Ái Vân',
    //         serviceName: 'Khám răng hàm mặt',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Đang chờ',
    //         update: 'Hệ thống',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    //     {
    //         id: '4',
    //         number: '2010004',
    //         userName: 'Nguyễn Ái Vân',
    //         serviceName: 'Khám tai mũi họng',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Đang chờ',
    //         update: 'Hệ thống',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    //     {
    //         id: '5',
    //         number: '2010005',
    //         userName: 'Trần Thị Ái Vân',
    //         serviceName: 'Khám tim mạch',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Đang chờ',
    //         update: 'Kiosk',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    //     {
    //         id: '6',
    //         number: '2010006',
    //         userName: 'Lê Huỳnh Nghĩa',
    //         serviceName: 'Khám tim mạch',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Đã sử dụng',
    //         update: 'Hệ thống',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    //     {
    //         id: '7',
    //         number: '2010007',
    //         userName: 'Lê Huỳnh Đức',
    //         serviceName: 'Khám tim mạch',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Đã sử dụng',
    //         update: 'Kiosk',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    //     {
    //         id: '8',
    //         number: '2010008',
    //         userName: 'Phạm Văn Mạnh',
    //         serviceName: 'Khám tim mạch',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Bỏ qua',
    //         update: 'Hệ thống',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    //     {
    //         id: '9',
    //         number: '2010009',
    //         userName: 'Lê Thị Cẩm Tiên',
    //         serviceName: 'Khám tim mạch',
    //         time: '14:35-07/11/2021',
    //         expiry: '14:35-07/11/2021',
    //         state:'Đã sử dụng',
    //         update: 'Hệ thống',
    //         detail: <a href="/providenumberdetail">Chi tiết</a>,
    //     },
    // ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
