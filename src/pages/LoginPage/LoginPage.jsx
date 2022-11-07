import React from "react";
import "./LoginPage.css";


const LoginPage = () => {  
  return (
    <div className='login-page-bg'>
      <div className="login-left-side">
        <div className="login-textbox">
          Hi there, 
          Hey there, welcome back
        </div>
      </div>

      <div className="login-right-side">
        <div className="login-heading">Sign in for Eventic</div>
        <form action="">
          <div>
            <div className="login-top-inputs">
              {/* <div className="login-input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' />
              </div>

              <div className="login-input-wrapper">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id='firstName' />
              </div> */}
            </div>


            <div className="login-input-wrapper login-other-form">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
            </div>

            <div className="login-input-wrapper login-other-form">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' />
            </div>

          </div>

          <div className="login-checkbox-wrapper">
            <div className="login-checkbox-item"><input type="checkbox" /> <div></div>Keep me up to date on latest events.</div>
            <div className="login-checkbox-item"><input type="checkbox" /> <div></div>I accept the  Terms of use  and  subscription</div>
          </div>

          <button className="login-btn">Create your account</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage