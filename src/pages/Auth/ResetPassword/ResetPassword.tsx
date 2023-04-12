import './resetpassword.css'
import logo from '../logo/Logoalta.png'
import reset_img from './images/reset-image.png'
import eye_off from './icon_eye/eye-off.png'
import { EyeOff, Eye } from 'react-feather';
import { useState } from 'react';
import { auth } from '../../../firebase/config';
import { User, getAuth, updatePassword } from 'firebase/auth';
export const ResetPass = () => {
const [showPassword1, setShowPassword1] = useState(false);  
const [showPassword2, setShowPassword2] = useState(false);
const [password, setPassword] = useState<string>('');
const [retypepassword, setRetypepassword] = useState<string>('');
const [error, setError] = useState(false);
const user = auth.currentUser;
console.log(user);


const handleShowPassword1 = () => { 
  setShowPassword1(!showPassword1);
};

const handleShowPassword2 = () => { 
  setShowPassword2(!showPassword2);
};

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
  setError(false); // Reset error state when user types something
};

const handleRetypePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setRetypepassword(e.target.value);
  setError(false); // Reset error state when user types something
};
const handleUpdatePassword = async () => {
  if (password !== retypepassword) {
    setError(true);
    return;
  }
  if (user) {
    updatePassword(user, password)
      .then(() => {
        console.log('Password updated successfully!');
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    console.log('No user is currently signed in.');
  }

};
  
return (
  <div className='reset__password-page'>
    <div className="reset-form">
      <div className="logo-alta">
        <img src={logo} alt="Đây là Logo của công ty Alta Media"></img>
      </div>
      <div className="form-input-reset-password">
        <div className="form-group-reset-password">
          <h2>Đặt lại mật khẩu của bạn</h2>
          <label htmlFor="password">Mật khẩu</label><br />
          <div className='from-control__pass-reset-password'>
            <input  type={showPassword1 ? 'text' : 'password'} className={`form-control-reset-password ${error ? 'error' : ''}`} id="password" placeholder=" Mật khẩu " onChange={handlePasswordChange} />
            {showPassword1 ? (
              <Eye className="eye-reset-password" onClick={handleShowPassword1} />
            ) : (
              <EyeOff className="eye-off-reset-password" onClick={handleShowPassword1} />
            )}
          </div>
        </div>
        <div className="form-groupreset-password">
          <label htmlFor="password">Nhập lại mật khẩu</label><br />
          <div className='from-control__pass-reset-password'>
            <input  type={showPassword2 ? 'text' : 'password'} className={`form-control-reset-password ${error ? 'error' : ''}`} id="retypepassword" placeholder=" Nhập lại mật khẩu " onChange={handleRetypePasswordChange} />
            {showPassword2 ? (
              <Eye className="eye-reset-password" onClick={handleShowPassword2} />
            ) : (
              <EyeOff className="eye-off-reset-password" onClick={handleShowPassword2} />
            )}
          </div>
        </div>
      </div>
      <button className='btn primary-btn btn-reset-password' onClick={handleUpdatePassword}>
        Cập nhật
      </button>
    </div>
    <div className='reset-image'>
      <img className="image-one"src={reset_img} alt="" />
    </div>
  </div>
);
}
export default ResetPass;