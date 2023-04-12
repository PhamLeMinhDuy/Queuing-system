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
        userName: string;
        name: string;
        phone: string;
        email: string;
        role: string;
        state: string;
        update: string;
    }
    const columns: Column[] = [
        {
            Header: 'Tên đăng nhập',
            accessor: 'userName',
        },
        {
            Header: 'Họ tên',
            accessor: 'name',
        },
        {
            Header: 'Số điện thoại ',
            accessor: 'phone',
        },
        {
            Header: 'Email ',
            accessor: 'email',
        },
        {
            Header: 'Vai trò ',
            accessor: 'role',
        },
        {
            Header: 'Trạng thái hoạt động ',
            accessor: 'state',
        },
        {
            Header: '',
            accessor: 'update',
        },
    ];
    const data = [
        {
            id: '1',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },
        {
            id: '2',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },{
            id: '3',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Ngưng hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },{
            id: '4',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },{
            id: '5',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Ngưng hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },{
            id: '6',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },{
            id: '7',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },{
            id: '8',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Ngưng hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },{
            id: '9',
            userName: 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen12@gmail.com',
            role: 'Kế toán',
            state: 'Hoạt động',
            update:<a href="/updateaccount">Cập nhật</a>
        },
    ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
