import Menu from "../Menu/menu";
import { getDatabase, ref, child, get } from "firebase/database";
import { collection, query, getDoc, getDocs, getFirestore, where, onSnapshot, QuerySnapshot, CollectionReference, DocumentData } from "firebase/firestore";

import firebase from 'firebase/app';
import 'firebase/firestore';
import { db, auth } from "../../../firebase/config";
import React, { useEffect, useState } from 'react'
import avatar from "./avatar/avatar_cat.jpg"
import './inforpage.css'
import {Camera} from "react-feather"  
export const Inforpage = () => {
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
    
  return (
    <div className="inforpage">
        <Menu/>
        
        <div className="inforpage__user">
            <div className="inforpage__user-avatar">
                <img src={avatar}/>
                <div>
                    <Camera className="inforpage__user-camera"/>
                </div>
                <p>{userInfo && userInfo.name}</p>
            </div>
                <div className="inforpage__user-infor-detail">
                    <div className="inforpage__user-infor-detail-row">
                       <div className="inforpage__user-infor-detail-column">
                            Tên người dùng
                            <div>
                                <p>
                                {userInfo && userInfo.name}
                                </p>
                            </div>
                       </div>
                       <div className="inforpage__user-infor-detail-column">
                            Tên đăng nhập
                            <div>
                                <p>
                                {userInfo && userInfo.account}
                                </p>
                            </div>
                       </div>
                    </div>
                    <div className="inforpage__user-infor-detail-row">
                       <div className="inforpage__user-infor-detail-column">
                            Số điện thoại
                            <div>
                                <p>
                                {userInfo && userInfo.phone}
                                </p>
                            </div>
                       </div>
                       <div className="inforpage__user-infor-detail-column">
                            Mật khẩu
                            <div>
                                <p>
                                {userInfo && userInfo.password}
                                </p>
                            </div>
                       </div>
                    </div>
                    <div className="inforpage__user-infor-detail-row">
                       <div className="inforpage__user-infor-detail-column">
                            Email
                            <div>
                                <p>
                                {userInfo && userInfo.email}
                                </p>
                            </div>
                       </div>
                       <div className="inforpage__user-infor-detail-column">
                            Vai trò
                            <div>
                                <p>
                                {userInfo && userInfo.role}
                                </p>
                            </div>
                       </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
