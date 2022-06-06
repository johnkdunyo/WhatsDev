import React from 'react'

const ProtectedRoute = ({Component}) => {
    // check if user is stored in browser storage
    const user = localStorage.getItem('User');
    // console.log(JSON.parse(user).uid)
    console.log('from protected route')

  if(!user){
    window.location.href='/login'
  }
  

  else {
    return <Component />
  }
}

export default ProtectedRoute;
