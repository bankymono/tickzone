import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import "./LoginPage.css";
import { ClipLoader } from 'react-spinners'


const LoginPage = ({history}) => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);

  const {loading, error, userInfo} = userLogin;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(()=>{
    if(userInfo){
        history.push('/events-dashboard')
    } else if(error) {
      setEmail('');
      setPassword('');
      history.push("/login")
    }
},[ userInfo,error,history])

const handleSubmit = (e) => {
  e.preventDefault();
  
  dispatch(loginUser(email,password))
              
}

const handleChange = (e) => {
switch(e.target.name){

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
    <div className='login-page-bg'>
      <div className="login-left-side">
        <div className="login-textbox">
          Hi there, 
          Hey there, welcome back
        </div>
      </div>

      <div className="login-right-side">
        <div className="login-heading">Sign in for Eventic</div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <div className="login-top-inputs">
             </div>


            <div className="login-input-wrapper login-other-form">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id='email' value={email} onChange={handleChange} />
            </div>

            <div className="login-input-wrapper login-other-form">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id='password' value={password} onChange={handleChange} />
            </div>

          </div>

          <div className="login-checkbox-wrapper">
            <div className="login-checkbox-item"><input type="checkbox" /> <div></div>Keep me up to date on latest events.</div>
            <div className="login-checkbox-item"><input type="checkbox" /> <div></div>I accept the  Terms of use  and  subscription</div>
          </div>

          <button className="login-btn">{loading ? <ClipLoader size={12} />: <span>Login</span>}</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage