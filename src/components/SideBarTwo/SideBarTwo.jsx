import React from 'react'
import './SideBarTwo.css'

const SideBarTwo = () => {
  return (
    <div className='sidebartwo-container'>
        <button className='sidebartwo-btn sidebartwo-btn-active'>Event info</button>
        <button className='sidebartwo-btn'>Upload Event image</button>
        <button className='sidebartwo-btn'>Tickets</button>
        <button className='sidebartwo-btn'>Publish</button>
        <button className='sidebartwo-btn'>Dashboard</button>
    </div>
  )
}

export default SideBarTwo