import Menu from "../Menu/menu";
import React from 'react'
import avatar from "./avatar/avatar_cat.jpg"
import './inforpage.css'
import {Camera} from "react-feather"  
export const Inforpage = () => {
  return (
    <div className="inforpage">
        <Menu/>
        
        <div className="inforpage__user">
            <div className="inforpage__user-avatar">
                <img src={avatar}/>
                <div>
                    <Camera className="inforpage__user-camera"/>
                </div>
                <p>Phạm Lê Minh Duy</p>
            </div>
                <div className="inforpage__user-infor-detail">
                    <div className="inforpage__user-infor-detail-row">
                       <div className="inforpage__user-infor-detail-column">
                            Tên người dùng
                            <div>
                                <p>
                                Lê Quỳnh
                                </p>
                            </div>
                       </div>
                       <div className="inforpage__user-infor-detail-column">
                            Tên đăng nhập
                            <div>
                                <p>
                                Qunhas
                                </p>
                            </div>
                       </div>
                    </div>
                    <div className="inforpage__user-infor-detail-row">
                       <div className="inforpage__user-infor-detail-column">
                            Số điện thoại
                            <div>
                                <p>
                                0111222333
                                </p>
                            </div>
                       </div>
                       <div className="inforpage__user-infor-detail-column">
                            Mật khẩu
                            <div>
                                <p>
                                32121312
                                </p>
                            </div>
                       </div>
                    </div>
                    <div className="inforpage__user-infor-detail-row">
                       <div className="inforpage__user-infor-detail-column">
                            Email
                            <div>
                                <p>
                                vlu@......
                                </p>
                            </div>
                       </div>
                       <div className="inforpage__user-infor-detail-column">
                            Vai trò
                            <div>
                                <p>
                                Kế toán
                                </p>
                            </div>
                       </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
