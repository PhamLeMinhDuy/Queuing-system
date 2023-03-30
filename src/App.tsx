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
import { AccountSetting } from './pages/Auth/Setting/AccountSetting/AccountSetting';
import { AddService } from './pages/Auth/Service/AddService/AddService';
import { RoleList } from './pages/Auth/Setting/RoleList/AddRoleList/RoleList';
import { UpdateRoleList } from './pages/Auth/Setting/RoleList/UpdateRoleList/UpdateRoleList';
import { DeviceList } from './pages/Auth/DevicePage/DeviceList/DeviceList';
import { Example } from './pages/Auth/DevicePage/DeviceList/Components/Example';
import './App.css';

function App() {


  return (
      <DeviceList/>
  )

  
}

export default App;
