import React, { useEffect } from 'react'
import './CreateEvent.css'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo'
import { BsChevronLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { createEvent, getEventDetail, updateEvent } from '../../redux/actions/eventActions'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import parse from "date-fns/parse"

const validationSchema = Yup.object({
    eventName:Yup.string().required("Field is required"),
    eventDate:Yup.date().transform(function(value,originalValue){
        if(this.isType(value)){
            return value
        }
        const result = parse(originalValue, "dd.MM.yyyy", new Date())
        return result

    })
    // .required("Date is required")
    .typeError("please enter a valid date")
    .required("Date is required")
    .min(new Date(), "date is too early"),
    eventLocation:Yup.string().required("Location isrequired"),
    eventDescription:Yup.string().required('Description is required')
  })

const CreateEvent = ({ history, match }) => {
    const dispatch = useDispatch();
    const eventCreated = useSelector(state => state.eventCreated);
    const { eventSuccess, eventLoading, eventError } = eventCreated;

    const eventUpdated = useSelector(state => state.eventUpdated);
    const { upeventSuccess, upeventLoading, upeventError } = eventUpdated;

    const eventDetail = useSelector(state => state.eventDetail)
    const { eventDetailData, eventDetailLoading, eventDetailError } = eventDetail

    const [eventName, setEventName] = useState(eventDetailData ? eventDetailData.eventName : "")
    const [eventDate, setEventDate] = useState(eventDetailData ? eventDetailData.eventDate : "")
    const [eventLocation, setEventLocation] = useState(eventDetailData ? eventDetailData.eventEventLocation : "")
    const [eventDescription, setEventDescription] = useState(eventDetailData ? eventDetailData.eventDescription : "")


    const formik = useFormik({
        initialValues:{
            eventName,
            eventDate,
            eventLocation,
            eventDescription,
            
        },
        onSubmit: async values => {
            let data ;
            if(eventDetailData) {
                data = {
                    ...eventDetailData,
                    eventName:values.eventName,
                    eventDate: new Date(values.eventDate),
                    eventLocation:values.eventLocation,
                    eventDescription:values.eventDescription,
                } 
            }else{
                data ={
                        eventName,
                        eventDate: new Date(values.eventDate),
                        eventLocation:values.eventLocation,
                        eventDescription:values.eventDescription,
                    }
                
            }
    
    
    
            if(match.params.id) {
                dispatch(updateEvent(match.params.id, {id:match.params.id,...data}))
            }else{
                dispatch(createEvent(data))
            }
        //   const data = {
        //     eventName: values.eventName,
        //     eventDate: values.eventDate,
        //     eventLocation: values.eventLocation,
        //     eventDescription:values.eventDescription,
        //   }
    
            // await dispatch(createEvent(data))
            
        },
    
        validationSchema,
    })



    useEffect(() => {

        if (match.params.id) {
            dispatch(getEventDetail(match.params.id))

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
        dispatch,
        upeventSuccess
    ])


    useEffect(() => {

        if (upeventSuccess) {
            Swal.fire({
                icon: 'success',
                title: 'Event Updated Successfully',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                history.push('/events-dashboard')
            })
        } else if (upeventError) {
            Swal.fire({
                icon: 'error',
                title: upeventError,
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
        history,
        upeventSuccess,
        upeventError
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
        let data ;
        if(eventDetailData) {
            data = {
                ...eventDetailData,
                eventName,
                eventDate: new Date(eventDate),
                eventLocation,
                eventDescription,
            } 
        }else{
            data ={
                    eventName,
                    eventDate: new Date(eventDate),
                    eventLocation,
                    eventDescription,
                }
            
        }



        if(match.params.id) {
            dispatch(updateEvent(match.params.id, {id:match.params.id,...data}))
        }else{
            dispatch(createEvent(data))
        }


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
                <form className='create-event-form' onSubmit={formik.handleSubmit} action="">
                    <div>Hi, Brand Name</div>
                    <div>Create your event.</div>

                    <div>Event Name</div>
                    <div className="signup-error-msg">{formik.errors.eventName}</div>
                    <input className={formik.touched.eventName && formik.errors.eventName ?"signup-input-error":""} name="eventName" type="text" placeholder='Event name' value={formik.values.eventName} onChange={formik.handleChange} onBlur={formik.handleBlur} />


                    <div>Event Date</div>
                    <div className="signup-error-msg">{formik.errors.eventDate}</div>
                    <div className='create-form-date-time-container'>
                        <input className={formik.touched.eventDate && formik.errors.eventDate ?"signup-input-error":""} type="date" name="eventDate" value={formik.values.eventDate} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {/* <input type="time" /> */}
                    </div>


                    <div>Event Location</div>
                    <div className="signup-error-msg">{formik.errors.eventLocation}</div>
                    <input className={formik.touched.eventLocation && formik.errors.eventLocation ?"signup-input-error":""} type="text" placeholder='Enter Event Address' name="eventLocation" value={formik.values.eventLocation} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    

                    <div>Event Description</div>
                    <div className="signup-error-msg">{formik.errors.eventDescription}</div>
                    <textarea type="textarea"  className={formik.touched.eventDescription && formik.errors.eventDescription ?"create-form-desc signup-input-error":"create-form-desc"} rows="5"   placeholder='' name="eventDescription" value={formik.values.eventDescription} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                    <div>
                        {
                            match.params.id ? 
                            <button type='submit'>{eventLoading ? <ClipLoader size={12} /> : <span>Update</span>}</button>                            
                            :
                            <button type='submit'>{eventLoading ? <ClipLoader size={12} /> : <span>Save</span>}</button>
                        }

                    </div>

                </form>
            </div>


        </div>
    )
}

export default CreateEvent