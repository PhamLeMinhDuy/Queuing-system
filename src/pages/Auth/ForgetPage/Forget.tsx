import './forget.css'
import logo from '../logo/Logoalta.png'
import forget_img from './images/forget-image.png'
export const Forget = () => {
  return (
    <div className='page'>
      <div className="forget-form">
        <div className="logo-alta">
          <img src={logo} alt="Đây là Logo của công ty Alta Media"></img>
        </div>
        <div className="form-input">
          <div className="form-group">
            <h2>Đặt lại mật khẩu</h2>
            <label htmlFor="email">Vui lòng nhập email để đặt lại mật khẩu của bạn *</label> <br />
            <input type="email" className="form-control" id="email" placeholder=" Email " />
          </div>
        </div>
        <div className="btn">
            <input className='btn btn-cancel' type="submit" value="Hủy"/>
            <input className='btn btn-accept' type="submit" value="Tiếp tục"/>
        </div>
      </div>
      
      <div className='forget-image'>
          <img className="image-one"src={forget_img} alt="" />
        </div>
    </div>
  )
}
export default Forget;