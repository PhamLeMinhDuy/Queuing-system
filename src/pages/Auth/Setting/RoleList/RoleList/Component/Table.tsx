import React, { useEffect } from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../../firebase/config';

export const TableRole = () => {
    const [list, setList] = React.useState<Record<string, any>>({});
      
    interface RoleInterface {
      id?: string;
      description?:string;
      numberuser?:string;
      role?:string;
  }
  type RoleWithId = {
    id: string;
  } & RoleInterface & {
    update: JSX.Element;
  };
  const colRef: CollectionReference<DocumentData> = collection(db, 'rolelist'); 
  useEffect(() => {
    const getDevices = async () => {
      const querySnapshot = await getDocs(colRef);
      const devices: Record<string, RoleInterface> = {};
      querySnapshot.forEach((doc) => {
        devices[doc.id] = doc.data() as RoleInterface;
      });
      setList(devices);
    };
    getDevices();
  }, []);

  const data: RoleWithId[] = Object.keys(list).map((roleId) => ({
    id: roleId,
    role: list[roleId].role,
    numberuser: list[roleId].numberuser,
    description: list[roleId].description,
    update: <a href={`/updaterolelist/${roleId}`}>Cập nhật</a>,
  }));

    interface Column {
        Header: string;
        accessor: string;
    }
    const columns: Column[] = [
        {
            Header: 'Tên vai tró',
            accessor: 'role',
        },
        {
            Header: 'Số người dùng',
            accessor: 'numberuser',
        },
        {
            Header: 'Mô tả ',
            accessor: 'description',
        },
        {
            Header: '',
            accessor: 'update',
        },
    ];
    // const data = [
    //     {
    //         id: '1',
    //         serviceId: 'KIO_01',
    //         serviceName: 'Kiosk',
    //         serviceDes: 'Hoạt động',
    //         serviceState: 'Hoạt động',
    //         detail: <a href="/servicedetail">Chi tiết</a>,
    //         update: <a href="/updateservice">Cập nhật</a>
    //     },
    //     {
    //         id: '2',
    //         serviceId: 'KIO_01',
    //         serviceName: 'Kiosk',
    //         serviceDes: 'Hoạt động',
    //         serviceState: 'Hoạt động',
    //         detail: <a href="/servicedetail">Chi tiết</a>,
    //         update: <a href="/updateservice">Cập nhật</a>
    //     },
    //     {
    //         id: '3',
    //         serviceId: 'KIO_01',
    //         serviceName: 'Kiosk',
    //         serviceDes: 'Hoạt động',
    //         serviceState: 'Hoạt động',
    //         detail: <a href="/servicedetail">Chi tiết</a>,
    //         update: <a href="/updateservice">Cập nhật</a>
    //     },
    //     {
    //         id: '4',
    //         serviceId: 'KIO_01',
    //         serviceName: 'Kiosk',
    //         serviceDes: 'Hoạt động',
    //         serviceState: 'Ngưng hoạt động',
    //         detail: <a href="/servicedetail">Chi tiết</a>,
    //         update: <a href="/updateservice">Cập nhật</a>
    //     },
    //     {
    //         id: '5',
    //         serviceId: 'KIO_01',
    //         serviceName: 'Kiosk',
    //         serviceDes: 'Hoạt động',
    //         serviceState: 'Hoạt động',
    //         detail: <a href="/servicedetail">Chi tiết</a>,
    //         update: <a href="/updateservice">Cập nhật</a>
    //     },
    //     {
    //         id: '6',
    //         serviceId: 'KIO_01',
    //         serviceName: 'Kiosk',
    //         serviceDes: 'Hoạt động',
    //         serviceState: 'Hoạt động',
    //         detail: <a href="/servicedetail">Chi tiết</a>,
    //         update: <a href="/updateservice">Cập nhật</a>
    //     },
    //     {
    //         id: '7',
    //         serviceId: 'KIO_01',
    //         serviceName: 'Kiosk',
    //         serviceDes: 'Hoạt động',
    //         serviceState: 'Ngưng hoạt động',
    //         detail: <a href="/servicedetail">Chi tiết</a>,
    //         update: <a href="/updateservice">Cập nhật</a>
    //     },
    // ]
  return (
    <TableCreate columns={columns} data={data} />
  )
}
