import React, { useState } from 'react';
import CalendarComponent from '../Calendar/Calendar';
import logout_icon from './icons/log-out.png'
import dashboard_icon from './icons/dashboard.png'
import device_icon from './icons/device.png'
import number_icon from './icons/number.png'
import report_icon from './icons/report.png'
import service_icon from './icons/service.png'
import setting_icon from './icons/setting.png'
import treedot_icon from './icons/treedot.png'
import logo from '../../logo/Logoalta.png'
import { Monitor } from 'react-feather'
import { Bell } from 'react-feather'
import avatar_cat from './avatar/avatar_cat.jpg'
import './DashBoardMenu.css'
export const DashBoardMenu = () => 
{
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
                            <a href='#'>
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
                        <button>
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
                                <ul>
                                    <li className='content__header-user-avatar-infor--hello'>Xin chào</li>
                                    <li className='content__header-user-avatar-infor--name'>Phạm Lê Minh Duy</li>
                                </ul>
                            </div>
                            <div className="content__header-user-overview">
                                <p className='content__header-user-overview-title'>Tổng quan</p>
                                <div className="content__header-user-overview-statistical">
                                    <div className="content__header-user-overview-statistical-multiple">
                                        <div className="content__header-user-overview-statistical-percent">
                                            <div className="content__header-user-overview-statistical-percent--outer">
                                                <div className="content__header-user-overview-statistical-percent--inner">
                                                    <span className='content__header-user-overview-statistical-percent-value'>90%</span>
                                                </div>
                                            </div>        
                                        </div>
                                        <div className="content__header-user-overview-statistical-data">
                                            <p>4.221</p>
                                            <p className="content__header-user-overview-statistical-data-device">
                                            <Monitor className='icon'/>
                                            Thiết bị</p>
                                        </div>              
                                    </div>
                                    <div className="content__header-user-overview-statistical-multiple content__header-user-overview-statistical-multiple-state">
                                        <div className="content__header-user-overview-statistical-state">
                                            <p className='dot-yellow'>Đang hoạt động</p>
                                            <p className='dot-purple'>Ngưng hoạt động</p>
                                        </div>
                                        <div className="content__header-user-overview-statistical-state-data content__header-user-overview-statistical-device-state-data">
                                            <p>3.799</p>
                                            <p>422</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content__header-user-overview-statistical">
                                    <div className="content__header-user-overview-statistical-multiple">
                                        <div className="content__header-user-overview-statistical-percent content__header-user-overview-statistical-percent-service">
                                            <div className="content__header-user-overview-statistical-percent--outer content__header-user-overview-statistical-percent--outer-service">
                                                <div className="content__header-user-overview-statistical-percent--inner content__header-user-overview-statistical-percent--inner-service">
                                                    <span className='content__header-user-overview-statistical-percent-value'>76%</span>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="content__header-user-overview-statistical-data">
                                            <p>276</p>
                                            <p className="content__header-user-overview-statistical-data-service">
                                                <img className='icon' src={service_icon} />
                                                Dịch vụ
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content__header-user-overview-statistical-multiple content__header-user-overview-statistical-multiple-state">
                                        <div className="content__header-user-overview-statistical-state">
                                            <p className='dot-blue'>Đang hoạt động</p>
                                            <p className='dot-purple'>Ngưng hoạt động</p>
                                        </div>
                                        <div className="content__header-user-overview-statistical-state-data content__header-user-overview-statistical-service-state-data">
                                            <p>210</p>
                                            <p>66</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content__header-user-overview-statistical">
                                    <div className="content__header-user-overview-statistical-multiple">
                                        <div className="content__header-user-overview-statistical-percent content__header-user-overview-statistical-percent-number">
                                            <div className="content__header-user-overview-statistical-percent--outer content__header-user-overview-statistical-percent--outer-number">
                                                <div className="content__header-user-overview-statistical-percent--inner content__header-user-overview-statistical-percent--inner-number">
                                                    <div className="content__header-user-overview-statistical-percent-inner content__header-user-overview-statistical-percent--first-inner-number">
                                                        <div className="content__header-user-overview-statistical-percent-inner-number content__header-user-overview-statistical-percent--second-inner-number">
                                                            <span className='content__header-user-overview-statistical-percent-value'>86%</span>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="content__header-user-overview-statistical-data">
                                            <p>4.221</p>
                                            <p className="content__header-user-overview-statistical-data-number">
                                                <img className='icon' src={number_icon} />
                                                Cấp số
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content__header-user-overview-statistical-multiple content__header-user-overview-statistical-multiple-state">
                                        <div className="content__header-user-overview-statistical-state">
                                            <p className='dot-green'>Đã sử dụng</p>
                                            <p className='dot-purple'>Đang chờ</p>
                                            <p className='dot-pink'>Bỏ qua</p>
                                        </div>
                                        <div className="content__header-user-overview-statistical-state-data content__header-user-overview-statistical-number-state-data">
                                            <p>3.721</p>
                                            <p>486</p>
                                            <p>32</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content__header-user-overview-calendar">
                                    <CalendarComponent/>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
    
        </div>
    )
}
export default DashBoardMenu;