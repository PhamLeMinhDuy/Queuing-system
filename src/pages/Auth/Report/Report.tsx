import React from 'react'
import Menu from '../Menu/menu'
import SearchBox from '../Service/ServiceList/SearchBox/SearchBox'
import { Table } from './Component/Component/Table'
import './Report.css'
export const Report = () => {
  return (
    <div className="report__list-page">
          <Menu/>
          <div className="report__list-page-sub-header">
            <div className="report__list-search">
              <div className="report__list-search-state-time">
                <div className="report__list-search-time-table">
                  <div className="report__list-search-time">
                  <p>Chọn thời gian</p>
                    <div className="report__list-search-time-input">
                    
                      <SearchBox/>

                    </div>
                  </div>
                  <div className="report__list-table">
                    <Table/>
                  </div>
                </div>
                
                <div className="report__list-table-page-number">
                  <div className="report__list-table-page-number-arrow"><i className="fa-solid fa-caret-left"></i></div>
                  <div className="report__list-table-page-number-element">1</div>
                  <div className="report__list-table-page-number-element">2</div>
                  <div className="report__list-table-page-number-element">3</div>
                  <div className="report__list-table-page-number-element">4</div>
                  <div className="report__list-table-page-number-element">5</div>
                  <div className="report__list-table-page-number-element">...</div>
                  <div className="report__list-table-page-number-element">10</div>
                  <div className="report__list-table-page-number-arrow"><i className="fa-solid fa-caret-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="report__list-add">
            <span>
            <i className="fa-solid fa-file-arrow-down"></i>
              <p>Tải về</p>
            </span>
              
          </div>
        </div>
  )
}
