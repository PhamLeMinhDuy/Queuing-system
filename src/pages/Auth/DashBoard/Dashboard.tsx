import React from 'react'
import DashBoardMenu from './DashBoardMenu/DashBoardMenu'
import { ArrowUp, ArrowDown, Bookmark, Star, User, Phone } from 'react-feather'
import { Toolbar } from './DashBoardMenu/LineChart/Toolbar'
import Areachart from './DashBoardMenu/LineChart/AreaChart'
import './Dashboard.css'
import Menu from '../Menu/menu'

export const DashboardPage = () => {
  return (
    <div className='dashboard__page'>
      <Menu/>
        <div className="dashboard__list-page-sub-header">
              <h1>Quản lý dịch vụ</h1>
              <div className="dashboard__list-page-sub-data-card">
                <div className="dashboard__list-page-sub-data">
                  <div className="dashboard__list-page-sub-data-title">
                    <span>
                      <i className="fa-regular fa-calendar"></i>
                    </span>
                    <p>Số thứ tự đã cấp</p>
                  </div>
                  <div className="dashboard__list-page-sub-data-number">
                    <p>4.221</p>
                    <div className="dashboard__list-page-sub-data-percent">
                      <ArrowUp className='dashboard__list-page-sub-data-percent-icon'/>  
                      <p>32,41%</p>
                    </div>
                  </div>
                </div>
                <div className="dashboard__list-page-sub-data">
                  <div className="dashboard__list-page-sub-data-title dashboard__list-page-sub-data-title-used">
                    <span>
                      <i className="fa-regular fa-calendar-check"></i>
                    </span>
                    <p>Số thứ tự đã sử dụng</p>
                  </div>
                  <div className="dashboard__list-page-sub-data-number">
                    <p>3.721</p>
                    <div className="dashboard__list-page-sub-data-percent dashboard__list-page-sub-data-percent-red">
                      <ArrowDown className='dashboard__list-page-sub-data-percent-icon'/>  
                      <p>32,41%</p>
                    </div>
                  </div>
                </div>
                <div className="dashboard__list-page-sub-data">
                  <div className="dashboard__list-page-sub-data-title dashboard__list-page-sub-data-title-wait">
                    <span>
                      <User className='dashboard__list-page-sub-data-title-icon dashboard__list-page-sub-data-title-icon--user'/>
                      <Phone className='dashboard__list-page-sub-data-title-icon dashboard__list-page-sub-data-title-icon--phone'/>
                    </span>
                    <p>Số thứ tự đang chờ</p>
                  </div>
                  <div className="dashboard__list-page-sub-data-number">
                    <p>468</p>
                    <div className="dashboard__list-page-sub-data-percent">
                      <ArrowUp className='dashboard__list-page-sub-data-percent-icon'/>  
                      <p>56,41%</p>
                    </div>
                  </div>
                </div>
                <div className="dashboard__list-page-sub-data">
                  <div className="dashboard__list-page-sub-data-title dashboard__list-page-sub-data-title-skip">
                    <span>
                      <Bookmark className='dashboard__list-page-sub-data-title-icon dashboard__list-page-sub-data-title-icon--bookmark'/>
                      <i className="fa-solid fa-star dashboard__list-page-sub-data-title-icon dashboard__list-page-sub-data-title-icon--star"></i>
                    </span>
                    <p>Số thứ tự đã bỏ qua </p>
                  </div>
                  <div className="dashboard__list-page-sub-data-number">
                    <p>32</p>
                    <div className="dashboard__list-page-sub-data-percent dashboard__list-page-sub-data-percent-red">
                      <ArrowDown className='dashboard__list-page-sub-data-percent-icon'/>  
                      <p>22,41%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard__list-page-sub-header-chart">
                <div className="dashboard__list-page-sub-header-chart-toolbar">
                  <Toolbar />
                </div>
                  <Areachart/>
              </div>
              
        </div>
        <div className="dashboard__state">
          <DashBoardMenu/>
        </div>
    </div>
  )
}
