import React from "react";
import "./SignupPage.css";


const SignupPage = () => {  
  return (
    <div className='signup-page-bg'>
      <div className="signup-left-side">
        <div className="signup-textbox">
            Hi there, 
            In need of a platform to facilitate Tickets sales  
            create an account on Eventic and host your event 
            tickets easily
        </div>
      </div>

      <div className="signup-right-side">
        <div className="signup-heading">Sign up for Eventic</div>
        <form action="">
          <div>
            <div className="signup-top-inputs">
              <div className="signup-input-wrapper">
                <label htmlFor="firstName">First name</label>
                <input type="text" id='firstName' />
              </div>

              <div className="signup-input-wrapper">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id='firstName' />
              </div>
            </div>

            <div className="signup-input-wrapper signup-other-form">
                <label htmlFor="brandName">Brand Name</label>
                <input type="text" id='brandname' />
            </div>

            <div className="signup-input-wrapper signup-other-form">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
            </div>

            <div className="signup-input-wrapper signup-other-form">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' />
            </div>

          </div>

          <div className="signup-checkbox-wrapper">
            <div className="signup-checkbox-item"><input type="checkbox" /> <div></div>Keep me up to date on latest events.</div>
            <div className="signup-checkbox-item"><input type="checkbox" /> <div></div>I accept the  Terms of use  and  subscription</div>
          </div>

          <button className="signup-btn">Create your account</button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage