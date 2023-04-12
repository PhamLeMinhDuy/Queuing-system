import React from 'react'
import logout_icon from './icons/log-out.png'
import dashboard_icon from './icons/dashboard.png'
import { CollectionReference, DocumentData, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../../firebase/config";
import { useEffect, useState } from 'react'
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
    interface UserInterface {
        id?: string;
        name?:string;
        account?:string;
        email?:string;
        password?:string;
        role?:string;
        phone?:string;
    }
    const [list, setList] = React.useState<{id: string}[]>([]);
    const [user, setUser] = useState({});
    const colRef: CollectionReference<DocumentData> = collection(db, 'users'); 
    const curentuser = auth.currentUser?.uid

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(colRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUser();
        
    },[]);
    let userInfo: any;
    userInfo = list.find((data) => data.id.replace(' ', '') == curentuser);
    if (userInfo) {
    console.log(userInfo.name);
    }
    
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
                        <a href='/dashboardpage'>
                            <img className='icon' src={dashboard_icon} />
                            Dashboard
                        </a>
                    </li>
                    <li className='item'>
                        <a href='/devicelist'>
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
                        <a href='/providenumberlist'>
                            <img className='icon' src={number_icon} />
                            Cấp số
                        </a>
                    </li>
                    <li className='item'>
                        <a href='/report'>
                            <img className='icon' src={report_icon} />
                            Báo cáo
                        </a>
                    </li>
                    <li className='item item__have-list'>
                            <img className='icon' src={setting_icon} />
                            Cài đặt hệ thống
                            <img className='icon icon_treedot' src={treedot_icon} />
                        <div className="menu__item-setting">
                            <ul className='menu__item-setting-list'>
                                <li style={{color: "#7E7D88"}} className='menu__item-setting-list-item'><Link to='/rolelist'><span>Quản lý vai trò</span></Link></li>
                                <li style={{color: "#7E7D88"}} className='menu__item-setting-list-item'><Link to='/accountlist'><span>Quản lý tài khoản</span></Link></li>
                                <li style={{color: "#7E7D88"}} className='menu__item-setting-list-item'><Link to='/diary'><span>Quản lý tài khoản</span></Link></li>
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
                        <li className='content__header-user-avatar-infor--name'>{userInfo && userInfo.name}</li>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
export default Menu;