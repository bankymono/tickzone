import React from 'react'
import './EventsDashboardSideBar.css'

const EventsDashboardSideBar = () => {
  return (
    <div className='evt-dashboard-sidebar'>
        <button className='evt-sidebar-btn evt-sidebar-btn-active'>Events</button>
        {/* <button className='evt-sidebar-btn'>Orders</button> */}
    </div>
  )
}

export default EventsDashboardSideBar