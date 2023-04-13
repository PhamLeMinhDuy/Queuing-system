import React, { useEffect } from 'react'
import { Table } from './Table';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeviceDetail } from '../../DeviceDetail/DeviceDetail';
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';

export const Example = () => {
  const [list, setList] = React.useState<Record<string, any>>({});

    interface Column {
        Header: string;
        accessor: string;
        Cell?: (cellValue: any) => JSX.Element;
        cellClassName?: string;
      }
      
    interface DeviceInterface {
      id?: string;
      deviceid?:string;
      ip?:string;
      devicename?:string;
      service?:string;
      stateactive?:string;
      stateconnect?:string;
  }
  type DeviceWithId = {
    id: string;
  } & DeviceInterface & {
    detail: JSX.Element;
    update: JSX.Element;
  };
  const colRef: CollectionReference<DocumentData> = collection(db, 'devicelist'); 
  useEffect(() => {
    const getDevices = async () => {
      const querySnapshot = await getDocs(colRef);
      const devices: Record<string, DeviceInterface> = {};
      querySnapshot.forEach((doc) => {
        devices[doc.id] = doc.data() as DeviceInterface;
      });
      setList(devices);
    };
    getDevices();
  }, []);

  const data: DeviceWithId[] = Object.keys(list).map((deviceId) => ({
    id: deviceId,
    deviceId: list[deviceId].deviceid,
    deviceName: list[deviceId].decicename,
    deviceIP: list[deviceId].ip,
    activeState: list[deviceId].stateactive,
    connectState: list[deviceId].stateconnect,
    service: list[deviceId].service,
    detail: <Link to={`/devicedetail/${deviceId}`}>Chi tiết</Link>,
    update: <Link to={`/deviceupdate/${deviceId}`}>Cập nhật</Link>,
  }));


    const truncateString = (str: string, maxLength: number) => {
        if (str.length <= maxLength) {
          return str;
        }
        return `${str.substr(0, maxLength)}...`;
      };
      
      const ServiceCell = ({ value }: { value: string }) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const maxLength = 20;
      
        const truncatedService = truncateString(value, maxLength);
      
        const handleToggleExpanded = () => {
          setIsExpanded(!isExpanded);
        };
      
        return (
          <div>
            {isExpanded ? (
              <div className="whitespace-pre-line">{value}</div>
            ) : (
              <div className="truncate">{truncatedService}</div>
            )}
            {value.length > maxLength && (
              <button className="mt-2 underline" onClick={handleToggleExpanded}>
                {isExpanded ? 'Thu gọn' : 'Xem thêm'}
              </button>
            )}
          </div>
        );
      };
      
    const columns: Column[] = [
        {
            Header: 'Mã thiết bị',
            accessor: 'deviceId',
        },
        {
            Header: 'Tên thiết bị',
            accessor: 'deviceName',
        },
        {
            Header: 'Địa chỉ IP',
            accessor: 'deviceIP',
        },
        {
            Header: 'Trạng thái hoạt động',
            accessor: 'activeState',
        },
        {
            Header: 'Trạng thái kết nối',
            accessor: 'connectState',
        },
        {
            Header: 'Dịch vụ sử dụng',
            accessor: 'service',
            Cell: ({ value }: { value: string }) => <ServiceCell value={value} />,

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
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Ngưng hoạt động',
    //         connectState: 'Mất kết nối',
    //         service: 'Khám tim mạch, Khám mắt',
    //         detail: <a href='/devicedetail'>Chi tiết</a>,
    //         update: <a href="/deviceupdate">Cập nhật</a>
    //     },
    //     {
    //         id: '2',
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Hoạt động',
    //         connectState: 'Kết nối',
    //         service: 'Khám tim mạch, Khám mắt',
    //         detail: <a href="#">Chi tiết</a>,
    //         update: <a href="#">Cập nhật</a>
    //     },
    //     {
    //         id: '3',
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Ngưng hoạt động',
    //         connectState: 'Mất kết nối',
    //         service: 'Khám tim mạch, Khám mắt',
    //         detail: <a href="#">Chi tiết</a>,
    //         update: <a href="#">Cập nhật</a>
    //     },
    //     {
    //         id: '4',
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Ngưng hoạt động',
    //         connectState: 'Mất kết nối',
    //         service: 'Khám tim mạch, Khám mắt, Khám tai mũi họng, Khám răng',
    //         detail: <a href="#">Chi tiết</a>,
    //         update: <a href="#">Cập nhật</a>
    //     },
    //     {
    //         id: '5',
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Ngưng hoạt động',
    //         connectState: 'Mất kết nối',
    //         service: 'Khám tim mạch, Khám mắt',
    //         detail: <a href="#">Chi tiết</a>,
    //         update: <a href="#">Cập nhật</a>
    //     },
    //     {
    //         id: '6',
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Ngưng hoạt động',
    //         connectState: 'Mất kết nối',
    //         service: 'Khám tim mạch, Khám mắt',
    //         detail: <a href="#">Chi tiết</a>,
    //         update: <a href="#">Cập nhật</a>
    //     },
    //     {
    //         id: '7',
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Hoạt động',
    //         connectState: 'Kết nối',
    //         service: 'Khám tim mạch, Khám mắt',
    //         detail: <a href="#">Chi tiết</a>,
    //         update: <a href="#">Cập nhật</a>
    //     },
    //     {
    //         id: '8',
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Ngưng hoạt động',
    //         connectState: 'Mất kết nối',
    //         service: 'Khám tim mạch, Khám mắt',
    //         detail: <a href="#">Chi tiết</a>,
    //         update: <a href="#">Cập nhật</a>
    //     },
    //     {
    //         id: '9',
    //         deviceId: 'KIO_01',
    //         deviceName: 'Kiosk',
    //         deviceIP: '192.68.1.10',
    //         activeState: 'Hoạt động',
    //         connectState: 'Kết nối',
    //         service: 'Khám tim mạch, Khám mắt',
    //         detail: <a href="#">Chi tiết</a>,
    //         update: <a href="#">Cập nhật</a>
    //     },
    // ]
  return (
    <Table columns={columns} data={data} />
  )
}

