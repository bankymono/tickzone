import React from 'react';
import './PublishPage.css'; 
import {BsChevronLeft} from 'react-icons/bs'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo';
import placeholder_three from '../../assets/placeholder_three.png'

const PublishPage = () => {
  return (
    <div className='events-dashboard'>
        <div>
            <button className='db-nav-back-btn'><BsChevronLeft /><span>My Events</span></button>
            <SideBarTwo />
        </div>

        <div className='publish-container'>
            <div className='publish-card'>
                <img className='publish-img' src={placeholder_three} alt="placeholder" />
                <div className='publish-right-side'>
                    <div>Event Name</div>
                    <div>Event Date</div>
                    <div>Event Time</div>
                    <div>Event Location</div>

                    <button>Publish</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PublishPage