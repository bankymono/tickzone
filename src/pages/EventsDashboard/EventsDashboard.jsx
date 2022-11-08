import React from 'react'
import EventsDashboardSideBar from '../../components/EventsDashboardSideBar/EventsDashboardSideBar'
import './EventsDashboard.css'
import placeholder_one from '../../assets/placeholder_one.png'

const EventsDashboard = () => {
  return (
    <div className='events-dashboard'>
            <EventsDashboardSideBar />
            <div className='evt-dashboard-center-content'>
                <div className='evt-dashboard-header'>My Events</div>
                <div className='events-list-db'>
                    <div className='evt-db-list-table'>
                        <div className='evt-db-list-heading'>
                            <div>Events</div>
                            <div>Sold</div>
                            <div>Status</div>
                        </div>

                        <div className='evt-db-list-body'>
                            <div className='evt-db-list-body-row'>
                                <div className='evt-db-list-first'>
                                    <img className='evt-db-row-img' src={placeholder_one} alt="placeholder" />
                                    <div className='evt-db-row-info'>
                                        <div>Event name</div>
                                        <div>Location</div>
                                        <div>14 oct 2002</div>
                                    </div>
                                </div>
                                <div className='evt-db-list-two'> <span className='evt-db-secnd-col-content'>1 / 100</span></div>
                                <div className='evt-db-list-three'>Ended</div>
                            </div>

                            <div className='evt-db-list-body-row'>
                                <div className='evt-db-list-first'>
                                    <img className='evt-db-row-img' src={placeholder_one} alt="placeholder" />
                                    <div className='evt-db-row-info'>
                                        <div>Event name</div>
                                        <div>Location</div>
                                        <div>14 oct 2002</div>
                                    </div>
                                </div>
                                <div className='evt-db-list-two'> <span className='evt-db-secnd-col-content'>1 / 100</span></div>
                                <div className='evt-db-list-three'>Ended</div>
                            </div>

                            <div className='evt-db-list-body-row'>
                                <div className='evt-db-list-first'>
                                    <img className='evt-db-row-img' src={placeholder_one} alt="placeholder" />
                                    <div className='evt-db-row-info'>
                                        <div>Event name</div>
                                        <div>Location</div>
                                        <div>14 oct 2002</div>
                                    </div>
                                </div>
                                <div className='evt-db-list-two'> <span className='evt-db-secnd-col-content'>1 / 100</span></div>
                                <div className='evt-db-list-three'>Ended</div>
                            </div>
                        </div>
                    </div>
                    <button className='evt-list-create-btn'>Create Event</button>
                </div>
            </div>
    </div>
  )
}

export default EventsDashboard