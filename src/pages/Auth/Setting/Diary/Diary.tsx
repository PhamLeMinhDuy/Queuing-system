import React from 'react'
import Menu from '../../Menu/menu'
import { Table } from './Component/Table'
import SearchBox from './SearchBox/SearchBox'
import './Diary.css'
export const Diary = () => {
  return (
    <div className="diary__list-page">
          <Menu/>
          <div className="diary__list-page-sub-header">
            <div className="diary__list-search">
              <div className="diary__list-search-state-time">
                <div className="diary__list-search-time-table">
                  <div className="diary__list-search-time">
                    <div className="diary__list-search-time-input">
                    <p>Chọn thời gian</p>
                      <SearchBox/>

                    </div>
                  </div>
                  <div className="diary__list-table">
                    <Table/>
                  </div>
                </div>
                
                <div className="diary__list-table-page-number">
                  <div className="diary__list-table-page-number-arrow"><i className="fa-solid fa-caret-left"></i></div>
                  <div className="diary__list-table-page-number-element">1</div>
                  <div className="diary__list-table-page-number-element">2</div>
                  <div className="diary__list-table-page-number-element">3</div>
                  <div className="diary__list-table-page-number-element">4</div>
                  <div className="diary__list-table-page-number-element">5</div>
                  <div className="diary__list-table-page-number-element">...</div>
                  <div className="diary__list-table-page-number-element">10</div>
                  <div className="diary__list-table-page-number-arrow"><i className="fa-solid fa-caret-right"></i></div>
                </div>
              </div>
              <div className="diary__list-search-keyword">
                        <p>Từ khóa</p>
                        <div className="diary__list-search-keyword-input">
                        <input type="text" placeholder="Nhập từ khóa" className='diary__list-search-keyword-input-icon'></input>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
            </div>
            </div>
          </div>
        </div>
  )
}
