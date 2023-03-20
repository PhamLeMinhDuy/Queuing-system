import './resetpassword.css'
import logo from '../logo/Logoalta.png'
import reset_img from './images/reset-image.png'
import eye_off from './icon_eye/eye-off.png'
export const ResetPass = () => {
  return (
    <div className='page'>
      <div className="reset-form">
        <div className="logo-alta">
          <img src={logo} alt="Đây là Logo của công ty Alta Media"></img>
        </div>
        <div className="form-input">
          <div className="form-group">
          <h2>Đặt lại mật khẩu của bạn</h2>
          <label htmlFor="password">Mật khẩu</label><br />
            <div className='from-control__pass'>
              <input type="password" className="form-control" id="password" placeholder=" Password " />
              <img className='eye-off' src={eye_off}></img>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Nhập lại mật khẩu</label><br />
            <div className='from-control__pass'>
              <input type="password" className="form-control" id="password" placeholder=" Password " />
              <img className='eye-off' src={eye_off}></img>
            </div>
          </div>
        </div>
        <input className='btn' type="submit" value="Xác nhận"/>
      </div>
      
      <div className='reset-image'>
          <img className="image-one"src={reset_img} alt="" />
        </div>
    </div>
  )
}
export default ResetPass;