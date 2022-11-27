import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import Swal from 'sweetalert2';
import "./LoginPage.css";
import { ClipLoader } from 'react-spinners'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email:Yup.string().email('Invalid email format').required('required'),
  password:Yup.string().required('required'),
})

const LoginPage = ({history}) => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);



  const {loading, error, userInfo} = userLogin;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    onSubmit: async values => {

        await   dispatch(loginUser(values.email,values.password))
        
    },
    validationSchema,
})


  useEffect(()=>{
    if(userInfo){
        history.push('/events-dashboard')
    } else if(error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: error === "BAD REQUEST"? "Invalid username or password": error,
        showConfirmButton: false,
        timer: 2000
      }).then(()=>{

        setEmail('')
        setPassword('')
          history.push('/login')
      })

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
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <div className="login-top-inputs">
             </div>


            <div className="login-input-wrapper login-other-form">
                <label htmlFor="email">Email</label>
                <input
                className={formik.touched.email && formik.errors.email ?"signup-input-error":""}
                type="email" name="email" id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <div className="signup-error-msg">{formik.errors.email}</div>
            </div>

            <div className="login-input-wrapper login-other-form">
                <label htmlFor="password">Password</label>
                <input
                className={formik.touched.password && formik.errors.password ?"signup-input-error":""} 
                type="password" name="password" id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <div className="signup-error-msg">{formik.errors.password}</div>
            </div>

          </div>

          <div className="login-checkbox-wrapper">
            <div className="login-checkbox-item"><input type="checkbox" /> <div></div>Keep me up to date on latest events.</div>
            <div className="login-checkbox-item"><input type="checkbox" /> <div></div>I accept the  Terms of use  and  subscription</div>
          </div>
          <button type="submit" className="login-btn">{loading ? <ClipLoader size={12} />: <span>Login</span>}</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage