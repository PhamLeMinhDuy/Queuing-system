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
    const data = [
        {
            id: '1',
            number: '2010001',
            state: 'Đã hoàn thành',
        },
        {
            id: '2',
            number: '2010002',
            state: 'Đã hoàn thành',
        
        },{
            id: '3',
            number: '2010003',
            state: 'Đang thực hiện',
        },{
            id: '4',
            number: '2010004',
            state: 'Vắng',
        
        },{
            id: '5',
            number: '2010005',
            state: 'Đã hoàn thành',
        },{
            id: '6',
            number: '2010006',
            state: 'Đang thực hiện',
        
        },{
            id: '7',
            number: '2010007',
            state: 'Vắng',
        },{
            id: '8',
            number: '2010008',
            state: 'Đã hoàn thành',
        }
    ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
