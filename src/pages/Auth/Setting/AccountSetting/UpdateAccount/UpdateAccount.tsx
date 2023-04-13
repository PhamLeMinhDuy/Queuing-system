import React, { useEffect, useState } from 'react'
import Menu from '../../../Menu/menu'
import './UpdateAccount.css'
import { Eye, EyeOff } from 'react-feather'
import { CollectionReference, DocumentData, addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../../../../../firebase/config'
import { useNavigate, useParams } from 'react-router-dom'
export const UpdateAccount = () => {
  const colRef: CollectionReference<DocumentData> = collection(db, 'accountlist'); 
    const { id } = useParams<{ id: string }>();
    const [list, setList] = React.useState<{id: string}[]>([]);
    const[updateAccountname, setUpdateAccountname] =  React.useState();
    const[updateUsername, setUpdateUsername] =  React.useState();
    const[updatePhone, setUpdatePhone] =  React.useState();
    const[updateEmail, setUpdateEmail] =  React.useState();
    const [showPassword1, setShowPassword1] = useState(false);  
    const [showPassword2, setShowPassword2] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [retypepassword, setRetypepassword] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<string>('Vai trò');
    const [selectedItemState, setSelectedItemState] = useState<string>('Chọn tình trạng');
    const [error, setError] = useState(false);
    const eyeClass = `eye-reset-account-password ${error ? 'eye-with-error' : ''}`;
    const eyeOffClass = `eye-off-reset-account-password ${error ? 'eye-off-with-error' : ''}`;
    
    const navigate = useNavigate();
    function handleItemClick(item:any) {
      setSelectedItem(item);

    }
    function handleItemClickState(item:any) {
      setSelectedItemState(item);

    }
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

    useEffect(() => {
        const getDevice = async () => {
            const data = await getDocs(colRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getDevice();
        
    },[]);
    let accountInfo: any;
    accountInfo = list.find((data) => data.id.replace(' ', '') == id);
    if (accountInfo) {
    console.log(accountInfo.id);
    }
    const handleAddRole = async () => {
      if (password !== retypepassword) {
        setError(true);
        return;
      }
        const deviceRef = doc(db, 'accountlist', accountInfo.id);
        await updateDoc(deviceRef, {
          account: updateAccountname,
          email: updateEmail,
          name: updateUsername,
          phone: updatePhone,
          role:   selectedItem,
          state: selectedItemState,
          password: password,
        });
        navigate('/accountlist')
        console.log(deviceRef)
      };
    const handleCancel = () => {
        navigate('/accountlist')
    }
  return (
    <div className='account__update-page'>
        <Menu/>
        <h1>Quản lý tài khoản</h1>
        <div className="account__update-infor">
          <h3>Thông tin tài khoản</h3>
          <div className="account__update-infor-row">
            <div className="account__update-infor-column">
              <div className="account__update-infor-column-title">
                Họ tên: <p>*</p>
              </div>
                <input type="text" placeholder="Nhập họ tên" onChange={(e: any) => setUpdateUsername(e.target.value)}/>
              </div>
              <div className="account__update-infor-column">
                <div className="account__update-infor-column-title">
                Tên đăng nhập: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập tên đăng nhập" onChange={(e: any) => setUpdateAccountname(e.target.value)}/>
              </div>
          </div>
          <div className="account__update-infor-row">
            <div className="account__update-infor-column">
              <div className="account__update-infor-column-title">
                Số điện thoại: <p>*</p>
              </div>
                <input type="text" placeholder="Nhập số điện thoại" onChange={(e: any) => setUpdatePhone(e.target.value)}/>
              </div>
              <div className="account__update-infor-column">
                <div className="account__update-infor-column-title">
                Mật khẩu: <p>*</p>
                </div>
                <span className='account__update-infor-column-pass'>
                  <input  type={showPassword1 ? 'text' : 'password'} className={`form-control-update-account-password ${error ? 'error' : ''}`} id="password" placeholder=" Mật khẩu " onChange={handlePasswordChange} />
                        {showPassword1 ? (
                          <Eye className="eye-update-account-password" onClick={handleShowPassword1} />
                        ) : (
                          <EyeOff className="eye-off-update-account-password" onClick={handleShowPassword1} />
                        )}
                </span>
              </div>
          </div>
          <div className="account__update-infor-row">
            <div className="account__update-infor-column">
              <div className="account__update-infor-column-title">
                Email: <p>*</p>
              </div>
                <input type="email" placeholder="Nhập email" onChange={(e: any) => setUpdateEmail(e.target.value)}/>
              </div>
              <div className="account__update-infor-column">
                <div className="account__update-infor-column-title">
                Nhập lại mật khẩu: <p>*</p>
                </div>
                <span className='account__update-infor-column-pass'>
                  <input  type={showPassword2 ? 'text' : 'password'} className={`form-control-update-account-password ${error ? 'error' : ''}`} id="retypepassword" placeholder=" Nhập lại mật khẩu " onChange={handleRetypePasswordChange} />
                  {error && <span className="error-message">Mật khẩu không trùng khớp</span>}
                    {showPassword2 ? (
                      <Eye className={eyeClass} onClick={handleShowPassword2} />
                    ) : (
                      <EyeOff className={eyeOffClass} onClick={handleShowPassword2} />
                    )}
                </span>
                
                
              </div>
          </div>
          <div className="account__update-infor-row">
            <div className="account__update-infor-column">
                <div className="account__update-infor-column-title ">
                    Vai trò: <p>*</p>
                    
                </div>
                <div className="account__update-infor-column-input">
                    <p>{selectedItem}</p>
                    <i className="fa-solid fa-caret-down account__update-infor-column-icon"></i>
                    <div className="account__update-infor-column-list account__update-infor-column-list-type">
                    <ul>
                        <li className="account__update-infor-column-list-item" onClick={() => handleItemClick('Kế toán')}>Kế toán</li>
                        <li className="account__update-infor-column-list-item" onClick={() => handleItemClick('Quản lý')}>Quản lý</li>
                        <li className="account__update-infor-column-list-item" onClick={() => handleItemClick('Admin')}>Admin</li>
                    </ul>
                    </div>
                </div>
                
            </div>
            <div className="account__update-infor-column">
                <div className="account__update-infor-column-title ">
                    Tình trạng: <p>*</p>
                    
                </div>
                <div className="account__update-infor-column-input">
                    <p>{selectedItemState}</p>
                    <i className="fa-solid fa-caret-down account__update-infor-column-icon"></i>
                    <div className="account__update-infor-column-list account__update-infor-column-list-type">
                    <ul>
                        <li className="account__update-infor-column-list-item" onClick={() => handleItemClickState('Tất cả')}>Tất cả</li>
                        <li className="account__update-infor-column-list-item" onClick={() => handleItemClickState('Ngưng hoạt động')}>Ngưng hoạt động</li>
                        <li className="account__update-infor-column-list-item" onClick={() => handleItemClickState('Hoạt động')}>Hoạt động</li>
                    </ul>
                    </div>
                </div>
                
            </div>
          </div>
          <div className='account__update-infor-column-other-sub'>
                    Là trường thông tin bắt buộc <p>*</p>
          </div>
          <div className="account__update-btn">
            <input type="submit" className='account__update-btn--cancel btn' value='Hủy bỏ' onClick={handleCancel} />
            <input type="submit" className='account__update-btn--submit btn primary-btn' value='Cập nhật' onClick={handleAddRole} />
          </div>
        </div>
    </div>
  )
}
