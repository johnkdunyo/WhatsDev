import React, { useState } from 'react'
import MainChat from '../components/MainChat'
import MainChatDefault from '../components/MainChatDefault';
import Sidebar from '../components/Sidebar'

const chatInitialState = {
  id: 1,
  name: 'Jon Maxwell',
  chatProfileURL: ""
}

const Main = () => {
  const [currentChat, setCurrentChat] = useState();
  

  return (
    <React.Fragment>
            <div className='d-flex'>
              <div className='col-3'>
                <Sidebar currentChat={currentChat} setCurrentChat={setCurrentChat} />
              </div>
              <div className="col-9">
                {currentChat ? <MainChat  currentChat={currentChat}/> : <MainChatDefault />}
                {/* <MainChat /> */}
                {/* <MainChatDefault /> */}
              </div>

            </div>

        
    </React.Fragment>
  )
}

export default Main