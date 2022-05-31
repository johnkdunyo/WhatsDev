import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // state for error
  const [error, setError] = useState('');


  const onFormSubmitHandler=(e)=>{
    e.preventDefault();
    setError('')

    // check if confirm password match
    if(password !== confirmPassword){
     return setError('Confirm Password do not match')
    }
  }

  
  return (
    <React.Fragment>
        {/* <h2 className='text-center'>WhatsDev</h2>
        <p className='text-center'>WhatsApp for Developers</p> */}
        <div className='container'>
          <div className="form-container sign-in-container">
            <form className='login-form' onSubmit={onFormSubmitHandler}>
            <h2 className='mb-2 mt-3'>Great to Have You 🤩!</h2>
              <p className='mt-3 px-5'> Create an account to get connected</p>
              <input 
                type="text" 
                placeholder="Full Name" 
                className='login-input'
                name='fullName'
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                required
              />
              <input 
                type="email" 
                placeholder="Email" 
                className='login-input'
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <input 
                type="password" 
                placeholder="Password" 
                className='login-input'
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                autoComplete='new-password'
              />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className='login-input'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
              />
              {error && <p className='text-danger mt-0 mb-0'>{error}</p>}
              <button className='mt-1' type='submit'>Create Account</button>
              <p  className='form-link float-right mb-3'>Alredy have an account?<Link to="/">Log in now</Link> </p>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>WhatsDev</h1>
                <p>WhatsApp for Developers</p>
              </div>
            </div>
          </div>
        </div>

    </React.Fragment>
  )
}

export default SignUp