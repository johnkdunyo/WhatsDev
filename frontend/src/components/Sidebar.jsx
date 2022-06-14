import React, { useState, useEffect } from 'react'
import SideBarChatComponent from './SideBarChatComponent'
import AddChatModal from './AddChatModal';
import AddContact from './AddContact';

import { getDocs, getDoc, collection, onSnapshot, doc} from 'firebase/firestore';
import { auth, database } from '../firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import ProfileSideBarComponent from './ProfileSideBarComponent';
import { async } from '@firebase/util';


const Sidebar = ({currentChat, setCurrentChat}) => {
    const user = JSON.parse(localStorage.getItem('User'));
    const [contacts, setContacts] = useState();
    // console.log(user)

    const userr = auth.currentUser
    // console.log(userr)

    useEffect(() => {
    //    lets get all contacts
    const unsub =  async() => {
        const myContacts = [];
        const  contactsRef = collection(database, 'users', user.uid, 'contacts');
        // onSnapshot(contactsRef, querySnapResult => {
        //     querySnapResult.forEach(contactDoc => {
        //         // console.log('this is what you want: ', contactDoc.data().uid);             
        //         myContacts.push({uid: contactDoc.data().uid, email: contactDoc.data().email});
        //     });
            
        // })
        // setContacts(myContacts)
        const result = await getDocs(contactsRef);
        result.forEach(contact=>{
            console.log('contacts :', contact.data())
            // get data if it exists
            
            if(contact.data().uid){
                getDoc(doc(database, 'users', contact.data().uid))
                .then(data=>{
                    console.log('promise : ', data.data())
                    myContacts.push({
                        fullName: data.data().fullName,
                        name: contact.data().name,
                        chatID: contact.data().chatID,
                        uid: contact.data().uid,
                        avatarURL: data.data().avatarURL,
                        email: contact.data().email

                    })
                })
            }else{
                myContacts.push({name: contact.data().name, email: contact.data().email })
            }
            // myContacts.push({
            //     uid: contact.data().uid,
            //     name: contact.data().name,
            //     chatID: contact.data().chatID
            // })
        })
        setContacts(myContacts)
        console.log(result)
        
    }

    // const mainfunc = () => {
    //     unsub()
    //     console.log(contacts)
        // console.log(Object.values(contactss))
       
        // now get user data from db with the id
        // console.log(contacts)
        //   const result = await  getDoc(doc(database, 'users', contactDoc.data().uid))
        //   const data = {...result.data(), name: contactDoc.data().name}
    // }

    // mainfunc();
    unsub()
    // // clean up
    // return () => unsub();
    }, [])
    console.log(contacts)
    
    // console.log(contacts?.length ===0 )

    

    const handleChatClick =(chat) => {
        // console.log(chat)
        setCurrentChat(chat)
        // DO this later
        // const selectedChat = document.getElementById(id);
        // if (selectedChat.classList.contains('selected')){
        //     selectedChat.classList.remove('selected')
        //     console.log("true - remove: ",selectedChat.classList)
        // } else {
        //     selectedChat.classList.add('selected');
        //     console.log('false - add: ', selectedChat.classList)
        // }
    }
    
    const [openOptions, setOpenOptions] = useState(false);
    const [addChatModalStatus, setAddChatModalStatus] = useState(false);
    const [openProfileSideBar, setOpenProfileSideBar] = useState(false);
  

    const openAddContactModal = () => {
        setAddChatModalStatus(prev => !prev);
        setOpenOptions(false);
    }

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
    <React.Fragment>
        <div className="sidebar">
        <div className="header">
            <div className="avatar" 
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"
                onClick={()=>setOpenProfileSideBar(prev=>!prev)}>
                <img src={user.avatarURL} alt="user avatar" />
            </div>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}
                {/* <div className={`dropdown-menu ${openProfileSideBar && 'show'}`} aria-labelledby="Logout-dropdownMenu">
                     <p className="dropdown-item mb-2" onClick={logoutUser}>Logout</p>
                </div> */}
            
            <div className="chat-header-right">
                {/* <img className='chat-header-image' src="assets/images/circle-notch-solid.svg" alt="" /> */}
                {/* <img className='chat-header-image' src="assets/images/chat.svg" alt="" /> */}
                {/* <div className='dropdown show' > */}
                    {/* <img className='chat-header-image' src="assets/images/more.svg" alt="" /> */}
                {/* </div> */}
                <div className="dropdown show">
                    <span  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>setOpenOptions(prev=>!prev)} >
                        <img className='chat-header-image' src="assets/images/more.svg" alt="" />
                    </span>
                    <div className={`dropdown-menu ${openOptions && 'show'}`} aria-labelledby="dropdownMenuLink">
                        <p className="dropdown-item mb-2"  data-toggle="modal" data-target="#addContactModal" onClick={openAddContactModal}>Add Contact</p>
                        <p className="dropdown-item mb-2" >Create Group</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="sidebar-search">
            <div className="sidebar-search-container">
                <img src="assets/images/search-solid.svg" alt="" />
                <input type="text" placeholder="Search or start new chat" />
            </div>
        </div>
        <div className="sidebar-chats">
            {contacts?.length  === 0  ? (<AddContact openAddContactModal={openAddContactModal} />) : (
                contacts?.map(contact=>(
                    <SideBarChatComponent 
                        key={contact.email}
                        chatName={contact.name}
                        onChatClick={handleChatClick}
                        chatProfileURL={contact?.avatarURL}
                        id={contact?.uid}
                        chatID={contact?.chatID}
                    />
                ))
            )}
            {/* <p className='text-primary'>{user.fullName}</p> */}
            {/* <SideBarChatComponent 
                id={100}
                chatName={user.fullName} 
                lastMessage='this is me, and im here' 
                lastMessageTime='3:30 PM' 
                chatProfileURL = {user.avatarURL}
                onChatClick={handleChatClick}
            /> */}

            {/* <SideBarChatComponent 
                id={1}
                chatName='Jon Dexter' 
                lastMessage='Hey, have you seen my bicycle?' 
                lastMessageTime='3:30 PM' 
                chatProfileURL = 'https://res.cloudinary.com/jondexter/image/upload/v1654364027/WhatsDev/Profile-Avatars/yvsbz8c4tr3aknoh4ptd_nqmfhs.png'
                onChatClick={handleChatClick}
            />

            <SideBarChatComponent 
                id={2}
                chatName='Kofi Maxwell' 
                lastMessage="Boys are cashing out big time ooh😂😂😂" 
                lastMessageTime='3:30 PM' 
                chatProfileURL = 'https://res.cloudinary.com/jondexter/image/upload/v1654364324/WhatsDev/Profile-Avatars/avatar3_k81b4r.jpg'
                onChatClick={handleChatClick}
            />

            <SideBarChatComponent 
                id={3}
                chatName='Eyram 🥰' 
                lastMessage='Check you momo😂..' 
                lastMessageTime='3:30 PM' 
                chatProfileURL = 'https://res.cloudinary.com/jondexter/image/upload/v1654364500/WhatsDev/Profile-Avatars/avatar6_lq34bp.png'
                onChatClick={handleChatClick}
            />

            <SideBarChatComponent 
                id={4}
                chatName='LOML 🥰' 
                // lastMessage="Babe, I'm hungry!"
                // lastMessageTime='3:30 PM' 
                // chatProfileURL = 'https://res.cloudinary.com/jondexter/image/upload/v1654364501/WhatsDev/Profile-Avatars/avatar5_vb3kjh.jpg'
                onChatClick={handleChatClick}
            /> */}
            


        </div>
    </div>
    <AddChatModal  modalStatus={addChatModalStatus} setModalStatus={setAddChatModalStatus}/>


    <ProfileSideBarComponent openProfileSideBar={openProfileSideBar} setOpenProfileSideBar={setOpenProfileSideBar} />

    </React.Fragment>
  )
}

export default Sidebar