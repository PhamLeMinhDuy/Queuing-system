import React, { useEffect, useState } from 'react';
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
import {Monitor } from 'react-feather'
import { Link } from 'react-router-dom';
import { Bell } from 'react-feather'
import avatar_cat from './avatar/avatar_cat.jpg'
import './DashBoardMenu.css'
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../../../firebase/config';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
export const DashBoardMenu = () => 
{
    const [list, setList] = React.useState<{id: string}[]>([]);
    const [user, setUser] = useState({});
    const [avatarUrl, setAvatarUrl] = useState('');
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
    const storage = getStorage();
    const imgRef = ref(storage, `items/${curentuser}.jpg`);
    useEffect(() => {getDownloadURL(imgRef)
        .then((url) => {
            setAvatarUrl(url);
        })
        .catch((error) => {
            switch (error.code) {
            case 'storage/object-not-found':
                break;
            case 'storage/unauthorized':
                break;
            case 'storage/canceled':
                break;
            case 'storage/unknown':
                break;
            }
        });},[imgRef])
    return (

                <div className="content-dashboard__header-dashboard">
                    <div className="content-dashboard__header-user-dashboard">
                            <div className="content-dashboard__header-user-avatar">
                                <div className="content-dashboard__header-user-avatar-bell">
                                    <i className="fa-solid fa-bell"></i>
                                </div>
                                <img className='content-dashboard__header-user-avatar-img' src={avatarUrl} />
                                <ul>
                                    <li className='content-dashboard__header-user-avatar-infor--hello'>Xin chào</li>
                                    <li className='content-dashboard__header-user-avatar-infor--name'><Link style={{textDecoration: 'none', color: 'black'}}to='/inforpage'>{userInfo && userInfo.name}</Link></li>
                                </ul>
                            </div>
                            <div className="content-dashboard__header-user-overview">
                                <p className='content-dashboard__header-user-overview-title'>Tổng quan</p>
                                <div className="content-dashboard__header-user-overview-statistical">
                                    <div className="content-dashboard__header-user-overview-statistical-multiple">
                                        <div className="content-dashboard__header-user-overview-statistical-percent">
                                            <div className="content-dashboard__header-user-overview-statistical-percent--outer">
                                                <div className="content-dashboard__header-user-overview-statistical-percent--inner">
                                                    <span className='content-dashboard__header-user-overview-statistical-percent-value'>90%</span>
                                                </div>
                                            </div>        
                                        </div>
                                        <div className="content-dashboard__header-user-overview-statistical-data">
                                            <p>4.221</p>
                                            <p className="content-dashboard__header-user-overview-statistical-data-device">
                                            <Monitor className='icon'/>
                                            Thiết bị</p>
                                        </div>              
                                    </div>
                                    <div className="content-dashboard__header-user-overview-statistical-multiple content-dashboard__header-user-overview-statistical-multiple-state">
                                        <div className="content-dashboard__header-user-overview-statistical-state">
                                            <p className='dot-yellow'>Đang hoạt động</p>
                                            <p className='dot-purple'>Ngưng hoạt động</p>
                                        </div>
                                        <div className="content-dashboard__header-user-overview-statistical-state-data content-dashboard__header-user-overview-statistical-device-state-data">
                                            <p>3.799</p>
                                            <p>422</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-dashboard__header-user-overview-statistical">
                                    <div className="content-dashboard__header-user-overview-statistical-multiple">
                                        <div className="content-dashboard__header-user-overview-statistical-percent content-dashboard__header-user-overview-statistical-percent-service">
                                            <div className="content-dashboard__header-user-overview-statistical-percent--outer content-dashboard__header-user-overview-statistical-percent--outer-service">
                                                <div className="content-dashboard__header-user-overview-statistical-percent--inner content-dashboard__header-user-overview-statistical-percent--inner-service">
                                                    <span className='content-dashboard__header-user-overview-statistical-percent-value'>76%</span>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="content-dashboard__header-user-overview-statistical-data">
                                            <p>276</p>
                                            <p className="content-dashboard__header-user-overview-statistical-data-service">
                                                <img className='icon' src={service_icon} />
                                                Dịch vụ
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content-dashboard__header-user-overview-statistical-multiple content-dashboard__header-user-overview-statistical-multiple-state">
                                        <div className="content-dashboard__header-user-overview-statistical-state">
                                            <p className='dot-blue'>Đang hoạt động</p>
                                            <p className='dot-purple'>Ngưng hoạt động</p>
                                        </div>
                                        <div className="content-dashboard__header-user-overview-statistical-state-data content-dashboard__header-user-overview-statistical-service-state-data">
                                            <p>210</p>
                                            <p>66</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-dashboard__header-user-overview-statistical">
                                    <div className="content-dashboard__header-user-overview-statistical-multiple">
                                        <div className="content-dashboard__header-user-overview-statistical-percent content-dashboard__header-user-overview-statistical-percent-number">
                                            <div className="content-dashboard__header-user-overview-statistical-percent--outer content-dashboard__header-user-overview-statistical-percent--outer-number">
                                                <div className="content-dashboard__header-user-overview-statistical-percent--inner content-dashboard__header-user-overview-statistical-percent--inner-number">
                                                    <div className="content-dashboard__header-user-overview-statistical-percent-inner content-dashboard__header-user-overview-statistical-percent--first-inner-number">
                                                        <div className="content-dashboard__header-user-overview-statistical-percent-inner-number content-dashboard__header-user-overview-statistical-percent--second-inner-number">
                                                            <span className='content-dashboard__header-user-overview-statistical-percent-value'>86%</span>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="content-dashboard__header-user-overview-statistical-data">
                                            <p>4.221</p>
                                            <p className="content-dashboard__header-user-overview-statistical-data-number">
                                                <img className='icon' src={number_icon} />
                                                Cấp số
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content-dashboard__header-user-overview-statistical-multiple content-dashboard__header-user-overview-statistical-multiple-state">
                                        <div className="content-dashboard__header-user-overview-statistical-state">
                                            <p className='dot-green'>Đã sử dụng</p>
                                            <p className='dot-purple'>Đang chờ</p>
                                            <p className='dot-pink'>Bỏ qua</p>
                                        </div>
                                        <div className="content-dashboard__header-user-overview-statistical-state-data content-dashboard__header-user-overview-statistical-number-state-data">
                                            <p>3.721</p>
                                            <p>486</p>
                                            <p>32</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-dashboard__header-user-overview-calendar">
                                    <CalendarComponent/>
                                </div>
                            </div>
                        
                    </div>
                </div>
    )
}
export default DashBoardMenu;