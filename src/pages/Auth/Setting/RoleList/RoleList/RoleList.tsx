import Menu from "../../../Menu/menu"
import SearchBox from "../../Diary/SearchBox/SearchBox"
import { TableRole } from "./Component/Table"
import './RoleList.css'
export const RoleListTable = () => {
    return (
        <div className="roletable__list-page">
          <Menu/>
          <div className="roletable__list-page-sub-header">
            <h1>Danh sách vai trò</h1>
            <div className="roletable__list-search">
                <div className="roletable__list-search-keyword">
                    <p>Từ khóa</p>
                    <div className="roletable__list-search-keyword-input">
                    <input type="text" placeholder="Nhập từ khóa"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
              <div className="roletable__list-search-state-time">
                  <div className="roletable__list-table ">
                    <TableRole/>
                  </div>
              </div>
              
            </div>
          </div>
          <div className="roletable__list-add">
            <span>
              <a href="/rolelistadd">
              <i className="fa-solid fa-square-plus"></i>
              </a>
              
              <p>Thêm vai trò</p>
            </span>
              
          </div>
        </div>
      )
}
