import React, { useState } from 'react'
import SideBarChatComponent from './SideBarChatComponent'
import AddChatModal from './AddChatModal';

const Sidebar = ({currentChat, setCurrentChat}) => {
    const user = JSON.parse(localStorage.getItem('User'));
    // console.log(user)

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
                        <p className="dropdown-item mb-2"  data-toggle="modal" data-target="#addContactModal">Add Contact</p>
                        <AddChatModal />
                        <p className="dropdown-item mb-2" >New Chat</p>
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

            <SideBarChatComponent 
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
                lastMessage="Babe, I'm hungry!"
                lastMessageTime='3:30 PM' 
                chatProfileURL = 'https://res.cloudinary.com/jondexter/image/upload/v1654364501/WhatsDev/Profile-Avatars/avatar5_vb3kjh.jpg'
                onChatClick={handleChatClick}
            />
            


        </div>
    </div>
    </React.Fragment>
  )
}

export default Sidebar