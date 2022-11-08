import React from 'react'
import './TicketList.css'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo'

const TicketList = () => {
  return (
    <div className='events-dashboard'>
            <SideBarTwo />
            <div className='ticketlist-center-content'>

                <div className='events-list-db'>
                    <div className='ticketlist-table'>
                        <div className='ticketlist-heading'>
                            <div>Ticket name</div>
                            <div>Ticket price</div>
                            <div>Ticket quantity </div>
                        </div>

                        <div className='ticketlist-body'>
                            <div className='ticketlist-body-row'>
                                <div className='ticketlist-first'>
                                    Regular
                                </div>
                                <div className='ticketlist-three'>Free</div>
                                <div className='ticketlist-two'> <span className='evt-db-secnd-col-content'>1 / 100</span></div>
  
                            </div>

                            <div className='ticketlist-body-row'>
                                <div className='ticketlist-first'>
                                    Regular
                                </div>
                                <div className='ticketlist-three'>Free</div>
                                <div className='ticketlist-two'> <span className='evt-db-secnd-col-content'>1 / 100</span></div>
                                
                            </div>

                            <div className='ticketlist-body-row'>
                                <div className='ticketlist-first'>
                                    Regular
                                </div>
                                <div className='ticketlist-three'>Free</div>
                                <div className='ticketlist-two'> <span className='evt-db-secnd-col-content'>1 / 100</span></div>
                                
                            </div>
                        </div>
                    </div>
                    <button className='evt-list-create-btn'>Add Tickets</button>
                </div>
            </div>
    </div>
  )
}

export default TicketList