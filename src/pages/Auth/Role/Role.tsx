import Menu from "../Menu/menu";
import React from 'react'
import { Table } from "./Component/Table";
import './Role.css'
export const Role = () => {
    return (
        <div className="role__list-page">
          <Menu/>
          <div className="role__list-page-sub-header">
            <h1>Danh sách vai trò</h1>
            <div className="role__list-search">
              <div className="role__list-search-state-time">
                  <div className="role__list-table">
                    <Table/>
                  </div>
              </div>
              <div className="role__list-search-keyword">
                <p>Từ khóa</p>
                <div className="role__list-search-keyword-input">
                  <input type="text" placeholder="Nhập từ khóa"/>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="role__list-add">
            <span>
              <i className="fa-solid fa-square-plus"></i>
              <p>Thêm vai trò</p>
            </span>
              
          </div>
        </div>
      )
}
