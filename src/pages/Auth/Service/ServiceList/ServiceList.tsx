import Menu from "../../Menu/menu";
import React from 'react'
import { Table } from "./Component/Table";
import SearchBox from "./SearchBox/SearchBox";
import './ServiceList.css'
export const ServiceList = () => {
    return (
        <div className="service__list-page">
          <Menu/>
          <div className="service__list-page-sub-header">
            <h1>Quản lý dịch vụ</h1>
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
                  <div className="service__list-table">
                    <Table/>
                  </div>
                </div>
                
                <div className="service__list-table-page-number">
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
              <i className="fa-solid fa-square-plus"></i>
              <p>Thêm dịch vụ</p>
            </span>
              
          </div>
        </div>
      )
}
