import React from 'react';
import './CreateTicket.css';
import {BsChevronLeft} from 'react-icons/bs'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo';
import create_ticket from '../../assets/create_ticket_icon.png'

const CreateTicket = () => {
  return (
    <div className='events-dashboard'>
        <div>
            <button className='db-nav-back-btn'><BsChevronLeft /><span>My Events</span></button>
            <SideBarTwo />
        </div>

        <div className='create-ticket-form-container'>
            <div className='create-ticket-info'>
                <img src={create_ticket} alt="ticket creation" className='create-ticket-icon'/>
                <div>Create Tickets</div>
                <div>Let’s create tickets for your event</div>
            </div>
            <form action="" className='create-ticket-form'>
                <div>Ticket name</div>
                <input type="text" placeholder='Reguar' />

                <div>Available stock</div>
                <input type="number"  />

                <div>Ticket price</div>
                <input type="text" placeholder='' />
                <div>Ticket details</div>
                <textarea name="" id="" cols="20" rows="10"></textarea>
                <button>Save</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTicket