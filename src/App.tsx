import Login from './pages/Auth/LoginPage/Login';
import Forget from './pages/Auth/ForgetPage/Forget';
import ResetPass from './pages/Auth/ResetPassword/ResetPassword';
import Menu from './pages/Auth/Menu/menu';
import { Inforpage } from './pages/Auth/Information/inforpage';
import { DeviceManagerment } from './pages/Auth/DevicePage/DeviceManagermernt/DeviceManagerment';
import { DeviceDetail } from './pages/Auth/DevicePage/DeviceDetail/DeviceDetail';
import { DeviceUpdate } from './pages/Auth/DevicePage/DeviceUpdate/DeviceUpdate';
import { ProvideNumber } from './pages/Auth/ProvideNumber/ProvideNumberPage/ProvideNumber';
import { ProvideNumberDetail } from './pages/Auth/ProvideNumber/ProvideNumberDetail/ProvideNumberDetail';
import { AccountSetting } from './pages/Auth/Setting/AccountSetting/Accountmanager/AccountSetting';
import { AddService } from './pages/Auth/Service/AddService/AddService';
import { UpdateService } from './pages/Auth/Service/UpdateService/UpdateService';
import { RoleList } from './pages/Auth/Setting/RoleList/AddRoleList/RoleList';
import { UpdateRoleList } from './pages/Auth/Setting/RoleList/UpdateRoleList/UpdateRoleList';
import { DeviceList } from './pages/Auth/DevicePage/DeviceList/DeviceList';
import { Example } from './pages/Auth/DevicePage/DeviceList/Components/Example';
import SearchBox from './pages/Auth/Service/ServiceList/SearchBox/SearchBox';
import { ServiceList } from './pages/Auth/Service/ServiceList/ServiceList';
import { Report } from './pages/Auth/Report/Report';
import { Role } from './pages/Auth/Role/Role';
import { AccountList } from './pages/Auth/Setting/AccountSetting/AccountList/AccountList';
import { ServiceDetail } from './pages/Auth/Service/ServiceDetail/ServiceDetail';
import { ProvideNumberList } from './pages/Auth/ProvideNumber/ProvideNumberList/ProvideNumberList';
import CalendarComponent from './pages/Auth/DashBoard/Calendar/Calendar';
import DashBoardMenu from './pages/Auth/DashBoard/DashBoardMenu/DashBoardMenu';
import { DashboardPage } from './pages/Auth/DashBoard/Dashboard';
import Areachart from './pages/Auth/DashBoard/DashBoardMenu/LineChart/AreaChart';
import { UpdateAccount } from './pages/Auth/Setting/AccountSetting/UpdateAccount/UpdateAccount';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Diary } from './pages/Auth/Setting/Diary/Diary';

function App() {


  return (
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/inforpage' element={<Inforpage/>}></Route>
          <Route path='/servicelist' element={<ServiceList/>}></Route>
          <Route path='/addservice' element={<AddService/>}></Route>
          <Route path='/servicedetail' element={<ServiceDetail/>}></Route>
          <Route path='/updateservice' element={<UpdateService/>}></Route>
          <Route path='/devicelist' element={<DeviceList/>}></Route>
          <Route path='/devicemanagerment' element={<DeviceManagerment/>}></Route>
          <Route path='/devicedetail/:id' element={<DeviceDetail/>}></Route>
          <Route path='/deviceupdate/:id' element={<DeviceUpdate/>}></Route>
          <Route path='/providenumberlist' element={<ProvideNumberList/>}></Route>
          <Route path='/providenumberdetail' element={<ProvideNumberDetail/>}></Route>
          <Route path='/providenumber' element={<ProvideNumber/>}></Route>
          <Route path='/report' element={<Report/>}></Route>
          <Route path='/rolelist' element={<RoleList/>}></Route>
          <Route path='/accountlist' element={<AccountList/>}></Route>
          <Route path='/accountsetting' element={<AccountSetting/>}></Route>
          <Route path='/updateaccount' element={<UpdateAccount/>}></Route>
          <Route path='/diary' element={<Diary/>}></Route>
          <Route path='/forget' element={<Forget/>}></Route>
          <Route path='/resetpass' element={<ResetPass/>}></Route>
        </Routes>
  )

  
}

export default App;
