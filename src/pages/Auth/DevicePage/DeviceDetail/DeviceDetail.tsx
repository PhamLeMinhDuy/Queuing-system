import React from 'react'
import Menu from '../../Menu/menu'
import './DeviceDetail.css'
export const DeviceDetail = () => {
  return (
    <div className="device__detail-page">
        <Menu/>
        <h1>Quản lý thiết bị</h1>
        <div className="device__detail">
            <h3>Thông tin thiết bị</h3>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    Mã thiết bị: 
                    <p>KIO_01</p>
                </div>
                <div className="device__detail-column">
                    Loại thiết bị: 
                    <p>Kiosk</p>
                </div>
            </div>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    Tên thiết bị: 
                    <p>Kiosk</p>
                </div>
                <div className="device__detail-column">
                    Tên đăng nhập: 
                    <p>Lynkyo011</p>
                </div>
            </div>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    Địa chỉ IP: 
                    <p>128.172.308</p>
                </div>
                <div className="device__detail-column">
                    Mật khẩu: 
                    <p>CMS</p>
                </div>
            </div>
            <div className="device__detail-row device__detail-row-service">
                Dịch vụ sử dụng:
            </div>
            <div className="device__detail-row device__detail-row-service-detail">Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</div>

        </div>
    </div>
  )
}
