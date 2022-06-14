import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, database, storage } from '../firebase';
import { toast } from 'react-toastify';
import {  
    ref as storageRef, 
    getDownloadURL,
    uploadBytes,
} from "firebase/storage";

import { updateDoc, doc } from "firebase/firestore"; 

const ProfileSideBarComponent = ({openProfileSideBar, setOpenProfileSideBar}) => {
    const user = JSON.parse(localStorage.getItem('User'));
    const [upload, setUpload] = useState(false);
    const [newAvatar, setNewAvatar] = useState('');

    const logoutUser= () =>{
        signOut(auth)
        .then(result=>{
            console.log(result)
            localStorage.clear()
            toast('User logged out successfully')
            window.location.reload()
        })
        .catch(error=>{
            console.log(error)
        })
    }

    


    const uploadImage = () => {
        setUpload(true)
   
    }

    const submitForm = async() => {
        const imgRef = storageRef(
            storage,
            `avatar/${new Date().getTime()} - ${newAvatar.name}`
          );

          
          const snap = await uploadBytes(imgRef, newAvatar);
          const avatarURL = await getDownloadURL(storageRef(storage, snap.ref.fullPath));

          await updateDoc(doc(database, "users", auth.currentUser.uid), {
            avatarURL,
            avatarPath: snap.ref.fullPath,
          });
          toast('Profile updated successfully')
          setUpload(false)
          setNewAvatar('')
          

       

        

    }


    

    // console.log(newAvatar)
  return (
    <>
    <div className={`offcanvas offcanvas-start ${openProfileSideBar && 'show'}`} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" 
    aria-labelledby="offcanvasWithBothOptionsLabel"
    style={{visibility:'visible', width:'25%'}} 
    aria-modal='true' role='dialog'
    
    >
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"> {`<- Back`} </h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>setOpenProfileSideBar(prev=>!prev)}></button>

    </div>
    <div className="offcanvas-body">

        
        <div className='text-center'>
            <div className='profile-img_container' onClick={uploadImage}>
                <img src={user.avatarURL} alt="user avatar" className='avata-img' />
                
                <div className='myoverlay'>
                    <p>Update image
                    <img className='editIcon' height='20px' width='20px' src='assets/images/edit.png' alt='edit'/>
                    </p>
                </div>
            </div>
            {upload && 
            <div>
                <input type="file" id="img" name="img" accept="image/*" onChange={(e)=>setNewAvatar(e.target.files[0])}/>
            </div>
            }
        </div>

        <div className='text-left mt-5'>
            <p className='text-secondary mb-1'>Your name</p>
            <div className='d-flex justify-content-between'>
                <h5>{user.fullName}</h5>
                <img height='20px' width='20px' src='assets/images/edit.png' alt='edit'/>
            </div>
            
            <p className='text-secondary mt-3 mb-1'>Your email</p>
            <h5>{user.email}</h5>

            <p className='text-secondary mt-3 mb-1'>Date you joined</p>
            <h5>January 30th, 2022</h5>
        </div>


        <div className='d-flex justify-content-between mt-5'>
            <button className='btn btn-secondary' onClick={logoutUser}>Logout</button>
            {(newAvatar !=='' && newAvatar !==undefined) && <button className='btn btn-success' onClick={submitForm}>Save</button>}
        </div>
    </div>
    </div>
    {openProfileSideBar && (<div className='modal-backdrop fade show' onClick={()=>setOpenProfileSideBar(prev=>!prev)}></div> )}
    {/* <div className='modal-backdrop fade show'></div> */}</>
  )
}

export default ProfileSideBarComponent