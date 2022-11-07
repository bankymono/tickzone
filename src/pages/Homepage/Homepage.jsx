import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import EventList from '../../components/EventList/EventList'

import './Homepage.css'


export const Homepage = () => {
  return (
    <div className='homepage-container'>
        <Banner />
        <EventList />
    </div>
  )
}
