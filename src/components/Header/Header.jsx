import React, { useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import './Header.css'
import hamburger from '../../assets/hamburgermenu.png'
import closemenu from '../../assets/closemenu.png'

const Header = () => {

  const [toggleBtn, setToggleBtn] = useState(true)
  

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

            <div className='header-button-container'>
                <NavLink to="/login" className='header-login-btn'>Login</NavLink>
                <NavLink to="/signup" className='header-signup-btn'>Signup</NavLink>
            </div>
        </div>

    </div>
  )
}

export default Header