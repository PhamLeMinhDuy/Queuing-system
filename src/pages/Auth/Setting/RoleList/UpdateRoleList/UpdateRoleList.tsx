import React from 'react'
import Menu from '../../../Menu/menu'
import './UpdateRoleList.css'
export const  UpdateRoleList= () => {
  return (
    <div className='role__list-page'>
        <Menu/>
        <h1>Danh sách vai trò</h1>
        <div className="role__list-infor">
            <h3>Thông tin vai trò</h3>
            <div className="role__list-infor-row">
                <div className="role__list-infor-column">
                    <div className="role__list-infor-column-infor">
                        <div className="role__list-infor-column-title">
                            Tên vai trò: <p>*</p>
                        </div>
                        <input type="text" placeholder="Nhập tên vai trò"/>
                        <div className="role__list-infor-column-title">
                         Mô tả:
                        </div>
                        <textarea rows={10} cols={50} name="message" placeholder="Nhập mô tả"></textarea>
                        <div className='role__list-infor-column-other-sub'>
                        Là trường thông tin bắt buộc <p>*</p>
                        </div>
                    </div>
                </div>    
                
                <div className="role__list-infor-column">
                    <div className="role__list-infor-column-title">
                        Phân quyền chức năng: <p>*</p>
                    </div>
                    <div className="role__list-infor-column-list-checkbox">
                        <h3>Nhóm chức năng A</h3>
                        <ul>
                            <li><input type="checkbox" /> Tất cả </li>
                            <li><input type="checkbox" /> Chức năng X</li>
                            <li><input type="checkbox" /> Chức năng y</li>
                            <li><input type="checkbox" /> Chức năng z</li>
                        </ul>  
                        <h3>Nhóm chức năng B</h3>
                        <ul>
                            <li><input type="checkbox" /> Tất cả </li>
                            <li><input type="checkbox" /> Chức năng X</li>
                            <li><input type="checkbox" /> Chức năng y</li>
                            <li><input type="checkbox" /> Chức năng z</li>
                        </ul>  
                        <h3>Nhóm chức năng C</h3>
                        <ul>
                            <li><input type="checkbox" /> Tất cả </li>
                            <li><input type="checkbox" /> Chức năng X</li>
                            <li><input type="checkbox" /> Chức năng y</li>
                            <li><input type="checkbox" /> Chức năng z</li>
                        </ul>  
                        <h3>Nhóm chức năng D</h3>
                        <ul>
                            <li><input type="checkbox" /> Tất cả </li>
                            <li><input type="checkbox" /> Chức năng X</li>
                            <li><input type="checkbox" /> Chức năng y</li>
                            <li><input type="checkbox" /> Chức năng z</li>
                        </ul>  
                        <h3>Nhóm chức năng E</h3>
                        <ul>
                            <li><input type="checkbox" /> Tất cả </li>
                            <li><input type="checkbox" /> Chức năng X</li>
                            <li><input type="checkbox" /> Chức năng y</li>
                            <li><input type="checkbox" /> Chức năng z</li>
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
        <div className="role__list-btn">
                <input type="submit" className='role__list-btn--cancel btn' value='Hủy bỏ' />
                <input type="submit" className='role__list-btn--submit btn primary-btn' value='Cập nhật' />
          </div>
    </div>
  )
}
