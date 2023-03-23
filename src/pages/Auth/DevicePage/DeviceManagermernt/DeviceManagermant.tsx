
import React from 'react'
import Menu from '../../Menu/menu'
import './devicemanagerment.css'
export const DeviceManagerment = () => {
  return (
    <div className='device__managerment'>
        <Menu/>
        <h1>Quản lý thiết bị</h1>
        <div className="device__managerment-infor">
          <h3>Thông tin thiết bị</h3>
          <div className="device__managerment-infor-row">
            <div className="device__managerment-infor-column">
              <div className="device__managermaent-infor-column-title">
                Mã thiết bị: <p>*</p>
              </div>
              <input type="text" placeholder="Nhập mã thiết bị"/>
            </div>
            <div className="device__managerment-infor-column">
              <div className="device__managermaent-infor-column-title ">
                Loại thiết bị: <p>*</p>
                
              </div>
              <div className="device__managermaent-infor-column-input">
                <p>Chọn loại thiết bị</p>
                <i className="fa-solid fa-caret-down device__managermaent-infor-column-icon"></i>
                <div className="device__managermaent-infor-column-list">
                  <ul>
                      <li className="device__managermaent-infor-column-list-item">Kiosk</li>
                      <li className="device__managermaent-infor-column-list-item">Display counter</li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
          <div className="device__managerment-infor-row">
            <div className="device__managerment-infor-column">
              <div className="device__managermaent-infor-column-title">
                Tên thiết bị: <p>*</p>
              </div>
                <input type="text" placeholder="Nhập tên thiết bị"/>
              </div>
              <div className="device__managerment-infor-column">
                <div className="device__managermaent-infor-column-title">
                Tên đăng nhập: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập tài khoản"/>
              </div>
          </div>
          <div className="device__managerment-infor-row">
            <div className="device__managerment-infor-column">
              <div className="device__managermaent-infor-column-title">
                Địa chỉ IP: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập địa chỉ IP"/>
              </div>
              <div className="device__managerment-infor-column">
                <div className="device__managermaent-infor-column-title">               
                Mật khẩu: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập mật khẩu"/>
              </div>
          </div>
          <div className="device__managerment-infor-row">
            <div className="device__managerment-infor-column-other ">
              <div className="device__managermaent-infor-column-other-title">
               Dịch vụ sử dụng: <p>*</p>
              </div>
              <input type="text" placeholder="Nhập dịch vụ sử dụng"/>
              <div className='device__managerment-infor-column-other-sub'>
                    Là trường thông tin bắt buộc <p>*</p>
              </div>
            </div>
          </div>
          <div className="device__managerment-btn">
            <input type="submit" className='device__managerment-btn--cancel btn' value='Hủy bỏ' />
            <input type="submit" className='device__managerment-btn--submit btn primary-btn' value='Thêm thiết bị' />
          </div>
        </div>
        

    </div>
  )
}
