import React, { useEffect } from 'react'
import './CreateEvent.css'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo'
import { BsChevronLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { createEvent, getEventDetail } from '../../redux/actions/eventActions'

const CreateEvent = ({ history, match }) => {
    const dispatch = useDispatch();
    const eventCreated = useSelector(state => state.eventCreated);
    const { eventSuccess, eventLoading, eventError } = eventCreated;

    const eventDetail = useSelector(state => state.eventDetail)
    const { eventDetailData, eventDetailLoading, eventDetailError } = eventDetail

    const [eventName, setEventName] = useState(eventDetailData ? eventDetailData.eventName : "")
    const [eventDate, setEventDate] = useState(eventDetailData ? eventDetailData.eventDate : "")
    const [eventLocation, setEventLocation] = useState(eventDetailData ? eventDetailData.eventEventLocation : "")
    const [eventDescription, setEventDescription] = useState(eventDetailData ? eventDetailData.eventDescription : "")



    useEffect(() => {

        if (match.params.id) {
            dispatch(getEventDetail(match.params.id))
            console.log("U run")
        }

        if (eventSuccess) {
            Swal.fire({
                icon: 'success',
                title: 'Event Created Successfully',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                history.push('/events-dashboard')
            })
        } else if (eventError) {
            Swal.fire({
                icon: 'error',
                title: eventError,
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                setEventName('')
                setEventDate('')
                setEventLocation('')
                setEventDescription('')

                history.push('/create-event')
            })

        }
    }, [
        eventSuccess,
        history,
        eventError,
        match.params.id,
        dispatch
    ])

    useEffect(() => {
        if (!match.params.id) {
            setEventName("")
            setEventDescription("")
            setEventLocation("")
            setEventDate("")
        } else {
            setEventName(eventDetailData.eventName)
            setEventDate(eventDetailData.eventDate)
            setEventDescription(eventDetailData.eventDescription)
            setEventLocation(eventDetailData.eventLocation)
        }

    }, [eventDetailData, match.params.id])

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            eventName,
            eventDate: new Date(eventDate),
            eventLocation,
            eventDescription,
        }

        console.log("event date", data)

        dispatch(createEvent(data))
        setEventName("")
        setEventDescription("")
        setEventLocation("")
        setEventDate("")
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'eventName':
                setEventName(e.target.value)
                break;
            case 'eventDate':
                setEventDate(e.target.value)
                break;
            case 'eventLocation':
                setEventLocation(e.target.value)
                break;
            case 'eventDescription':
                setEventDescription(e.target.value)
                break;
            default:
                return null;
        }
    }

    return (
        <div className='events-dashboard'>
            <Link to="/events-dashboard" className='link-to-crt-evt'>
                <button className='db-nav-back-btn'><BsChevronLeft /><span>My Events</span></button>
                <SideBarTwo />
            </Link>

            <div className='create-event-form-container'>
                <form className='create-event-form' onSubmit={handleSubmit} action="">
                    <div>Hi, Brand Name</div>
                    <div>Create your event.</div>

                    <div>Event Name</div>
                    <div>Please enter your event name, do ensure it is related to the event type</div>
                    <input name="eventName" type="text" placeholder='Event name' value={eventName} onChange={handleChange} />


                    <div>Event Time</div>
                    <div>Please set Event Time and date</div>
                    <div className='create-form-date-time-container'>
                        <input type="date" name="eventDate" value={eventDate} onChange={handleChange} />
                        {/* <input type="time" /> */}
                    </div>


                    <div>Event Location</div>
                    <input type="text" placeholder='Enter Event Address' name="eventLocation" value={eventLocation} onChange={handleChange} />

                    <div>Event Description</div>
                    <div>Add descriptive details about your event</div>
                    <textarea rows="5" className='create-form-desc' type="text" placeholder='' name="eventDescription" value={eventDescription} onChange={handleChange} />

                    <div>
                        <button>{eventLoading ? <ClipLoader size={12} /> : <span>Save</span>}</button>
                    </div>

                </form>
            </div>


        </div>
    )
}

export default CreateEvent