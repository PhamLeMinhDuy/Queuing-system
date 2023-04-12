
import React, { useEffect, useState } from 'react'
import Menu from '../../Menu/menu'
import './devicemanagerment.css'
import { CollectionReference, DocumentData, addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useNavigate, useParams } from 'react-router-dom';
export const DeviceManagerment = () => {
  const listItems = document.querySelectorAll('.device__managermaent-infor-column-list-item-add');
  const inputField = document.querySelector('.device__managermaent-infor-column-input-add p') as HTMLElement;

  let selectedValue = '';

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    const itemName = item.textContent;
    if (itemName === 'Tất cả') {
      selectedValue = '';
      listItems.forEach((li) => {
        const liName = li.textContent;
        if (liName !== 'Tất cả') {
          li.classList.toggle('hidden', false);
          selectedValue += liName + ', ';
        } else {
          li.classList.toggle('hidden', true);
        }
      });
      inputField.innerHTML = selectedValue.slice(0, -2);
    } else {
      const idx = selectedValue.indexOf('Tất cả');
      if (idx >= 0) {
        selectedValue = selectedValue.replace('Tất cả, ', '');
        listItems.forEach((li) => {
          const liName = li.textContent;
          if (liName !== 'Tất cả') {
            li.classList.toggle('hidden', false);
            selectedValue += liName + ', ';
          }
        });
      }
      if (selectedValue.includes(itemName!)) {
        selectedValue = selectedValue.replace(itemName + ', ', '');
        item.classList.toggle('hidden', false);
      } else {
        selectedValue += itemName + ', ';
        item.classList.toggle('hidden', true);
      }
      inputField.innerHTML = selectedValue.slice(0, -2);
    }
    setUpdateDeviceservice(selectedValue);
  });
});
  
  interface DeviceDetailParams {
    id: string;
  }
  const [list, setList] = React.useState<{id: string}[]>([]);
  const[updateDeviceid, setUpdateDeviceid] =  React.useState();
  const [updateDeviceservice, setUpdateDeviceservice] = React.useState<string>();
  const[updateDevicename, setUpdateDevicename] =  React.useState();
  const[updateDeviceusername, setUpdateDeviceusername] =  React.useState();
  const[updateDeviceip, setUpdateDeviceip] =  React.useState();
  const[updateDevicepass, setUpdateDevicepass] =  React.useState();

  const colRef: CollectionReference<DocumentData> = collection(db, 'devicelist'); 
  const { id } = useParams<{ id: string }>();
  const [selectedItem, setSelectedItem] = useState<string>('Chọn loại thiết bị');
  const navigate = useNavigate();

    function handleItemClick(item:any) {
      setSelectedItem(item);

    }

  useEffect(() => {
      const getDevice = async () => {
          const data = await getDocs(colRef);
          setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
      getDevice();
      
  },[]);
  let deviceInfo: any;
  deviceInfo = list.find((data) => data.id.replace(' ', '') == id);
  if (deviceInfo) {
  console.log(deviceInfo.id);
  }

  const handleAddDevice = async () => {
    const deviceRef = collection(db, 'devicelist');
    await addDoc(deviceRef, {
      deviceid: updateDeviceid,
      devicename: updateDevicename,
      username: updateDeviceusername,
      ip: updateDeviceip,
      password: updateDevicepass,
      type: selectedItem,
      service: updateDeviceservice,
    });
    navigate('/devicelist')
    console.log(deviceRef)
  };

  return (
    <div className='device__managerment'>
        <Menu/>
        <h1>Quản lý thiết bị</h1>
        <div className="device__managerment-infor">
          <h3>Thông tin thiết bị</h3>
          <div className="device__managerment-infor-row">
            <div className="device__managerment-infor-column">
              <div className="device__managermaent-infor-column-title">
                Mã thiết bị: <p>*</p>
              </div>
              <input type="text" placeholder="Nhập mã thiết bị"  onChange={(e: any) => setUpdateDeviceid(e.target.value)}/>
            </div>
            <div className="device__managerment-infor-column">
              <div className="device__managermaent-infor-column-title ">
                Loại thiết bị: <p>*</p>
                
              </div>
              <div className="device__managermaent-infor-column-input">
                <p>Chọn loại thiết bị</p>
                <i className="fa-solid fa-caret-down device__managermaent-infor-column-icon"></i>
                <div className="device__managermaent-infor-column-list device__managermaent-infor-column-list-type">
                  <ul>
                      <li className="device__managermaent-infor-column-list-item" onClick={() => handleItemClick('Kiosk')}>Kiosk</li>
                      <li className="device__managermaent-infor-column-list-item" onClick={() => handleItemClick('Display counter')}>Display counter</li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
          <div className="device__managerment-infor-row">
            <div className="device__managerment-infor-column">
              <div className="device__managermaent-infor-column-title">
                Tên thiết bị: <p>*</p>
              </div>
                <input type="text" placeholder="Nhập tên thiết bị" onChange={(e: any) => setUpdateDevicename(e.target.value)}/>
              </div>
              <div className="device__managerment-infor-column">
                <div className="device__managermaent-infor-column-title">
                Tên đăng nhập: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập tài khoản" onChange={(e: any) => setUpdateDeviceusername(e.target.value)}/>
              </div>
          </div>
          <div className="device__managerment-infor-row">
            <div className="device__managerment-infor-column">
              <div className="device__managermaent-infor-column-title">
                Địa chỉ IP: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập địa chỉ IP" onChange={(e: any) => setUpdateDeviceip(e.target.value)}/>
              </div>
              <div className="device__managerment-infor-column">
                <div className="device__managermaent-infor-column-title">               
                Mật khẩu: <p>*</p>
                </div>
                <input type="text" placeholder="Nhập mật khẩu" onChange={(e: any) => setUpdateDevicepass(e.target.value)}/>
              </div>
          </div>
          <div className="device__managerment-infor-row">
            <div className="device__managerment-infor-column-other ">
              <div className="device__managermaent-infor-column-other-title">
               Dịch vụ sử dụng: <p>*</p>
              </div>
              <div className="device__managermaent-infor-column-input device__managermaent-infor-column-input-add">
                <p>Nhập dịch vụ sử dụng</p>
                <div className="device__managermaent-infor-column-list device__managermaent-infor-column-list-other">
                      <ul>
                          <li className="device__managermaent-infor-column-list-item device__managermaent-infor-column-list-item-add">Tất cả</li>
                          <li className="device__managermaent-infor-column-list-item device__managermaent-infor-column-list-item-add">Khám răng hàm mặt</li>
                          <li className="device__managermaent-infor-column-list-item device__managermaent-infor-column-list-item-add">Khám tai mũi họng</li>
                          <li className="device__managermaent-infor-column-list-item device__managermaent-infor-column-list-item-add">Khám tim mạch</li>
                          <li className="device__managermaent-infor-column-list-item device__managermaent-infor-column-list-item-add">Khám sản phụ khoa</li>
                          <li className="device__managermaent-infor-column-list-item device__managermaent-infor-column-list-item-add">Khám tim mạch</li>
                          <li className="device__managermaent-infor-column-list-item device__managermaent-infor-column-list-item-add">Khám hô hấp</li>
                          <li className="device__managermaent-infor-column-list-item device__managermaent-infor-column-list-item-add">Khám tổng quát</li>
                      </ul>
                </div>
              </div>
              <div className='device__managerment-infor-column-other-sub'>
                    Là trường thông tin bắt buộc <p>*</p>
              </div>
            </div>
          </div>
          <div className="device__managerment-btn">
            <input type="submit" className='device__managerment-btn--cancel btn' value='Hủy bỏ' />
            <input type="submit" className='device__managerment-btn--submit btn primary-btn' value='Thêm thiết bị' onClick={handleAddDevice} />
          </div>
        </div>
        

    </div>
  )
}
