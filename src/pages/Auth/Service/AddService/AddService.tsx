import React from 'react'
import Menu from '../../Menu/menu'
import './AddService.css'
export const AddService = () => {
  return (
    <div className='add__service-page'>
        <Menu/>
        <h1>Quản lý dịch vụ</h1>
        <div className="add__service-infor">
            <h3>Thông tin dịch vụ</h3>
            <div className="add__service-infor-row">
                <div className="add__service-infor-column">
                    <div className="add__service-infor-column-infor">
                        <div className="add__service-infor-column-title ">
                            Mã dịch vụ: <p>*</p>
                        </div>
                        <input type="text" placeholder="Nhập mã dịch vụ"/>
                        <div className="add__service-infor-column-title add__service-infor-column-title-css">
                        Tên dịch vụ: <p>*</p>
                        </div>
                        <input type="text" placeholder="Nhập tên dịch vụ"/>
                </div>
                    </div>

                <div className="add__service-infor-column">
                    <div className="add__service-infor-column-title">
                    Mô tả:
                    </div>
                    <textarea rows={10} cols={50} name="message" placeholder="Mô tả dịch vụ"></textarea>
                </div>
            </div>
            <h3>Quy tắc cấp số</h3>
            <div className="add__service-infor-row-checkbox">
                <div className="add__service-infor-column-checkbox">
                    <input type="checkbox" /> Tăng tự động từ: 
                </div>
                <div className="add__service-infor-column-checkbox">
                        <p>0001</p>
                        <span>đến</span>
                        <p>0009</p>
                </div>
            </div>
            <div className="add__service-infor-row-checkbox">
                <div className="add__service-infor-column-checkbox">
                    <input type="checkbox" /> Prefix: 
                </div>
                <div className="add__service-infor-column-checkbox">
                        <p>0001</p>
                </div>
            </div>
            <div className="add__service-infor-row-checkbox">
                <div className="add__service-infor-column-checkbox">
                    <input type="checkbox" /> Surfix: 
                </div>
                <div className="add__service-infor-column-checkbox">
                        <p>0001</p>
                </div>
            </div>
            <div className="add__service-infor-row-checkbox">
                <div className="add__service-infor-column-checkbox">
                    <input type="checkbox" /> Reset mỗi ngày:
                </div>
                <div className="add__service-infor-column-checkbox">
                        
                </div>
            </div>
            <div className="add__service-infor-row">
                <div className='add__service-infor-column-other-sub'>
                        Là trường thông tin bắt buộc <p>*</p>
                </div>

            </div>
            <div className="add__service-btn">
                <input type="submit" className='add__service-btn--cancel btn' value='Hủy bỏ' />
                <input type="submit" className='add__service-btn--submit btn primary-btn' value='Thêm dịch vụ' />
          </div>
        </div>
    </div>
  )
}
