import React from 'react'
import Menu from '../../Menu/menu'
import './ProvideNumberDetail.css'
export const ProvideNumberDetail = () => {
  return (
    <div className='provide__number-detail-page'>
        <Menu/>
        <h1>Quản lý cấp số</h1>
        <div className="provide__number-detail">
        <h3>Thông tin cấp số</h3>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Họ và tên: 
                    <div className="provide__number-detail-column-content">
                        <p>Phạm Lê Minh Duy</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    Nguồn cấp:
                    <div className="provide__number-detail-column-content">
                        <p>Kiosk</p>
                    </div> 
                </div>
            </div>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Tên dịch vụ:
                    <div className="provide__number-detail-column-content">
                        <p>Khám tim mạch</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    Trạng thái: 
                    <div className="provide__number-detail-column-content provide__number-detail-column-state">
                        <span></span>
                        <p>Đang chờ</p>
                    </div>
                    
                </div>
            </div>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Số thứ tự: 
                    <div className="provide__number-detail-column-content">
                        <p>2001201</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    Số điện thoại: 
                    <div className="provide__number-detail-column-content">
                        <p>0833299959</p>
                    </div>
                </div>
            </div>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Thời gian cấp: 
                    <div className="provide__number-detail-column-content">
                        <p>14:35 - 07/11/2021</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    Địa chỉ Email: 
                    <div className="provide__number-detail-column-content">
                        <p>duy.207CT68618@vanlanguni.vn</p>
                    </div>
                </div>
            </div>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Hạn sử dụng: 
                    <div className="provide__number-detail-column-content">
                        <p>18:00 - 07/11/2021</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
