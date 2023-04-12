import React from 'react'
import { Table } from './Component/Table'
import Menu from '../../../Menu/menu'
import './AccountList.css'
import { Link } from 'react-router-dom'
export const AccountList = () => {
  return (
    <div className="account__list-page">
      <Menu/>
      <div className="account__list-page-sub-header">
        <h1>Danh sách tài khoản</h1>
        <div className="account__list-search">
          <div className="account__list-search-state">
            <div className="account__list-search-role">
              <p>Tên vai trò</p>
              <div className="account__list-search-role-input">
                <p>Kế toán</p>
                <i className="fa-solid fa-caret-down"></i>
                <div className="account__list-search-role-input-list">
                  <ul>
                    <li className="account__list-search-state-input-list-item">Kế toán</li>
                    <li className="account__list-search-state-input-list-item">Admin</li>
                    <li className="account__list-search-state-input-list-item">Bác sĩ</li>
                    <li className="account__list-search-state-input-list-item">Lễ tân</li>
                    <li className="account__list-search-state-input-list-item">Quản lý</li>
                    <li className="account__list-search-state-input-list-item">Superadmin</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="account__list-table">
              <Table/>
            </div>
            <div className="account__list-table-page-number">
              <div className="account__list-table-page-number-arrow"><i className="fa-solid fa-caret-left"></i></div>
              <div className="account__list-table-page-number-element">1</div>
              <div className="account__list-table-page-number-element">2</div>
              <div className="account__list-table-page-number-element">3</div>
              <div className="account__list-table-page-number-element">4</div>
              <div className="account__list-table-page-number-element">5</div>
              <div className="account__list-table-page-number-element">...</div>
              <div className="account__list-table-page-number-element">10</div>
              <div className="account__list-table-page-number-arrow"><i className="fa-solid fa-caret-right"></i></div>
            </div>
          </div>
          <div style={{transform:"translateX(0%)"}}className="account__list-search-keyword">
            <p>Từ khóa</p>
            <div  className="account__list-search-keyword-input">
              <input type="text" placeholder="Nhập từ khóa"/>
              <i style={{position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '15px',
              color: 'var(--text-primary-color)'}} className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="account__list-add">
        <span>
          <Link to='/accountsetting'>
          <i className="fa-solid fa-square-plus"></i>
          </Link>
          
          <p>Thêm tài khoản</p>
        </span>
          
        </div>
    </div>
  )
}
