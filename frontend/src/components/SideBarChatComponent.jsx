import React from 'react'

const SideBarChatComponent = (props) => {
    // console.log(props)
    // const user = {
    //     name: 'Contact ',
    //     lastMessage: "Hey, what are you doing?",
    //     lastMessageTime:"3:30 PM"
    // }
    const user = {}
    user.id = props.id
    user.chatName = props.chatName
    user.lastMessage = props.lastMessage === undefined ? " " : props.lastMessage
    user.lastMessageTime = props.lastMessageTime === undefined ? " " : props.lastMessageTime;
    user.chatProfileURL = props.chatProfileURL === undefined ? "https://res.cloudinary.com/jondexter/image/upload/v1654525298/WhatsDev/Profile-Avatars/unknown_yinl1i.jpg" : props.chatProfileURL

    // toLocaleString('en', { hour: 'numeric', minute: 'numeric', hour12: true , timeZone: 'GMT'})
    
    const handleOnClick = (e)=>{
        document.getElementById(props.id)
        props.onChatClick({
            uid:props.id, 
            chatName:props.chatName,
            chatProfileURL:user.chatProfileURL
        })
    }

  return (
      <React.Fragment key={user.id}>
          <div className="btn sidebar-chat" id={user.id} onClick={handleOnClick} >
            <div className="chat-avatar">
                <img src={user.chatProfileURL} alt="profile avatar"  />
            </div>
            <div className="chat-info">
                <h4>{user.chatName}</h4>
                <p>{user.lastMessage.length > 33 ? user.lastMessage.substring(0, 33).concat(' ', '...') : user.lastMessage}</p>
            </div>
            <div className="time">
                <p>{user.lastMessageTime}</p>
            </div>
        </div>

      </React.Fragment>
    

  )
}

export default SideBarChatComponent