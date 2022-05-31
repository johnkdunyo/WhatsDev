import React from 'react'
import SideBarChatComponent from './SideBarChatComponent'

const Sidebar = () => {
  return (
    <React.Fragment>
        <div className="sidebar">
        <div className="header">
            <div className="avatar">
                <img src="assets/images/avatar.png" alt="" />
            </div>
            <div className="chat-header-right">
                <img src="assets/images/circle-notch-solid.svg" alt="" />
                <img src="assets/images/chat.svg" alt="" />
                <img src="assets/images/more.svg" alt="" />
            </div>
        </div>
        <div className="sidebar-search">
            <div className="sidebar-search-container">
                <img src="assets/images/search-solid.svg" alt="" />
                <input type="text" placeholder="Search or start new chat" />
            </div>
        </div>
        <div className="sidebar-chats">

            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />
            <SideBarChatComponent />


        </div>
    </div>
    </React.Fragment>
  )
}

export default Sidebar