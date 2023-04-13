import Menu from "../../Menu/menu";
import { Link } from "react-router-dom";
import React from 'react'
import { Table } from "./Component/Table";
import SearchBox from "./SearchBox/SearchBox";
import './ProvideNumberList.css'
export const ProvideNumberList = () => {
    return (
        <div className="provide__list-page">
          <Menu/>
          <div className="provide__list-page-sub-header">
            <h1>Quản lý cấp số</h1>
            <div className="provide__list-search">
              <div className="provide__list-search-state-time">
                <div className="provide__list-search-provide-name">
                    <p>Tên dịch vụ</p>
                    <div className="provide__list-search-provide-name-select">
                    <p>Tất cả</p>
                    <i className="fa-solid fa-caret-down"></i>
                    <div className="provide__list-search-provide-name-select-list">
                        <ul>
                          <li className="provide__list-search-provide-name-select-list-item">Tất cả</li>
                          <li className="provide__list-search-provide-name-select-list-item">Khám tim</li>
                          <li className="provide__list-search-provide-name-select-list-item">Khám sản - Phụ khoa</li>
                          <li className="provide__list-search-provide-name-select-list-item">Khám răng hàm mặt</li>
                          <li className="provide__list-search-provide-name-select-list-item">Khám tai mũi họng</li>
                          <li className="provide__list-search-provide-name-select-list-item">Khám hô hấp</li>
                          <li className="provide__list-search-provide-name-select-list-item">Khám tổng quát</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="provide__list-search-state">
                  <p>Tình trạng</p>
                    <div className="provide__list-search-state-select">
                      <p>Tất cả</p>
                      <i className="fa-solid fa-caret-down"></i>
                      <div className="provide__list-search-state-select-list">
                        <ul>
                          <li className="provide__list-search-state-select-list-item">Tất cả</li>
                          <li className="provide__list-search-state-select-list-item">Đang chờ</li>
                          <li className="provide__list-search-state-select-list-item">Đã sử dụng</li>
                          <li className="provide__list-search-state-select-list-item">Bỏ qua</li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div className="provide__list-search-provide-source">
                    <p>Nguồn cấp</p>
                    <div className="provide__list-search-provide-source-select">
                    <p>Tất cả</p>
                    <i className="fa-solid fa-caret-down"></i>
                    <div className="provide__list-search-provide-source-select-list">
                        <ul>
                          <li className="provide__list-search-provide-source-select-list-item">Tất cả</li>
                          <li className="provide__list-search-provide-source-select-list-item">Kiosk</li>
                          <li className="provide__list-search-provide-source-select-list-item">Hệ thống</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="provide__list-search-time-table">
                  <div className="provide__list-search-time">
                  <p>Chọn thời gian</p>
                    <div className="provide__list-search-time-select">
                    
                      <SearchBox/>

                    </div>
                  </div>
                  <div className="provide__list-table">
                    <Table/>
                  </div>
                </div>
                
                <div className="provide__list-table-page-number">
                  <div className="provide__list-table-page-number-arrow"><i className="fa-solid fa-caret-left"></i></div>
                  <div className="provide__list-table-page-number-element">1</div>
                  <div className="provide__list-table-page-number-element">2</div>
                  <div className="provide__list-table-page-number-element">3</div>
                  <div className="provide__list-table-page-number-element">4</div>
                  <div className="provide__list-table-page-number-element">5</div>
                  <div className="provide__list-table-page-number-element">...</div>
                  <div className="provide__list-table-page-number-element">10</div>
                  <div className="provide__list-table-page-number-arrow"><i className="fa-solid fa-caret-right"></i></div>
                </div>
              </div>
              <div className="provide__list-search-keyword">    
                <p>Từ khóa</p>
                <div className="provide__list-search-keyword-select">
                  <input type="text" placeholder="Nhập từ khóa"/>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="provide__list-add">
            <span>
              <Link to={`/providenumber`}>
              <i className="fa-solid fa-square-plus"></i>
              </Link>
              
              <p>Cấp số mới</p>
            </span>
              
          </div>
        </div>
      )
}
