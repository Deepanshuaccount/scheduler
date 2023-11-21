import React from 'react'
import './style.css';

function Login() {
  return (
    <>
<div className='main-container'>
   <h2>Login your Account</h2>
    <div className='Login-form'>
   
    <div className='text1'>
        <label>USERNAME</label><br/>
        </div>
        <input type="email" name="email"></input><br/>
        <div className='text1'>
        <label>PASSWORD</label><br/>
        </div>
        <input type="password" name="password"></input><br/>
        <button className='btn'>Login</button>
    </div>
   </div>
    </>
   
  )
}

export default Login