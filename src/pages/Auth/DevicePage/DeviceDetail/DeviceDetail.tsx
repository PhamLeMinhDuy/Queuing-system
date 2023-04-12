import React, { useEffect } from 'react'
import Menu from '../../Menu/menu'
import './DeviceDetail.css'
import { useParams } from 'react-router-dom';
import { CollectionReference, DocumentData, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
export const DeviceDetail = () => {
    interface DeviceDetailParams {
        id: string;
    }
    const [list, setList] = React.useState<{id: string}[]>([]);
    const colRef: CollectionReference<DocumentData> = collection(db, 'devicelist'); 
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const getDevice = async () => {
            const data = await getDocs(colRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getDevice();
        
    },[]);
    let deviceInfo: any;
    deviceInfo = list.find((data) => data.id.replace(' ', '') == id);
    if (deviceInfo) {
    console.log(deviceInfo.name);
    }
    
  return (
    <div className="device__detail-page">
        <Menu/>
        <h1>Quản lý thiết bị</h1>
        <div style={{width:"77.2%", left:"55%"}} className="device__detail">
            <h3>Thông tin thiết bị</h3>
            <div  className="device__detail-row">
                <div style={{width:"50%", position:"relative"}} className="device__detail-column">
                    Mã thiết bị: 
                    <p style={{position:"absolute", left:"180px"}}>{deviceInfo && deviceInfo.deviceid}</p>
                </div>
                <div style={{width:"50%", position:"relative"}} className="device__detail-column">
                    Loại thiết bị: 
                    <p style={{position:"absolute", left:"180px"}}>{deviceInfo && deviceInfo.type}</p>
                </div>
            </div>
            <div className="device__detail-row">
                <div style={{width:"50%", position:"relative"}} className="device__detail-column">
                    Tên thiết bị: 
                    <p style={{position:"absolute", left:"180px"}}>{deviceInfo && deviceInfo.name}</p>
                </div>
                <div style={{width:"50%", position:"relative"}} className="device__detail-column">
                    Tên đăng nhập: 
                    <p style={{position:"absolute", left:"180px"}}>{deviceInfo && deviceInfo.username}</p>
                </div>
            </div>
            <div className="device__detail-row">
                <div style={{width:"50%", position:"relative"}} className="device__detail-column">
                    Địa chỉ IP: 
                    <p style={{position:"absolute", left:"180px"}}>{deviceInfo && deviceInfo.ip}</p>
                </div>
                <div style={{width:"50%", position:"relative"}} className="device__detail-column">
                    Mật khẩu: 
                    <p style={{position:"absolute", left:"180px"}}>{deviceInfo && deviceInfo.password}</p>
                </div>
            </div>
            <div className="device__detail-row device__detail-row-service">
                Dịch vụ sử dụng:
            </div>
            <div className="device__detail-row device__detail-row-service-detail">{deviceInfo && deviceInfo.service}</div>

        </div>
    </div>
  )
}
function setList(arg0: { id: string; }[]) {
    throw new Error('Function not implemented.');
}

