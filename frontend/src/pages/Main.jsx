import React from 'react'
import MainChat from '../components/MainChat'
import Sidebar from '../components/Sidebar'

const Main = () => {
  return (
    <React.Fragment>
            <div className='d-flex'>
              <div className='col-3'>
                <Sidebar />
              </div>
              <div className="col-9">
                <MainChat />
              </div>
              {/* <Sidebar /> */}
              {/* <MainChat /> */}

            </div>

        
    </React.Fragment>
  )
}

export default Main