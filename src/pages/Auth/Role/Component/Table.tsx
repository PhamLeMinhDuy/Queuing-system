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
        name: string;
        numberUser: string;
        roleDes: string;
        update: JSX.Element;
    }
    const columns: Column[] = [
        {
            Header: 'Tên vai trò',
            accessor: 'name',
        },
        {
            Header: 'Số người sử dụng',
            accessor: 'numberUser',
        },
        {
            Header: 'Mô tả ',
            accessor: 'roleDes',
        },
        {
            Header: '',
            accessor: 'update',
        },
    ];
    const data = [
        {
            id: '1',
            name: 'Kế toán',
            numberUser: '6',
            roleDes: 'Thực hiện nhiệm vụ về thống kê số liệu va tổng hợp số liệu',
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '2',
            name: 'Bác sĩ',
            numberUser: '6',
            roleDes: 'Thực hiện nhiệm vụ về thống kê số liệu va tổng hợp số liệu',
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '3',
            name: 'Lễ tân',
            numberUser: '6',
            roleDes: 'Thực hiện nhiệm vụ về thống kê số liệu va tổng hợp số liệu',
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '4',
            name: 'Quản lý',
            numberUser: '6',
            roleDes: 'Thực hiện nhiệm vụ về thống kê số liệu va tổng hợp số liệu',
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '5',
            name: 'Admin',
            numberUser: '6',
            roleDes: 'Thực hiện nhiệm vụ về thống kê số liệu va tổng hợp số liệu',
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '6',
            name: 'Superadmin',
            numberUser: '6',
            roleDes: 'Thực hiện nhiệm vụ về thống kê số liệu va tổng hợp số liệu',
            update: <a href="#">Cập nhật</a>
        },
    ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
