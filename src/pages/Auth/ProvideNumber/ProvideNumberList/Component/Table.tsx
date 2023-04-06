import React from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';

export const Table = () => {
    interface Column {
        Header: string;
        accessor: string;
    }
    interface Data {
        id: string;
        number: string;
        userName: string;
        serviceName: string;
        time: string;
        expiry: string;
        state: string;
        source:string;
        detail: string;
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
    const data = [
        {
            id: '1',
            number: '2010001',
            userName: 'Lê Huỳnh Ái Vân',
            serviceName: 'Khám tim mạch',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Đang chờ',
            update: 'Kiosk',
            detail: <a href="#">Chi tiết</a>,
        },
        {
            id: '2',
            number: '2010002',
            userName: 'Huỳnh Ái Vân',
            serviceName: 'Khám sản - Phụ Khoa',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Đã sử dụng',
            update: 'Kiosk',
            detail: <a href="#">Chi tiết</a>,
        },
        {
            id: '3',
            number: '2010003',
            userName: 'Lê Ái Vân',
            serviceName: 'Khám răng hàm mặt',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Đang chờ',
            update: 'Hệ thống',
            detail: <a href="#">Chi tiết</a>,
        },
        {
            id: '4',
            number: '2010004',
            userName: 'Nguyễn Ái Vân',
            serviceName: 'Khám tai mũi họng',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Đang chờ',
            update: 'Hệ thống',
            detail: <a href="#">Chi tiết</a>,
        },
        {
            id: '5',
            number: '2010005',
            userName: 'Trần Thị Ái Vân',
            serviceName: 'Khám tim mạch',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Đang chờ',
            update: 'Kiosk',
            detail: <a href="#">Chi tiết</a>,
        },
        {
            id: '6',
            number: '2010006',
            userName: 'Lê Huỳnh Nghĩa',
            serviceName: 'Khám tim mạch',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Đã sử dụng',
            update: 'Hệ thống',
            detail: <a href="#">Chi tiết</a>,
        },
        {
            id: '7',
            number: '2010007',
            userName: 'Lê Huỳnh Đức',
            serviceName: 'Khám tim mạch',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Đã sử dụng',
            update: 'Kiosk',
            detail: <a href="#">Chi tiết</a>,
        },
        {
            id: '8',
            number: '2010008',
            userName: 'Phạm Văn Mạnh',
            serviceName: 'Khám tim mạch',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Bỏ qua',
            update: 'Hệ thống',
            detail: <a href="#">Chi tiết</a>,
        },
        {
            id: '9',
            number: '2010009',
            userName: 'Lê Thị Cẩm Tiên',
            serviceName: 'Khám tim mạch',
            time: '14:35-07/11/2021',
            expiry: '14:35-07/11/2021',
            state:'Đã sử dụng',
            update: 'Hệ thống',
            detail: <a href="#">Chi tiết</a>,
        },
    ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
