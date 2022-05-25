import React from 'react'
import MainChat from '../components/MainChat'
import Sidebar from '../components/Sidebar'

const Main = () => {
  return (
    <React.Fragment>
            <div className='row'>
              <div className='d-flex'>
                <Sidebar />
              </div>
              <div className="d-flex">
                <MainChat />
              </div>
              {/* <Sidebar /> */}
              {/* <MainChat /> */}

            </div>

        
    </React.Fragment>
  )
}

export default Main