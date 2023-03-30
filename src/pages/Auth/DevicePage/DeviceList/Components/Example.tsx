import React from 'react'
import { CellProps } from 'react-table';
import { Table } from './Table';
import { useState } from 'react';

export const Example = () => {
    interface Column {
        Header: string;
        accessor: string;
        Cell?: (cellValue: any) => JSX.Element;
        cellClassName?: string;
      }
      
    interface Data {
        id: string;
        deviceId: string;
        deviceName: string;
        deviceIP: string;
        activeState: string;
        connectState: string;
        service: string;
        detail: JSX.Element;
        update: JSX.Element;
    }
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
    const data = [
        {
            id: '1',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Ngưng hoạt động',
            connectState: 'Mất kết nối',
            service: 'Khám tim mạch, Khám mắt',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '2',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Hoạt động',
            connectState: 'Kết nối',
            service: 'Khám tim mạch, Khám mắt',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '3',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Ngưng hoạt động',
            connectState: 'Mất kết nối',
            service: 'Khám tim mạch, Khám mắt',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '4',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Ngưng hoạt động',
            connectState: 'Mất kết nối',
            service: 'Khám tim mạch, Khám mắt, Khám tai mũi họng, Khám răng',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '5',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Ngưng hoạt động',
            connectState: 'Mất kết nối',
            service: 'Khám tim mạch, Khám mắt',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '6',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Ngưng hoạt động',
            connectState: 'Mất kết nối',
            service: 'Khám tim mạch, Khám mắt',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '7',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Hoạt động',
            connectState: 'Kết nối',
            service: 'Khám tim mạch, Khám mắt',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '8',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Ngưng hoạt động',
            connectState: 'Mất kết nối',
            service: 'Khám tim mạch, Khám mắt',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
        {
            id: '9',
            deviceId: 'KIO_01',
            deviceName: 'Kiosk',
            deviceIP: '192.68.1.10',
            activeState: 'Hoạt động',
            connectState: 'Kết nối',
            service: 'Khám tim mạch, Khám mắt',
            detail: <a href="#">Chi tiết</a>,
            update: <a href="#">Cập nhật</a>
        },
    ]
  return (
    <Table columns={columns} data={data} />
  )
}

