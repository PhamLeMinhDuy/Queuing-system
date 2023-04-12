import React from 'react'
import Menu from '../../Menu/menu'
import './ServiceDetail.css'
import SearchBox from '../ServiceList/SearchBox/SearchBox'
import { Table } from './Component/Table'
export const ServiceDetail = () => {
  return (
    <div className="device__detail-page">
        <Menu/>
        <h1>Quản lý thiết bị</h1>
        <div className="device__detail">
            <h3>Thông tin dịch vụ</h3>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    
                    Mã dịch vụ: 
                    <div className="device__detail-column-content">
                    <p>201</p>                       
                    </div>
                </div>
            </div>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    Tên dịch vụ: 
                    <div className="device__detail-column-content">
                    <p>Khám tim mạch</p>                       
                    </div>
                </div>
            </div>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    Mô tả: 
                    <div className="device__detail-column-content">
                    <p>Chuyên các bệnh lý về tim</p>                       
                    </div>
                </div>
            </div>
            <h3>Quy tắc cấp số</h3>
            <div className="device__detail-row">
                <div className="device__detail-column ">
                    Tăng tự động: 
                    <div className="device__detail-column-content device__detail-column-content-number">
                        <p>0001</p>     
                        <span>đến</span>
                        <p>0009</p>                     
                    </div>
                                        
                </div>
            </div>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    Preflix: 
                    <div className="device__detail-column-content device__detail-column-content-number">
                    <p>0001</p>                       
                    </div>
                </div>
            </div>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    Reset mỗi ngày: 
                </div>
            </div>
            <div className="device__detail-row">
                <div className="device__detail-column">
                    Ví dụ: 201-2001
                </div>
            </div>

        </div>
        <div className="device__detail-table">
        <div className="service__list-search">
              <div className="service__list-search-state-time">
                <div className="service__list-search-state">
                  <p>Trạng thái hoạt động</p>
                    <div className="service__list-search-state-input">
                      <p>Tất cả</p>
                      <i className="fa-solid fa-caret-down"></i>
                      <div className="service__list-search-state-input-list">
                        <ul>
                          <li className="service__list-search-state-input-list-item">Tất cả</li>
                          <li className="service__list-search-state-input-list-item">Hoạt động</li>
                          <li className="service__list-search-state-input-list-item">Ngưng hoạt động</li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div className="service__list-search-time-table">
                  <div className="service__list-search-time">
                  <p>Chọn thời gian</p>
                    <div className="service__list-search-time-input">
                    
                      <SearchBox/>

                    </div>
                  </div>
                  <div className="service__list-table-detail">
                    <Table/>
                  </div>
                </div>
                
                <div className="service__list-table-page-number-detail">
                  <div className="service__list-table-page-number-arrow"><i className="fa-solid fa-caret-left"></i></div>
                  <div className="service__list-table-page-number-element">1</div>
                  <div className="service__list-table-page-number-element">2</div>
                  <div className="service__list-table-page-number-element">3</div>
                  <div className="service__list-table-page-number-element">4</div>
                  <div className="service__list-table-page-number-element">5</div>
                  <div className="service__list-table-page-number-element">...</div>
                  <div className="service__list-table-page-number-element">10</div>
                  <div className="service__list-table-page-number-arrow"><i className="fa-solid fa-caret-right"></i></div>
                </div>
              </div>
              <div className="service__list-search-keyword">
                <p>Từ khóa</p>
                <div className="service__list-search-keyword-input">
                  <input type="text" placeholder="Nhập từ khóa"/>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
        </div>
        <div className="service__list-add">
            <span>
            <i className="fa-sharp fa-solid fa-square-pen"></i>
              <p>Cập nhật danh sách</p>
            </span>
              
        </div>
        <div className="service__list-back">
            <span>
            <i className="fa-sharp fa-solid fa-rotate-left"></i>
              <p>Quay lại</p>
            </span>
              
        </div>
    </div>
  )
}
