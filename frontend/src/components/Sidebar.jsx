import React, { useState, useEffect } from 'react'
import SideBarChatComponent from './SideBarChatComponent'
import AddChatModal from './AddChatModal';
import AddContact from './AddContact';

import { getDocs, collection } from 'firebase/firestore';
import { database } from '../firebase';

const Sidebar = ({currentChat, setCurrentChat}) => {
    const user = JSON.parse(localStorage.getItem('User'));
    const [contacts, setContacts] = useState();
    // console.log(user)

    useEffect(() => {
    //    lets get all contacts
    const contacts = new Set()
    getDocs((collection(database, 'users', user.uid, 'contacts')))
    .then(result=>{
        result.forEach(contact => {
            contacts.add(contact.data())
            // setContacts([...contacts, contact.data()])
            // console.log(contact.data())
        });
        setContacts([...contacts])
    })
    .catch(error=>{
        console.log(error)
    })
    

    }, [user.uid])

    
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
    const [addChatModalStatus, setAddChatModalStatus] = useState(false)
  

    const openAddContactModal = () => {
        setAddChatModalStatus(prev => !prev);
        setOpenOptions(false);
    }
    
  return (
    <React.Fragment>
        <div className="sidebar">
        <div className="header">
            <div className="avatar">
                <img src={user.avatarURL} alt="user avatar" />
            </div>
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
    </React.Fragment>
  )
}

export default Sidebar