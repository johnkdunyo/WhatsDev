import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const loginFormInitialState = {
  email: "",
  password: ""
}
const Login = () => {
  const [loginForm, setLoginForm] = useState(loginFormInitialState);

  const onChangeHandler =(e) => {
    setLoginForm({...loginForm, [e.target.name]:e.target.value})
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    console.log(loginForm)
  }


  return (
    <React.Fragment>
        {/* <h2 className='text-center'>WhatsDev</h2>
        <p className='text-center'>WhatsApp for Developers</p> */}
        <div className="container" id="container">
          
          <div className="form-container sign-in-container">
            <form className='login-form' onSubmit={submitFormHandler}>
              <h2 className='mb-2 mt-3'>Welcome Back🤩</h2>
              <p className='mt-3 px-5'> Sign in to continue</p>
              <input 
                type="email" 
                placeholder="Email" 
                className='login-input'
                name= 'email'
                value={loginForm.email}
                onChange={onChangeHandler}
                required
                title='Enter your email'
              />
              <input 
                type="password" 
                placeholder="Password" 
                className='login-input'
                name='password'
                value={loginForm.password}
                onChange={onChangeHandler}
                required
                title='Enter your password'
              />
              <div className='row'>
              {/* <p className='form-link'>Remember me</p> */}
              <Link to="/forgotpassword" className='form-link float-right'>Forgot your password?</Link>
              </div>
              <button>Sign In</button>
              <p className='mt-4'>New User? <Link to="/register" className="">Create your account here</Link> </p>
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

export default Login