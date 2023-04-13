import React, { useEffect } from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../../firebase/config';

export const Table = () => {
    const [list, setList] = React.useState<Record<string, any>>({});
      
    interface AccountInterface {
      id?: string;
      account?:string;
      email?:string;
      name?:string;
      phone?:string;
      role?:string;
      state?:string;
    }
    type AccountWithId = {
        id: string;
    } & AccountInterface & {
        update: JSX.Element;
    };
    const colRef: CollectionReference<DocumentData> = collection(db, 'accountlist'); 
    useEffect(() => {
        const getDevices = async () => {
        const querySnapshot = await getDocs(colRef);
        const devices: Record<string, AccountInterface> = {};
        querySnapshot.forEach((doc) => {
            devices[doc.id] = doc.data() as AccountInterface;
        });
        setList(devices);
        };
        getDevices();
    }, []);

    const data: AccountWithId[] = Object.keys(list).map((accountId) => ({
        id: accountId,
        userName: list[accountId].account,
        name: list[accountId].name,
        phone: list[accountId].phone,
        email: list[accountId].email,
        state: list[accountId].state,
        role: list[accountId].role,
        update: <a href={`/updateaccount/${accountId}`}>Cập nhật</a>,
    }));
    interface Column {
        Header: string;
        accessor: string;
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
  return (
    <TableCreate columns={columns} data={data} />
  )
}
