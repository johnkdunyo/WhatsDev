import React from 'react';
import { signOut } from 'firebase/auth';
import { auth, database } from '../firebase';
import { toast } from 'react-toastify';

const ProfileSideBarComponent = ({openProfileSideBar, setOpenProfileSideBar}) => {
    const user = JSON.parse(localStorage.getItem('User'));

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
            <div className='profile-img_container'>
                <img src={user.avatarURL} alt="user avatar" />
                
                <div className='overlayf'>
                    <p>Update image
                    <img height='20px' width='20px' src='assets/images/edit.png' alt='edit'/>
                    </p>
                </div>
            </div>
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


        <div className='align-self-end mt-5'>
            <button className='btn btn-secondary' onClick={logoutUser}>Logout</button>
        </div>
    </div>
    </div>
    {openProfileSideBar && (<div className='modal-backdrop fade show' onClick={()=>setOpenProfileSideBar(prev=>!prev)}></div> )}
    {/* <div className='modal-backdrop fade show'></div> */}</>
  )
}

export default ProfileSideBarComponent