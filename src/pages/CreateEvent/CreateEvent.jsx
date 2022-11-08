import React from 'react'
import './CreateEvent.css'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo'
import {BsChevronLeft} from 'react-icons/bs'

const CreateEvent = () => {
  return (
    <div className='events-dashboard'>
        <div>
            <button className='db-nav-back-btn'><BsChevronLeft /><span>My Events</span></button>
            <SideBarTwo />
        </div>

        <div className='create-event-form-container'>
            <form className='create-event-form'>
                <div>Hi, Brand Name</div>
                <div>Create your event.</div>
                
                <div>Event Name</div>
                <div>Please enter your event name, do ensure it is related to the event type</div>
                <input type="text" placeholder='Event name' />


                <div>Event Time</div>
                <div>Please set Event Time and date</div>
                <div className='create-form-date-time-container'>
                    <input type="date" />
                    <input type="time" />
                </div>


                <div>Event Location</div>
                <input type="text" placeholder='Enter Event Address' />

                <div>Event Description</div>
                <div>Add descriptive details about your event</div>
                <textarea rows="5" className='create-form-desc' type="text" placeholder='' />

                <div>
                    <button>Save</button>
                </div>

            </form>  
        </div>


    </div>
  )
}

export default CreateEvent