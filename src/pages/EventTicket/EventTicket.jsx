import React from 'react'
import './EventTicket.css'
import {BsChevronLeft} from 'react-icons/bs'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo'

const EventTicket = () => {
  return (
    <div className='events-dashboard'>
        <div>
            <button className='db-nav-back-btn'><BsChevronLeft /><span>My Events</span></button>
            <SideBarTwo />
        </div>
    </div>
  )
}

export default EventTicket