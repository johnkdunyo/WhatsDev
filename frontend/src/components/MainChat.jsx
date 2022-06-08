import React, {  useState } from 'react';
import { toast } from 'react-toastify';



// TODO
// putting socket codes here 
// import io from "socket.io-client";
// const SERVER = "http://127.0.0.1:3005";
// const user = localStorage.getItem('User');
// const userID = JSON.parse(user)?.uid;
// const socket = io.connect(SERVER, { query: { uid: userID } });
// console.log(socket)




const MainChat = ({currentChat}) => {

    const [typedMessage, setTypedMessage] = useState();
    !currentChat.id && toast(`${currentChat.chatName} is not registered, please send him an invite`)
    // console.

    const sendMessage = () => {
        console.log(typedMessage);
        // socket.emit('send_message', {message: typedMessage})
    }

 

    
  return (
    <React.Fragment>
        <div className="message-container">
            <div className="header">
                <div className="chat-title">
                    <div className="avatar">
                        <img src={currentChat.chatProfileURL} alt="current user profile" />
                    </div>
                    <div className="message-header-content">
                        <h4>{currentChat.chatName}</h4>
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
                <input 
                    type="text" 
                    placeholder="Type a message"
                    value={typedMessage}
                    onChange={(e)=>setTypedMessage(e.target.value)}
                />
                <img src="assets/images/microphone.svg" alt="" />
                <div onClick={sendMessage}>
                    <img src="assets/images/send.svg" alt="" />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MainChat