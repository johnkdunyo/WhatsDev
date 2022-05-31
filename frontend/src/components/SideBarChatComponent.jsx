import React from 'react'

const SideBarChatComponent = () => {
    const user = {
        name: 'Jon Dexter',
        lastMessage: "Hey, what are you doing?",
        lastMessageTime:"3:30 PM"
    }

  return (
    <div className="sidebar-chat">
        <div className="chat-avatar">
            <img src="assets/images/avatar.png" alt="" />
        </div>
        <div className="chat-info">
            <h4>{user.name}</h4>
            <p>{user.lastMessage}</p>
        </div>
        <div className="time">
            <p>{user.lastMessageTime}</p>
        </div>
    </div>

  )
}

export default SideBarChatComponent