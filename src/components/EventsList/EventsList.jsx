import React from 'react';
import './EventsList.css';
import EventListCard from '../EventListCard/EventListCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPublishedEvents } from '../../redux/actions/eventActions';

const EventsList = () => {
  const dispatch = useDispatch();

  const publishedEvents = useSelector(state => state.publishedEvents)
  const {publishedEventsList, publishedEventsLoading, publishedEventsError} = publishedEvents

  useEffect(()=>{
    dispatch(getPublishedEvents());
},[dispatch])

  return (
    <div className='events-list-container'>
        <div className='evt-list-heading'>Upcoming Events</div>
        <div className='evt-list-grid'>
          {
            publishedEventsList?.length && publishedEventsList.length !== 0 ?
            publishedEventsList.map(event => (
                <EventListCard  key={event.id} event={event} />
            ))
            :
            <div></div>
          }
        </div>
    </div>
  )
}

export default EventsList