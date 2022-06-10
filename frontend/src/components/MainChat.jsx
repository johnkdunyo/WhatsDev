import React, {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';


import { realtimeDB, database } from '../firebase';
import { ref, set, child, push, serverTimestamp, onValue } from 'firebase/database';




// TODO
// putting socket codes here 
// import io from "socket.io-client";
// const SERVER = "http://127.0.0.1:3005";
// const user = localStorage.getItem('User');
// const userID = JSON.parse(user)?.uid;
// const socket = io.connect(SERVER, { query: { uid: userID } });
// console.log(socket)





const MainChat = ({currentChat}) => {
    const user = JSON.parse(localStorage.getItem('User'))
    // console.log(user)
    console.log(currentChat)
    const [typedMessage, setTypedMessage] = useState();
    const [isRegistered, setIsRegistered] = useState(true);
    const [chats, setChats] = useState([]);
    // !currentChat.id && toast(`${currentChat.chatName} is not registered, please send him an invite`)
 

    useEffect(()=>{
        if(currentChat.uid){
            setIsRegistered(true)
        } else {
            setIsRegistered(false)
            toast(`${currentChat.chatName} is not registered, please send him an invite`);
        }

    }, [currentChat])


    const sendMessage = () => {
        console.log(typedMessage);
        sendChatData(typedMessage)
    }


    // create a function to send chat data: 
    // inputs: 1. senderID, 2. receiverID, 3. message
 
    // senderID = user.uid, receiverID = currentChat.uid
    const sendChatData = (message="This is the message content", senderID=user.uid, receiverID=currentChat.uid ) => {
        const chatsRef = ref(realtimeDB, 'newChats'); 
        const chatId = push(chatsRef);
        console.log(chatId.key)
        const messageRef = ref(realtimeDB, 'newChats/' + chatId.key);
        const mesId = push(messageRef);
        set(chatId, {
            parties: [senderID, receiverID],
            [mesId.key]:{
                    content: message,
                    senderID,
                    timestamp: serverTimestamp()
                }
        })
    }

    const readChatData = () => {
        const chatsRef = ref(realtimeDB, 'newChats')
        onValue(chatsRef, (snapshot)=>{
            console.log(snapshot.val())
        })
    }

    // sendChatData()
    readChatData()

    
    // console.log(isRegistered)
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
                {!isRegistered && 
                <p className='chat-message chat-sent'>Click to send an invite to {currentChat.chatName}</p> 
                }

                {/* <p className="chat-message">Hey John! What are you doing now?<span className='chat-timestamp'>11:33 pm</span></p> */}
                {/* <p className="chat-message chat-sent">Hello, this is {currentChat.chatName} <span className='chat-timestamp'>11:34 pm</span></p> */}

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