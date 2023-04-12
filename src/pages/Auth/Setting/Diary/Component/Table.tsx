import React from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';

export const Table = () => {
    interface Column {
        Header: string;
        accessor: string;
    }
    interface Data {
        userName: string;
        time: string; 
        ip: string;
        action: string;   
    }
    const columns: Column[] = [
        {
            Header: 'Tên đăng nhập',
            accessor: 'userName',
        },
        {
            Header: 'Thời gian hoạt động',
            accessor: 'time',
        },
        {
            Header: 'IP thực hiện',
            accessor: 'ip',
        },
        {
            Header: 'Thao tác thực hiện ',
            accessor: 'action',
        },
    ];
    const data = [
        {   
            id:'1',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },
        {
            id: '2',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },{
            id: '3',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },{
            id: '4',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },{
            id: '5',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },{
            id: '6',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },{
            id: '7',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },{
            id: '8',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },{
            id: '9',
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông  tin dịch vụ DV_01'
        },
    ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
