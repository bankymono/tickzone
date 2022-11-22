import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Header.css'
import hamburger from '../../assets/hamburgermenu.png'
import closemenu from '../../assets/closemenu.png'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userActions'
import { useSelector } from 'react-redux'

const Header = () => {
  const [status, setStatus] =  useState(false)
  const history =  useHistory()  

  const [toggleBtn, setToggleBtn] = useState(true)
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin);

  useEffect(() =>{
    if(userLogin.userInfo || userLogin.userInfo !== null || userLogin === true) {
      setStatus(true)
    }else {
      setStatus(false)
    }
  },[userLogin, userLogin.userInfo,status])

  const logUserOut = () => {

      dispatch(logout())
      history.push('/login');
  }
  

  return (
    <div className='header-container'>
        <div className='header-wrapper'>
          <div className='wrap-brand-and-nav-el'>
          <NavLink className='logo' to="/">Tickzone</NavLink> 
            <img onClick={() => setToggleBtn(!toggleBtn)} src={hamburger} className={toggleBtn === true ? `hamburger-img`: 'hamburger-img show'} alt="hamburger" />
            <img onClick={() => setToggleBtn(!toggleBtn)} src={closemenu} className={toggleBtn === false? "close-menu": 'close-menu show'} alt="close" />
            <div className={toggleBtn === false ?'header-center-links': 'header-center-links show'}>
                <a href="http://#">Create events</a>
                <a href="http://#">Tickets</a>
                <a href="http://#">Discover events</a>
                <a href="http://#">About</a>
                <a href="http://#">Contact</a>
            </div>

          </div>
          {
            
            status === false
            ?
            <div className='header-button-container'>
                <NavLink to="/login" className='header-login-btn'>Login</NavLink>
                <NavLink to="/signup" className='header-signup-btn'>Signup</NavLink>
            </div>
             :

             <div className='header-button-container'>
             <button onClick={logUserOut} className='header-login-btn'>Logout</button>
            </div>
          }


        </div>

    </div>
  )
}

export default Header