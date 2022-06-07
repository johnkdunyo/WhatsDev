import React from 'react'

const AddContact = ({openAddContactModal}) => {
  return (
    <div className='btn sidebar-chat addContact' onClick={()=>openAddContactModal()}>
        <div className='chat-info text-center '>
            <h5 className='addContact-text'>No Contacts 😥 </h5>
            <p className='addContact-text'> --- click to add one to begin ---</p>
        </div>
    </div>
  )
}

export default AddContact