import React, { useEffect } from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';

export const Table = () => {
    interface Column {
        Header: string;
        accessor: string;
    }
    const [list, setList] = React.useState<Record<string, any>>({});
      
    interface DiaryInterface {
      id?: string;
      account?:string;
      action?:string;
      ip?:string;
      time?:string;
    }
    type DiaryWithId = {
        id: string;
    }
    const colRef: CollectionReference<DocumentData> = collection(db, 'diarylist'); 
    useEffect(() => {
        const getDevices = async () => {
        const querySnapshot = await getDocs(colRef);
        const devices: Record<string, DiaryInterface> = {};
        querySnapshot.forEach((doc) => {
            devices[doc.id] = doc.data() as DiaryInterface;
        });
        setList(devices);
        };
        getDevices();
    }, []);

    const data: DiaryWithId[] = Object.keys(list).map((diaryId) => ({
        id: diaryId,
        userName: list[diaryId].account,
        time: list[diaryId].time,
        ip: list[diaryId].ip,
        action: list[diaryId].action,
    }));
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
  return (
    <TableCreate columns={columns} data={data} />
  )
}
