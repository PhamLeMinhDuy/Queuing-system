import React from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';

export const TableService = () => {
    interface Column {
        Header: string;
        accessor: string;
    }
    interface Data {
        id: string;
        serviceId: string;
        serviceName: string;
        serviceDes: string;
        serviceState: string;
        detail: JSX.Element;
        update: JSX.Element;
    }
    const columns: Column[] = [
        {
            Header: 'Mã dịch vụ',
            accessor: 'serviceId',
        },
        {
            Header: 'Tên dịch vụ',
            accessor: 'serviceName',
        },
        {
            Header: 'Mô tả dịch vụ',
            accessor: 'serviceDes',
        },
        {
            Header: 'Trạng thái hoạt động',
            accessor: 'serviceState',
        },
        {
            Header: '',
            accessor: 'detail',
        },
        {
            Header: '',
            accessor: 'update',
        },
    ];
    const data = [
        {
            id: '1',
            serviceId: 'KIO_01',
            serviceName: 'Kiosk',
            serviceDes: 'Hoạt động',
            serviceState: 'Hoạt động',
            detail: <a href="/servicedetail">Chi tiết</a>,
            update: <a href="/updateservice">Cập nhật</a>
        },
        {
            id: '2',
            serviceId: 'KIO_01',
            serviceName: 'Kiosk',
            serviceDes: 'Hoạt động',
            serviceState: 'Hoạt động',
            detail: <a href="/servicedetail">Chi tiết</a>,
            update: <a href="/updateservice">Cập nhật</a>
        },
        {
            id: '3',
            serviceId: 'KIO_01',
            serviceName: 'Kiosk',
            serviceDes: 'Hoạt động',
            serviceState: 'Hoạt động',
            detail: <a href="/servicedetail">Chi tiết</a>,
            update: <a href="/updateservice">Cập nhật</a>
        },
        {
            id: '4',
            serviceId: 'KIO_01',
            serviceName: 'Kiosk',
            serviceDes: 'Hoạt động',
            serviceState: 'Ngưng hoạt động',
            detail: <a href="/servicedetail">Chi tiết</a>,
            update: <a href="/updateservice">Cập nhật</a>
        },
        {
            id: '5',
            serviceId: 'KIO_01',
            serviceName: 'Kiosk',
            serviceDes: 'Hoạt động',
            serviceState: 'Hoạt động',
            detail: <a href="/servicedetail">Chi tiết</a>,
            update: <a href="/updateservice">Cập nhật</a>
        },
        {
            id: '6',
            serviceId: 'KIO_01',
            serviceName: 'Kiosk',
            serviceDes: 'Hoạt động',
            serviceState: 'Hoạt động',
            detail: <a href="/servicedetail">Chi tiết</a>,
            update: <a href="/updateservice">Cập nhật</a>
        },
        {
            id: '7',
            serviceId: 'KIO_01',
            serviceName: 'Kiosk',
            serviceDes: 'Hoạt động',
            serviceState: 'Ngưng hoạt động',
            detail: <a href="/servicedetail">Chi tiết</a>,
            update: <a href="/updateservice">Cập nhật</a>
        },
    ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
