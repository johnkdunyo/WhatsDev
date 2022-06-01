import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// get firebase auth
import { auth, database } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 


const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // state for error
  const [error, setError] = useState('');


  const onFormSubmitHandler= async(e)=>{
    e.preventDefault();
    setError('')
    const avatarURL = 'https://res.cloudinary.com/jondexter/image/upload/v1654090362/WhatsDev/Profile-Avatars/user_zcrnks.png';
    const newUser = {
      fullName, email, avatarURL
    }

    // check if confirm password match
    if(password !== confirmPassword){
     return setError('Confirm Password do not match')
    }else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((response)=>{
        console.log(response)
        localStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        localStorage.setItem('User', JSON.stringify(newUser) )
        addDoc(collection(database, "users"), newUser)
        .then(response=>{
          console.log(response)
          // navigate user to home
          navigate('/home');
        })
        .catch(error=>{
          console.log(error)
          setError(error)
        })


      })


      .catch(error=>{
        console.log(error)
        if (error.code === 'auth/email-already-in-use') {
          setError('Email Already in Use, please sign in or use another one');
        }
        // setError(error)
      })
    }

    
  }

  console.log(error)
  
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
                pattern=".{8,20}"
                title='Password must be 8 to 20 characters long'
              />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className='login-input'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
                pattern=".{8,20}"
                title='Password must be 8 to 20 characters long'
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