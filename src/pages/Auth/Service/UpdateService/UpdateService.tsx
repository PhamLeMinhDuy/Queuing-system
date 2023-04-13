import React, { useEffect, useState } from 'react'
import Menu from '../../Menu/menu'
import './UpdateService.css'
import { CollectionReference, DocumentData, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useNavigate, useParams } from 'react-router-dom';
export const UpdateService = () => {
    const colRef: CollectionReference<DocumentData> = collection(db, 'servicelist'); 
    const { id } = useParams<{ id: string }>();
    const [list, setList] = React.useState<{id: string}[]>([]);
    const[updateServicename, setUpdateServicename] =  React.useState();
    const[updateServiceid, setUpdateServiceid] =  React.useState();
    const[updateServicedes, setUpdateServicedes] =  React.useState();
    const navigate = useNavigate();
    useEffect(() => {
        const getDevice = async () => {
            const data = await getDocs(colRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getDevice();
        
    },[]);
    let serviceInfo: any;
    serviceInfo = list.find((data) => data.id.replace(' ', '') == id);
    if (serviceInfo) {
    console.log(serviceInfo.id);
    }
    const handleUpdateService = async () => {
        const deviceRef = doc(db, 'servicelist', serviceInfo.id);
        await updateDoc(deviceRef, {
          name: updateServicename,
          description: updateServicedes,
          serviceid: updateServiceid,
        });
        navigate(`/servicedetail/${id}`)
        console.log(deviceRef)
      };
    const handleCancel = () => {
        navigate(`/servicedetail/${id}`)
    }
  
  return (
    <div className='update__service-page'>
        <Menu/>
        <h1>Quản lý dịch vụ</h1>
        <div className="update__service-infor">
            <h3>Thông tin dịch vụ</h3>
            <div className="update__service-infor-row">
                <div className="update__service-infor-column">
                    <div className="update__service-infor-column-infor">
                        <div className="update__service-infor-column-title ">
                            Mã dịch vụ: <p>*</p>
                        </div>
                        <input  style={{paddingLeft: '16px'}}  placeholder="Nhập mã dịch vụ" onChange={(e: any) => setUpdateServiceid(e.target.value)}/>
                        <div className="update__service-infor-column-title update__service-infor-column-title-css">
                        Tên dịch vụ: <p>*</p>
                        </div>
                        <input style={{paddingLeft: '16px'}} type="text" placeholder="Nhập tên dịch vụ" onChange={(e: any) => setUpdateServicename(e.target.value)}/>
                </div>
                    </div>

                <div className="update__service-infor-column">
                    <div className="update__service-infor-column-title">
                    Mô tả:
                    </div>
                    <textarea style={{paddingLeft: '16px'}}rows={10} cols={50} name="message" placeholder="Mô tả dịch vụ" onChange={(e: any) => setUpdateServicedes(e.target.value)}></textarea>
                </div>
            </div>
            <h3>Quy tắc cấp số</h3>
            <div className="update__service-infor-row-checkbox">
                <div className="update__service-infor-column-checkbox">
                    <input type="checkbox" /> Tăng tự động từ: 
                </div>
                <div className="update__service-infor-column-checkbox">
                        <p>0001</p>
                        <span>đến</span>
                        <p>0009</p>
                </div>
            </div>
            <div className="update__service-infor-row-checkbox">
                <div className="update__service-infor-column-checkbox">
                    <input type="checkbox" /> Prefix: 
                </div>
                <div className="update__service-infor-column-checkbox">
                        <p>0001</p>
                </div>
            </div>
            <div className="update__service-infor-row-checkbox">
                <div className="update__service-infor-column-checkbox">
                    <input type="checkbox" /> Surfix: 
                </div>
                <div className="update__service-infor-column-checkbox">
                        <p>0001</p>
                </div>
            </div>
            <div className="update__service-infor-row-checkbox">
                <div className="update__service-infor-column-checkbox">
                    <input type="checkbox" /> Reset mỗi ngày:
                </div>
                <div className="update__service-infor-column-checkbox">
                        
                </div>
            </div>
            <div className="update__service-infor-row">
                <div className='update__service-infor-column-other-sub'>
                        Là trường thông tin bắt buộc <p>*</p>
                </div>

            </div>
            <div className="update__service-btn">
                <input type="submit" className='update__service-btn--cancel btn' value='Hủy bỏ' onClick={handleCancel}/>
                <input type="submit" className='update__service-btn--submit btn primary-btn' value='Cập nhật' onClick={handleUpdateService}/>
          </div>
        </div>
    </div>
  )
}
function setList(arg0: any) {
    throw new Error('Function not implemented.');
}

