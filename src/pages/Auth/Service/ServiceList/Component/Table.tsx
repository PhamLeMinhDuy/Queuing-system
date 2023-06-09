import React, { useEffect } from 'react'
import { TableCreate } from './TableCreate';
import { useState } from 'react';
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';

export const TableService = () => {
    const [list, setList] = React.useState<Record<string, any>>({});
      
    interface ServiceInterface {
      id?: string;
      serviceid?:string;
      name?:string;
      state?:string;
      description?:string;
  }
  type DeviceWithId = {
    id: string;
  } & ServiceInterface & {
    detail: JSX.Element;
    update: JSX.Element;
  };
  const colRef: CollectionReference<DocumentData> = collection(db, 'servicelist'); 
  useEffect(() => {
    const getDevices = async () => {
      const querySnapshot = await getDocs(colRef);
      const devices: Record<string, ServiceInterface> = {};
      querySnapshot.forEach((doc) => {
        devices[doc.id] = doc.data() as ServiceInterface;
      });
      setList(devices);
    };
    getDevices();
  }, []);

  const data: DeviceWithId[] = Object.keys(list).map((serviceId) => ({
    id: serviceId,
    serviceId: list[serviceId].serviceid,
    serviceName: list[serviceId].name,
    serviceState: list[serviceId].state,
    serviceDes: list[serviceId].description,
    detail: <a href={`/servicedetail/${serviceId}`}>Chi tiết</a>,
    update: <a href={`/updateservice/${serviceId}`}>Cập nhật</a>,
  }));

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
