import React, { useEffect, useState } from 'react'
import Menu from '../../../Menu/menu'
import './AccountSetting.css'
import { Eye, EyeOff } from 'react-feather'
import { CollectionReference, DocumentData, addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../../firebase/config'
import { useNavigate, useParams } from 'react-router-dom'
export const AccountSetting = () => {
  const colRef: CollectionReference<DocumentData> = collection(db, 'rolelist'); 
    const { id } = useParams<{ id: string }>();
    const [list, setList] = React.useState<{id: string}[]>([]);
    const[addAccountname, setAddAccountname] =  React.useState();
    const[addUsername, setAddUsername] =  React.useState();
    const[addPhone, setAddPhone] =  React.useState();
    const[addEmail, setAddEmail] =  React.useState();
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
    let roleInfo: any;
    roleInfo = list.find((data) => data.id.replace(' ', '') == id);
    if (roleInfo) {
    console.log(roleInfo.id);
    }
    const handleAddRole = async () => {
      if (password !== retypepassword) {
        setError(true);
        return;
      }
        const deviceRef = collection(db, 'accountlist');
        await addDoc(deviceRef, {
          account: addAccountname,
          email: addEmail,
          name: addUsername,
          phone: addPhone,
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
    <div className='account__setting-page'>
        <Menu/>
        <h1>Quản lý tài khoản</h1>
        <div className="account__setting-infor">
          <h3>Thông tin tài khoản</h3>
          <div className="account__setting-infor-row">
            <div className="account__setting-infor-column">
              <div className="account__setting-infor-column-title">
                Họ tên: <p>*</p>
              </div>
                <input type="text" placeholder="Nhập họ tên" onChange={(e: any) => setAddUsername(e.target.value)}/>
              </div>
              <div className="account__setting-infor-column">
                <div className="account__setting-infor-column-title">
                Tên đăng nhập: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập tên đăng nhập" onChange={(e: any) => setAddAccountname(e.target.value)}/>
              </div>
          </div>
          <div className="account__setting-infor-row">
            <div className="account__setting-infor-column">
              <div className="account__setting-infor-column-title">
                Số điện thoại: <p>*</p>
              </div>
                <input type="text" placeholder="Nhập số điện thoại" onChange={(e: any) => setAddPhone(e.target.value)}/>
              </div>
              <div className="account__setting-infor-column">
                <div className="account__setting-infor-column-title">
                Mật khẩu: <p>*</p>
                </div>
                <span className='account__setting-infor-column-pass'>
                    <input  type={showPassword1 ? 'text' : 'password'} className={`form-control-reset-account-password ${error ? 'error' : ''}`} id="password" placeholder=" Mật khẩu " onChange={handlePasswordChange} />
                      {showPassword1 ? (
                        <Eye className="eye-reset-account-password" onClick={handleShowPassword1} />
                      ) : (
                        <EyeOff className="eye-off-reset-account-password" onClick={handleShowPassword1} />
                      )}
                </span>
              </div>
          </div>
          <div className="account__setting-infor-row">
            <div className="account__setting-infor-column">
              <div className="account__setting-infor-column-title">
                Email: <p>*</p>
              </div>
                <input type="email" placeholder="Nhập email" onChange={(e: any) => setAddEmail(e.target.value)}/>
              </div>
              <div className="account__setting-infor-column">
                <div className="account__setting-infor-column-title">
                Nhập lại mật khẩu: <p>*</p>
                </div>
                <span className='account__setting-infor-column-pass'>
                <input  type={showPassword2 ? 'text' : 'password'} className={`form-control-reset-account-password ${error ? 'error' : ''}`} id="retypepassword" placeholder=" Nhập lại mật khẩu " onChange={handleRetypePasswordChange} />
                {error && <span className="error-message">Mật khẩu không trùng khớp</span>}
                    {showPassword2 ? (
                      <Eye className={eyeClass} onClick={handleShowPassword2} />
                    ) : (
                      <EyeOff className={eyeOffClass} onClick={handleShowPassword2} />
                    )}
                </span>
                
              </div>
          </div>
          <div className="account__setting-infor-row">
            <div className="account__setting-infor-column">
                <div className="account__setting-infor-column-title ">
                    Vai trò: <p>*</p>
                    
                </div>
                <div className="account__setting-infor-column-input">
                    <p>{selectedItem}</p>
                    <i className="fa-solid fa-caret-down account__setting-infor-column-icon"></i>
                    <div className="account__setting-infor-column-list account__setting-infor-column-list-type">
                    <ul>
                        <li className="account__setting-infor-column-list-item" onClick={() => handleItemClick('Kế toán')}>Kế toán</li>
                        <li className="account__setting-infor-column-list-item" onClick={() => handleItemClick('Quản lý')} >Quản lý</li>
                        <li className="account__setting-infor-column-list-item" onClick={() => handleItemClick('Admin')}>Admin</li>
                    </ul>
                    </div>
                </div>
                
            </div>
            <div className="account__setting-infor-column">
                <div className="account__setting-infor-column-title ">
                    Tình trạng: <p>*</p>
                    
                </div>
                <div className="account__setting-infor-column-input">
                    <p>{selectedItemState}</p>
                    <i className="fa-solid fa-caret-down account__setting-infor-column-icon"></i>
                    <div className="account__setting-infor-column-list account__setting-infor-column-list-type">
                    <ul>
                        <li className="account__setting-infor-column-list-item" onClick={() => handleItemClickState('Tất cả')}>Tất cả</li>
                        <li className="account__setting-infor-column-list-item" onClick={() => handleItemClickState('Ngưng hoạt động')}>Ngưng hoạt động</li>
                        <li className="account__setting-infor-column-list-item" onClick={() => handleItemClickState('Hoạt động')}>Hoạt động</li>
                    </ul>
                    </div>
                </div>
                
            </div>
          </div>
          <div className='account__setting-infor-column-other-sub'>
                    Là trường thông tin bắt buộc <p>*</p>
          </div>
          <div className="account__setting-btn">
            <input type="submit" className='account__setting-btn--cancel btn' value='Hủy bỏ' onClick={handleCancel}/>
            <input type="submit" className='account__setting-btn--submit btn primary-btn' value='Thêm' onClick={handleAddRole}/>
          </div>
        </div>
    </div>
  )
}
