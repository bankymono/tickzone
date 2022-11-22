import React, { useState } from "react";
import "./SignupPage.css";
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { useEffect } from "react";
import { ClipLoader } from 'react-spinners';


const SignupPage = ({history}) => {  
  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const {userSuccess, userLoading, userError} = userRegister


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    if(userSuccess){
        Swal.fire({
            icon: 'success',
            title: 'User Registered Successfully',
            showConfirmButton: false,
            timer: 2000
          }).then(()=>{
              history.push('/login')
          })
    }else if(userError) {
      Swal.fire({
        icon: 'error',
        title: userError,
        showConfirmButton: false,
        timer: 2000
      }).then(()=>{
        setFirstName('')
        setLastName('')
        setBrandName('')
        setEmail('')
        setPassword('')
          history.push('/signup')
      })

    }
},[ 
    userSuccess,history,userError
])

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      brandName,
      email,
      password
    }
    
    dispatch(registerUser(data))
                
}

const handleChange = (e) => {
  switch(e.target.name){
    case 'firstName':
      setFirstName(e.target.value)
      break;
    case 'lastName':
      setLastName(e.target.value)
      break;
    case 'brandName':
      setBrandName(e.target.value)
      break;
    case 'email':
      setEmail(e.target.value)
      break;
    case 'password':
      setPassword(e.target.value)
      break;
    default:
      return null;
  }
}

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
        <form onSubmit={handleSubmit} action="">
          <div>
            <div className="signup-top-inputs">
              <div className="signup-input-wrapper">
                <label htmlFor="firstName">First name</label>
                <input name="firstName" type="text" id='firstName' value={firstName} onChange={handleChange} />
              </div>

              <div className="signup-input-wrapper">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id='lastName' name="lastName" value={lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="signup-input-wrapper signup-other-form">
                <label htmlFor="brandName">Brand Name</label>
                <input type="text" id='brandname' name="brandName" value={brandName} onChange={handleChange} />
            </div>

            <div className="signup-input-wrapper signup-other-form">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name="email" value={email} onChange={handleChange} />
            </div>

            <div className="signup-input-wrapper signup-other-form">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name="password"  value={password} onChange={handleChange}/>
            </div>

          </div>

          <div className="signup-checkbox-wrapper">
            <div className="signup-checkbox-item"><input type="checkbox" /> <div></div>Keep me up to date on latest events.</div>
            <div className="signup-checkbox-item"><input type="checkbox" /> <div></div>I accept the  Terms of use  and  subscription</div>
          </div>

          <button className="signup-btn">{userLoading ? <ClipLoader size={12} />:<span>Create your account</span>}</button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage