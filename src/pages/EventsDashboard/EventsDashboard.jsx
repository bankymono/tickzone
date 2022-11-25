import React, { useEffect } from 'react'
import EventsDashboardSideBar from '../../components/EventsDashboardSideBar/EventsDashboardSideBar'
import './EventsDashboard.css'
import placeholder_four from '../../assets/placeholder_four.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUserEvents } from '../../redux/actions/userActions'
import { Link } from 'react-router-dom'
import { clearUserEvents, deleteEvent, storeEventId } from '../../redux/actions/eventActions'
import Swal from 'sweetalert2';
import { useState } from 'react'

const EventsDashboard = ({history}) => {
    const dispatch = useDispatch();

    const userEvents = useSelector(state => state.userEvents)
     const {userEventsList, userEventsLoading, userEventsError} = userEvents

     const deletedEvent = useSelector(state => state.deletedEvent)
     const {deletedEventData, deletedEventLoading, deletedEventError} = deletedEvent


    useEffect(()=>{
        dispatch(getUserEvents());
    },[dispatch])



    useEffect(()=>{
        if(deletedEventData) {

            Swal.fire({
                icon: 'success',
                title: 'Event Deleted Successfully',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                history.go(0)
            })  
        }
  },[dispatch, deletedEvent,history,deletedEventLoading, deletedEventData])

    const handleRedirectToPage = (id) =>{
        dispatch(storeEventId(id));
        history.push(`/create-event/${id}`)
    }

    const handleDelete = (id,e) => {
        e.stopPropagation();
        dispatch(deleteEvent(id))

    }

  return (
    <div className='events-dashboard'>
            <EventsDashboardSideBar />
            <div className='evt-dashboard-center-content'>
                <div className='evt-dashboard-header'>My Events</div>
                <div className='events-list-db'>
                    <div className='evt-db-list-table'>
                        <div className='evt-db-list-heading'>
                            <div>Events</div>
                            <div>Status</div>
                        </div>

                        
                        <div className='evt-db-list-body'>
                            {
                                userEventsList.length && userEventsList.length !== 0 ?
                                userEventsList.map((userEvent,index) => (
                                    <div onClick={()=> handleRedirectToPage(userEvent.id)} key={index} to={`/create-event/${userEvent.id}`} className="event-item-link">
                                        <div  className='evt-db-list-body-row'>

                                    <div className='evt-db-list-first'>
                                        {
                                            userEvent.imageUrl ? 
                                            <img className='evt-db-row-img' src={JSON.parse(userEvent.imageUrl)} alt="placeholder" />                                          
                                            :
                                            <img className='evt-db-row-img' src={placeholder_four} alt="placeholder" />
                                        }

                                        <div className='evt-db-row-info'>
                                            <div>{userEvent.eventName}</div>
                                            <div>{userEvent.eventLocation}</div>
                                            <div>{(new Date(userEvent.eventDate)).toDateString()}</div>
                                        </div>
                                    </div>
                                    <div className='evt-db-list-three'>{userEvent.eventDate < Date() ? "Active" : "Ended"} </div>
                                    <button  onClick={(e) => handleDelete(userEvent.id, e)} className='evt-db-list-two'> <span className='evt-db-secnd-col-content'>Delete</span></button>

                                </div>
                                </div>
                                ))
                                :<div></div>
                            }



                           
                        </div>
                    </div>
                    <Link to="/create-event" className='evt-list-create-btn'>Create Event</Link>
                </div>
            </div>
    </div>
  )
}

export default EventsDashboard