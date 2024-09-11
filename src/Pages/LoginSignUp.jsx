import React from 'react'
import "./CSS/LoginSignUp.css"
const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>  
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignupfeilds">
          <label htmlFor="">Name: </label>
          <input type="text" name="" id="" placeholder='Enter u r name'/>
          <label htmlFor="">Email: </label>
          <input type="email" placeholder='Enter u r email address'/>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password'/>
        </div>
        <p className="loginSignup-login">
          Already have an account?<span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id =""/>
          <p>I agree</p>
        </div>
        <button>Continue</button>
      </div>
      
    </div>
  )
}

export default LoginSignUp
