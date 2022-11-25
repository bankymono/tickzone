import React from 'react'
import { Link } from 'react-router-dom'
import './SideBarTwo.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const SideBarTwo = () => {
  const location = useLocation();
  return (
    <div className='sidebartwo-container'>
        <Link to="/create-event" className={location.pathname !== "/create-event"?'sidebartwo-btn': 'sidebartwo-btn sidebartwo-btn-active'}>Event info</Link>
        <Link to="/upload-image" className={location.pathname !== "/upload-image"?'sidebartwo-btn': 'sidebartwo-btn sidebartwo-btn-active'}>Upload Event image</Link>
        <Link to="/event-ticket" className={location.pathname !== "/event-ticket"?'sidebartwo-btn': 'sidebartwo-btn sidebartwo-btn-active'}>Tickets</Link>
        <Link to="/publish" className={location.pathname !== "/publish"?'sidebartwo-btn': 'sidebartwo-btn sidebartwo-btn-active'}>Publish</Link>
        <Link to="/events-dashboard" className={location.pathname !== "/events-dashboard"?'sidebartwo-btn': 'sidebartwo-btn sidebartwo-btn-active'}>Dashboard</Link>
    </div>
  )
}

export default SideBarTwo