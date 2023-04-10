import React from 'react'
import './Toolbar.css'
export const Toolbar = () => {
  return (
    <div className='toolbar'>
        <p>Xem theo</p>
        <div className="toolbar__select">
            <p>Ngày</p>
            <i className="fa-sharp fa-solid fa-caret-down"></i>
            <div className="toolbar__select-list">
                <ul>
                    <li className="toolbar__select-list-item">Ngày</li>
                    <li className="toolbar__select-list-item">Tháng</li>
                    <li className="toolbar__select-list-item">Năm</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
