import React from 'react'
import logout_icon from './icons/log-out.png'
import dashboard_icon from './icons/dashboard.png'
import device_icon from './icons/device.png'
import number_icon from './icons/number.png'
import report_icon from './icons/report.png'
import service_icon from './icons/service.png'
import setting_icon from './icons/setting.png'
import treedot_icon from './icons/treedot.png'
import logo from '../logo/Logoalta.png'
import { Monitor } from 'react-feather'
import { Bell } from 'react-feather'
import avatar_cat from './avatar/avatar_cat.jpg'
import './menu.css'
import { Link, useNavigate } from 'react-router-dom'
export const Menu = () => {
    const navigate = useNavigate();
  return (
    <div className="menu__page">
        <div className="page">
            <div className="menu">
            
                <ul className="menu__item">
                    <div className="logo-alta">
                        <img src={logo} alt="Đây là Logo của công ty Alta Media"></img>
                    </div>
                    <li className='item'>
                        <a href='#'>
                            <img className='icon' src={dashboard_icon} />
                            Dashboard
                        </a>
                    </li>
                    <li className='item'>
                        <a href='#'>
                            <Monitor className='icon'/>
                            Thiết bị
                        </a>
                    </li>
                    <li className='item'>
                        <a href='/servicelist'>
                            <img className='icon' src={service_icon} />
                            Dịch vụ
                        </a>
                    </li>
                    <li className='item'>
                        <a href='#'>
                            <img className='icon' src={number_icon} />
                            Cấp số
                        </a>
                    </li>
                    <li className='item'>
                        <a href='#'>
                            <img className='icon' src={report_icon} />
                            Báo cáo
                        </a>
                    </li>
                    <li className='item item__have-list'>
                        <a className='setting' href='#'>
                            <img className='icon' src={setting_icon} />
                            Cài đặt hệ thống
                            <img className='icon icon_treedot' src={treedot_icon} />
                        </a>
                        <div className="menu__item-setting">
                            <ul className='menu__item-setting-list'>
                                <li>Quản lý vai trò</li>
                                <li>Quản lý tài khoản</li>
                                <li>Nhật ký người dùng</li>
                            </ul>

                        </div>
                    </li>
                    
                </ul>
                <div className="menu__sign--out">
                    <button onClick={() => navigate('/')}>
                        <span>
                            <img src={logout_icon}/>
                            Đăng xuất
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="content__header">
                <div className="content__header-title">
                    Thông tin cá nhân
                </div>
                <div className="content__header-user">
                    <div className="content__header-user-avatar">
                        <div className="content__header-user-avatar-bell">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <img className='content__header-user-avatar-img' src={avatar_cat} />
                    </div>
                    <div className="content__header-user-avatar-infor">
                        <li className='content__header-user-avatar-infor--hello'>Xin chào</li>
                        <li className='content__header-user-avatar-infor--name'>Phạm Lê Minh Duy</li>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
export default Menu;