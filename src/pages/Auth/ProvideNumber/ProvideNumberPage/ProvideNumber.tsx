import React from 'react'
import Menu from '../../Menu/menu'
import './ProvideNumber.css'
export const ProvideNumber = () => {
  return (
    <div className='provide__number-page'>
        <Menu/>
        <h2>Quản lý cấp số</h2>
        <div className="provide__number">
            <h1>CẤP SỐ MỚI</h1>
            <span>Dịch vụ khách hành lựa chọn</span>
            <div className="provide__number-list">
                <p>Chọn dịch vụ</p>
                <i className="fa-solid fa-caret-down"></i>
                <div className="provide__number-list-item ">
                      <ul>
                          <li className="provide__number-list-item-element">Tất cả</li>
                          <li className="provide__number-list-item-element">Khám răng hàm mặt</li>
                          <li className="provide__number-list-item-element">Khám tai mũi họng</li>
                          <li className="provide__number-list-item-element">Khám tim mạch</li>
                          <li className="provide__number-list-item-element">Khám sản phụ khoa</li>
                          <li className="provide__number-list-item-element">Khám tim mạch</li>
                          <li className="provide__number-list-item-element">Khám hô hấp</li>
                          <li className="provide__number-list-item-element">Khám tổng quát</li>
                      </ul>
                </div>
            </div>
            <div className="provide__number-btn">
                <input type="submit" className='btn' value="Hủy bỏ" />
                <input type="submit" className='btn primary-btn' value="In số" />
            </div>
        </div>
    </div>
  )
}
