import React from 'react'

const SideBarChatComponent = (props) => {
    // console.log(props)
    const user = {
        name: 'Contact ',
        lastMessage: "Hey, what are you doing?",
        lastMessageTime:"3:30 PM"
    }
    const handleOnClick = (e)=>{
        document.getElementById(props.id)
        props.onChatClick({
            id:props.id, 
            chatName:props.chatName,
            chatProfileURL:props.chatProfileURL
        })
    }

  return (
      <React.Fragment key={props.id}>
          <div className="btn sidebar-chat" id={props.id} onClick={handleOnClick} >
            <div className="chat-avatar">
                <img src={props.chatProfileURL} alt="profile avatar"  />
            </div>
            <div className="chat-info">
                <h4>{props.chatName}</h4>
                <p>{props.lastMessage.length > 33 ? props.lastMessage.substring(0, 33).concat(' ', '...') : props.lastMessage}</p>
            </div>
            <div className="time">
                <p>{props.lastMessageTime}</p>
            </div>
        </div>

      </React.Fragment>
    

  )
}

export default SideBarChatComponent