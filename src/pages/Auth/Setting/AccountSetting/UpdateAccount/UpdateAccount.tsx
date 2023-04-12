import React from 'react'
import Menu from '../../../Menu/menu'
import './UpdateAccount.css'
import { EyeOff } from 'react-feather'
export const UpdateAccount = () => {
  return (
    <div className='account__update-page'>
        <Menu/>
        <h1>Quản lý tài khoản</h1>
        <div className="account__update-infor">
          <h3>Thông tin tài khoản</h3>
          <div className="account__update-infor-row">
            <div className="account__update-infor-column">
              <div className="account__update-infor-column-title">
                Họ tên: <p>*</p>
              </div>
                <input type="text" placeholder="Nhập họ tên"/>
              </div>
              <div className="account__update-infor-column">
                <div className="account__update-infor-column-title">
                Tên đăng nhập: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập tên đăng nhập"/>
              </div>
          </div>
          <div className="account__update-infor-row">
            <div className="account__update-infor-column">
              <div className="account__update-infor-column-title">
                Số điện thoại: <p>*</p>
              </div>
                <input type="text" placeholder="Nhập số điện thoại"/>
              </div>
              <div className="account__update-infor-column">
                <div className="account__update-infor-column-title">
                Mật khẩu: <p>*</p>
                </div>
                <span className='account__update-infor-column-pass'>
                    <input type="password"  className="form-control"  placeholder="Nhập mật khẩu"/>
                    <EyeOff className='eye-off'/>
                </span>
              </div>
          </div>
          <div className="account__update-infor-row">
            <div className="account__update-infor-column">
              <div className="account__update-infor-column-title">
                Email: <p>*</p>
              </div>
                <input type="email" placeholder="Nhập email"/>
              </div>
              <div className="account__update-infor-column">
                <div className="account__update-infor-column-title">
                Nhập lại mật khẩu: <p>*</p>
                </div>
                <span className='account__update-infor-column-pass'>
                    <input type="password"  className="form-control"  placeholder="Nhập lại mật khẩu"/>
                    <EyeOff className='eye-off'/>
                </span>
                
              </div>
          </div>
          <div className="account__update-infor-row">
            <div className="account__update-infor-column">
                <div className="account__update-infor-column-title ">
                    Vai trò: <p>*</p>
                    
                </div>
                <div className="account__update-infor-column-input">
                    <p>Vai trò</p>
                    <i className="fa-solid fa-caret-down account__update-infor-column-icon"></i>
                    <div className="account__update-infor-column-list account__update-infor-column-list-type">
                    <ul>
                        <li className="account__update-infor-column-list-item">Kế toán</li>
                        <li className="account__update-infor-column-list-item">Quản lý</li>
                        <li className="account__update-infor-column-list-item">Admin</li>
                    </ul>
                    </div>
                </div>
                
            </div>
            <div className="account__update-infor-column">
                <div className="account__update-infor-column-title ">
                    Tình trạng: <p>*</p>
                    
                </div>
                <div className="account__update-infor-column-input">
                    <p>Chọn tình trạng</p>
                    <i className="fa-solid fa-caret-down account__update-infor-column-icon"></i>
                    <div className="account__update-infor-column-list account__update-infor-column-list-type">
                    <ul>
                        <li className="account__update-infor-column-list-item">Tất cả</li>
                        <li className="account__update-infor-column-list-item">Ngưng hoạt động</li>
                        <li className="account__update-infor-column-list-item">Hoạt động</li>
                    </ul>
                    </div>
                </div>
                
            </div>
          </div>
          <div className='account__update-infor-column-other-sub'>
                    Là trường thông tin bắt buộc <p>*</p>
          </div>
          <div className="account__update-btn">
            <input type="submit" className='account__update-btn--cancel btn' value='Hủy bỏ' />
            <input type="submit" className='account__update-btn--submit btn primary-btn' value='Cập nhật' />
          </div>
        </div>
    </div>
  )
}
