import React, { useEffect } from 'react'
import Menu from '../../Menu/menu'
import './ProvideNumberDetail.css'
import { CollectionReference, DocumentData, collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../../../firebase/config';
import { Link } from 'react-router-dom';
export const ProvideNumberDetail = () => {
    const [list, setList] = React.useState<{id: string}[]>([]);
    const colRef: CollectionReference<DocumentData> = collection(db, 'providenumberlist'); 
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const getDevice = async () => {
            const data = await getDocs(colRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getDevice();
        
    },[]);
    let providenumberInfo: any;
    providenumberInfo = list.find((data) => data.id.replace(' ', '') == id);
    if (providenumberInfo) {
    console.log(providenumberInfo);
    }
  return (
    <div className='provide__number-detail-page'>
        <Menu/>
        <h1>Quản lý cấp số</h1>
        <div className="provide__number-detail">
        <h3>Thông tin cấp số</h3>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Họ và tên: 
                    <div className="provide__number-detail-column-content">
                        <p>{providenumberInfo && providenumberInfo.customer}</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    Nguồn cấp:
                    <div className="provide__number-detail-column-content">
                        <p>{providenumberInfo && providenumberInfo.source}</p>
                    </div> 
                </div>
            </div>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Tên dịch vụ:
                    <div className="provide__number-detail-column-content">
                        <p>{providenumberInfo && providenumberInfo.service}</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    Trạng thái: 
                    <div className="provide__number-detail-column-content provide__number-detail-column-state">
                        <span className={`${providenumberInfo && providenumberInfo.state === 'Bỏ qua' ? 'red' : providenumberInfo && providenumberInfo.state === 'Đang chờ' ? 'blue' : 'gray'}`}></span>
                        <p>{providenumberInfo && providenumberInfo.state}</p>
                    </div>
                    
                </div>
            </div>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Số thứ tự: 
                    <div className="provide__number-detail-column-content">
                        <p>{providenumberInfo && providenumberInfo.number}</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    Số điện thoại: 
                    <div className="provide__number-detail-column-content">
                        <p>{providenumberInfo && providenumberInfo.phone}</p>
                    </div>
                </div>
            </div>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Thời gian cấp: 
                    <div className="provide__number-detail-column-content">
                        <p>{providenumberInfo && providenumberInfo.time}</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    Địa chỉ Email: 
                    <div className="provide__number-detail-column-content">
                        <p>{providenumberInfo && providenumberInfo.email}</p>
                    </div>
                </div>
            </div>
            <div className="provide__number-detail-row">
                <div className="provide__number-detail-column">
                    Hạn sử dụng: 
                    <div className="provide__number-detail-column-content">
                        <p>{providenumberInfo && providenumberInfo.expiry}</p>
                    </div>
                </div>
                <div className="provide__number-detail-column">
                    
                </div>
            </div>
        </div>
        <div className="provide__number__list-back">
                <span>
                <Link to='/providenumberlist'>
                <i className="fa-sharp fa-solid fa-rotate-left"></i>
                </Link>
                <p>Quay lại</p>
                </span>
          
        </div>
    </div>
  )
}
