import './forget.css'
import logo from '../logo/Logoalta.png'
import forget_img from './images/forget-image.png'
import { useState } from 'react'
import { auth } from '../../../firebase/config'
import { useNavigate } from 'react-router-dom'
import { fetchSignInMethodsForEmail } from 'firebase/auth'
export const Forget = () => {
  const [inputemail, setInputemail] = useState<string>('');
  const navigate = useNavigate();
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputemail(event.target.value);
  };
  const handleCancel = () => {
    navigate("/");
  };
  const handleAccept = () => {
      fetchSignInMethodsForEmail(auth, email)
      .then((signInMethods) => {
        // Kiểm tra xem email đã được đăng ký hay chưa
        if (signInMethods.length === 0) {
          console.log('Email này chưa được đăng ký');
          // Xử lý khi email chưa được đăng ký
        } else {
          console.log('Email đã được đăng ký');
          // Chuyển hướng đến trang tiếp theo
          navigate('/resetpass');
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

  };
  const email = inputemail.trim();



  return (
    <div className='forget_page'>
      <div className="forget-form">
        <div className="logo-alta">
          <img src={logo} alt="Đây là Logo của công ty Alta Media"></img>
        </div>
        <div className="form-input-forget">
          <div className="form-group-forget">
            <h2>Đặt lại mật khẩu</h2>
            <label htmlFor="email">Vui lòng nhập email để đặt lại mật khẩu của bạn *</label> <br />
            <input type="email" className="form-control" id="email" placeholder=" Email "  value={inputemail} onChange={handleEmailChange}/>
          </div>
        </div>
        <div className="btn-forget">
            <button className='btn btn-cancel' onClick={handleCancel}>Hủy</button>
            <button className='btn primary-btn btn-accept'  onClick={handleAccept}>Tiếp tục</button>
        </div>
      </div>
      
      <div className='forget-image'>
          <img className="image-one"src={forget_img} alt="" />
        </div>
    </div>
  )
}
export default Forget;