import React from 'react'

const MainChat = () => {
  return (
    <React.Fragment>
        <div className="message-container">
            <div className="header">
                <div className="chat-title">
                    <div className="avatar">
                        <img src="assets/images/avatar.png" alt="" />
                    </div>
                    <div className="message-header-content">
                        <h4>Jon Dexter</h4>
                        <p>online</p>
                    </div>
                </div>
                <div className="chat-header-right">
                <img src="assets/images/search-solid.svg" alt="" />
                    <img src="assets/images/more.svg" alt="" />
                </div>
            </div>
            <div className="message-content">
                <p className="chat-message">Hey John! What are you doing now?<span className='chat-timestamp'>11:33 pm</span></p>
                <p className="chat-message chat-sent">Waiting for the lunch <span className='chat-timestamp'>11:34 pm</span></p>

            </div>
            <div className="message-footer">
                <img src="assets/images/smile.svg" alt="" />
                <img src="assets/images/paper-clip.svg" alt="" />
                <input type="text" placeholder="Type a message" />
                <img src="assets/images/microphone.svg" alt="" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default MainChat