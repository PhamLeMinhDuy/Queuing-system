import Menu from "../../Menu/menu";
import React from 'react'
import './DeviceList.css'
import { Example } from "./Components/Example";
export const DeviceList = () => {
  return (
    <div className="device__list-page">
      <Menu/>
      <div className="device__list-page-sub-header">
        <h1>Danh sách thiết bị</h1>
        <div className="device__list-search">
          <div className="device__list-search-state">
            <div className="device__list-search-state--active">
              <p>Trạng thái hoạt động</p>
              <div className="device__list-search-state--active-input">
                <p>Tất cả</p>
                <i className="fa-solid fa-caret-down"></i>
                <div className="device__list-search-state--active-input-list">
                  <ul>
                    <li className="device__list-search-state-input-list-item">Tất cả</li>
                    <li className="device__list-search-state-input-list-item">Hoạt động</li>
                    <li className="device__list-search-state-input-list-item">Ngưng hoạt động</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="device__list-search-state--connect">
              <p>Trạng thái hoạt động</p>
              <div className="device__list-search-state--connect-input">
                <p>Tất cả</p>
                <i className="fa-solid fa-caret-down"></i>
                <div className="device__list-search-state--connect-input-list">
                  <ul>
                    <li className="device__list-search-state-input-list-item">Tất cả</li>
                    <li className="device__list-search-state-input-list-item">Kết nối</li>
                    <li className="device__list-search-state-input-list-item">Mất kết nối</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="device__list-search-keyword">
            <p>Từ khóa</p>
            <div className="device__list-search-keyword-input">
              <input type="text" placeholder="Nhập từ khóa"/>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="device__list-table">
        <Example/>
      </div>
      <div className="device__list-add">
        <span>
          <i className="fa-solid fa-square-plus"></i>
          <p>Thêm thiết bị</p>
        </span>
          
        </div>
    </div>
  )
}
