import React, { useEffect, useState } from 'react'
import Menu from '../../../Menu/menu'
import './UpdateRoleList.css'
import { CollectionReference, DocumentData, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import { useNavigate, useParams } from 'react-router-dom';
export const  UpdateRoleList= () => {
    const colRef: CollectionReference<DocumentData> = collection(db, 'rolelist'); 
    const { id } = useParams<{ id: string }>();
    const [list, setList] = React.useState<{id: string}[]>([]);
    const[updateRolename, setUpdateRolename] =  React.useState();
    const[updateRoledesc, setUpdateRoledesc] =  React.useState();
    const[updateRolefunction, setUpdateRolefunction] =  useState<string[]>([]);
    const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
    const navigate = useNavigate();
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
    const handleUpdateRole = async () => {
        const deviceRef = doc(db, 'rolelist', roleInfo.id);
        await updateDoc(deviceRef, {
          description: updateRoledesc,
          role: updateRolename,
          function: selectedFunctionsString,
        });
        navigate('/rolelisttable')
        console.log(deviceRef)
      };
    const handleCancel = () => {
        navigate('/rolelisttable')
    }
    
    const selectedFunctionsString = selectedFunctions.join(',');

    useEffect(() => {
        setUpdateRolefunction(selectedFunctions);
    }, [selectedFunctions]);
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkbox = e.target;
        const ul = checkbox.parentNode?.parentNode as HTMLUListElement;
        const lis = Array.from(ul.querySelectorAll('li'));

        if (checkbox.checked) {
            let selectedLis;
            if (checkbox.value === 'Tất cả') {
            selectedLis = lis.filter(
                (li) => li.querySelector('input')?.value !== 'Tất cả'
            );
            } else {
            selectedLis = lis.filter(
                (li) =>
                li.querySelector('input')?.checked &&
                li.querySelector('input')?.value !== 'Tất cả'
            );
            }
            setSelectedFunctions([
            ...selectedFunctions,
            ...selectedLis.map((li) => li.textContent?.trim() as string),
            ]);
        } else {
            const selectedLi = lis.find(
            (li) => li.querySelector('input')?.value === checkbox.value
            );
            if (selectedLi) {
            setSelectedFunctions(
                selectedFunctions.filter(
                (func) => func !== selectedLi.textContent?.trim()
                )
            );
            }
        }
    }
  return (
    <div className='role__list-page'>
        <Menu/>
        <h1>Danh sách vai trò</h1>
        <div className="role__list-infor">
            <h3>Thông tin vai trò</h3>
            <div className="role__list-infor-row">
                <div className="role__list-infor-column">
                    <div className="role__list-infor-column-infor">
                        <div className="role__list-infor-column-title">
                            Tên vai trò: <p>*</p>
                        </div>
                        <input type="text" placeholder="Nhập tên vai trò" onChange={(e: any) => setUpdateRolename(e.target.value)}/>
                        <div className="role__list-infor-column-title">
                         Mô tả:
                        </div>
                        <textarea rows={10} cols={50} name="message" placeholder="Nhập mô tả" onChange={(e: any) => setUpdateRoledesc(e.target.value)} ></textarea>
                        <div className='role__list-infor-column-other-sub'>
                        Là trường thông tin bắt buộc <p>*</p>
                        </div>
                    </div>
                </div>    
                
                <div className="role__list-infor-column">
                    <div className="role__list-infor-column-title">
                        Phân quyền chức năng: <p>*</p>
                    </div>
                    <div className="role__list-infor-column-list-checkbox">
                        <h3>Nhóm chức năng A</h3>
                        <ul>
                            <li><input type="checkbox" onChange={handleCheckboxChange} value="
                            Tất cả"/> Tất cả </li>
                            <li><input type="checkbox" value="Chức năng X" onChange={handleCheckboxChange}/> Chức năng X</li>
                            <li><input type="checkbox" value="Chức năng Y" onChange={handleCheckboxChange}/> Chức năng y</li>
                            <li><input type="checkbox" value="Chức năng Z" onChange={handleCheckboxChange}/> Chức năng z</li>
                        </ul>  
                        <h3>Nhóm chức năng B</h3>
                        <ul>
                            <li><input type="checkbox" onChange={handleCheckboxChange} value="
                            Tất cả"/> Tất cả </li>
                            <li><input type="checkbox" value="Chức năng X" onChange={handleCheckboxChange}/> Chức năng X</li>
                            <li><input type="checkbox" value="Chức năng Y" onChange={handleCheckboxChange}/> Chức năng y</li>
                            <li><input type="checkbox" value="Chức năng Z" onChange={handleCheckboxChange}/> Chức năng z</li>
                        </ul>  
                        <h3>Nhóm chức năng C</h3>
                        <ul>
                            <li><input type="checkbox" onChange={handleCheckboxChange} value="
                            Tất cả"/> Tất cả </li>
                            <li><input type="checkbox" value="Chức năng X" onChange={handleCheckboxChange}/> Chức năng X</li>
                            <li><input type="checkbox" value="Chức năng Y" onChange={handleCheckboxChange}/> Chức năng y</li>
                            <li><input type="checkbox" value="Chức năng Z" onChange={handleCheckboxChange}/> Chức năng z</li>
                        </ul>  
                        <h3>Nhóm chức năng D</h3>
                        <ul>
                            <li><input type="checkbox" onChange={handleCheckboxChange} value="
                            Tất cả"/> Tất cả </li>
                            <li><input type="checkbox" value="Chức năng X" onChange={handleCheckboxChange}/> Chức năng X</li>
                            <li><input type="checkbox" value="Chức năng Y" onChange={handleCheckboxChange}/> Chức năng y</li>
                            <li><input type="checkbox" value="Chức năng Z" onChange={handleCheckboxChange}/> Chức năng z</li>
                        </ul>  
                        <h3>Nhóm chức năng E</h3>
                        <ul>
                            <li><input type="checkbox" onChange={handleCheckboxChange} value="
                            Tất cả"/> Tất cả </li>
                            <li><input type="checkbox" value="Chức năng X" onChange={handleCheckboxChange}/> Chức năng X</li>
                            <li><input type="checkbox" value="Chức năng Y" onChange={handleCheckboxChange}/> Chức năng y</li>
                            <li><input type="checkbox" value="Chức năng Z" onChange={handleCheckboxChange}/> Chức năng z</li>
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
        <div className="role__list-btn">
                <input type="submit" className='role__list-btn--cancel btn' value='Hủy bỏ' onClick={handleCancel} />
                <input type="submit" className='role__list-btn--submit btn primary-btn' value='Cập nhật' onClick={handleUpdateRole} />
          </div>
    </div>
  )
}
