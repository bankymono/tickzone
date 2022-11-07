import React from 'react';
import './EventsList.css';
import EventListCard from '../EventListCard/EventListCard';

const EventsList = () => {
  return (
    <div className='events-list-container'>
        <div className='evt-list-heading'>Upcoming Events</div>

        <div className='evt-list-grid'>

            <EventListCard />
            <EventListCard />
            <EventListCard />
            <EventListCard />
            <EventListCard />
            <EventListCard />
        </div>
    </div>
  )
}

export default EventsList