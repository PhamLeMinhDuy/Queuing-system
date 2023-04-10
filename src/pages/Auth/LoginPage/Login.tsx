import Forget from '../ForgetPage/Forget'
import { useState } from 'react';
import logo from '../logo/Logoalta.png'
import image1 from './images/image1.png'
import { EyeOff, Eye, AlertCircle } from 'react-feather';
import firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../../firebase/config';
import "firebase/auth";
import './login.css'
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password) // Đăng nhập với username và password
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/inforpage");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUsername(e.target.value);
  setError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
  setError(false); // Reset error state when user types something
  };

const forgetPasswordClass = error ? 'forget-password error' : 'forget-password';
  const handleShowPassword = () => { 
    setShowPassword(!showPassword);
  };
  return (
    <div className='login-page'>
      <div className="form login-form">
        <div className="logo-alta">
          <img src={logo} alt="Đây là Logo của công ty Alta Media"></img>
        </div>
        <div className="form-input">
          <div className={`form-group ${error ? 'error' : ''}`}>
            <label htmlFor="username">Tên đăng nhập *</label> <br />
            <input type="email" className={`form-control ${error ? 'error' : ''}`} id="username" placeholder=" Username " onChange={handleUsernameChange} />
          </div>
          <div className={`form-group ${error ? 'error' : ''}`}>
            <label htmlFor="password">Mật khẩu *</label><br />
            <div className='from-control__pass'>
              <input  type={showPassword ? 'text' : 'password'} className={`form-control ${error ? 'error' : ''}`} id="password" placeholder=" Password " onChange={handlePasswordChange} />
              {showPassword ? (
                <Eye className="eye" size={20} onClick={handleShowPassword} />
              ) : (
                <EyeOff className="eye-off" size={20} onClick={handleShowPassword} />
              )}
            </div>
            
          </div>
        </div>
        
        <div className="forget-password">
        {error && (
          <p className="error-message">
            <span className="error-icon"><AlertCircle size={16} /></span>
          </p>
        )}
          <a href="#" className='forget-link'>Quên mật khẩu?</a>
        </div>
        <button className='primary-btn btn' type="submit" onClick={handleLogin}> Đăng nhập</button>
        
      </div>
      <div className='login-image'>
          <img className="image-one"src={image1} alt="" />
        </div>
    </div>
  )
}
export default Login;