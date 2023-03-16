import React from 'react'
import logo from '../Auth/logo/Logoalta.png'
import image1 from '../Auth/images/image1.png'
import eye_off from '../Auth/icon/eye-off.png'
import './login.css'
export const Login = () => {
  return (
    <div className='login-page'>
      <div className="login-form">
        <div className="logo-alta">
          <img src={logo} alt="Đây là Logo của công ty Alta Media"></img>
        </div>
        <div className="form-login">
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập *</label> <br />
            <input type="text" className="form-control" id="username" placeholder=" Username " />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu *</label><br />
            <div className='from-control__pass'>
              <input type="password" className="form-control" id="password" placeholder=" Password " />
              <img className='eye-off' src={eye_off}></img>
            </div>
            
          </div>
        </div>
        
        <div className="forget-password">Quên mật khẩu?</div>
        <button type="submit" className="btn btn-primary">Đăng nhập</button>
        
      </div>
      <div className='login-image'>
          <img className="image-one"src={image1} alt="" />
        </div>
    </div>
  )
}
export default Login;