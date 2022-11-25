import React, { useEffect } from 'react';
import './PublishPage.css'; 
import {BsChevronLeft} from 'react-icons/bs'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo';
import placeholder_four from '../../assets/placeholder_four.png'
import { useDispatch, useSelector } from 'react-redux';
import { getEventDetail, publishEvent } from '../../redux/actions/eventActions';
import { Link } from 'react-router-dom';

const PublishPage = ({ history, match }) => {
    const dispatch = useDispatch();
    const eventDetail = useSelector(state => state.eventDetail)
    const { eventDetailData, eventDetailLoading, eventDetailError } = eventDetail

    const globalEventId = useSelector(state => state.globalEventId)
    const {theEventId} = globalEventId;

    
    useEffect(() => {

        if (theEventId) {
            dispatch(getEventDetail(theEventId))

        }},[theEventId, dispatch])

    const handleEventPublish = async () => {
        if(theEventId)
        await dispatch(publishEvent(theEventId))
        else
        console.log("Id issue")

        history.push("/events-dashboard")
    }
        
  return (
    <div className='events-dashboard'>
            <Link to="/events-dashboard" className='link-to-crt-evt'>
                <button className='db-nav-back-btn'><BsChevronLeft /><span>My Events</span></button>
                <SideBarTwo />
            </Link>

        <div className='publish-container'>
            <div className='publish-card'>
                {
                    eventDetailData.imageUrl ?
                    <img className='publish-img' src={JSON.parse(eventDetailData.imageUrl)} alt="placeholder" />                    
                    :
                    
                <img className='publish-img' src={placeholder_four} alt="placeholder" />
                }
                {/* {console.log(eventDetailData)} */}
                {
                    eventDetailData &&
                    (
                        <div className='publish-right-side'>
                        <div>{eventDetailData.eventName}</div>
                        <div>{eventDetailData.eventDate && (new Date(eventDetailData.eventDate)).toDateString()}</div>
                        {/* {console.log(eventDetailData)} */}
                        <div>{eventDetailData.eventLocation}</div>
    
                          { eventDetailData.eventName && <button disabled={eventDetailData.publish} className={eventDetailData.publish ? 'disabled':'' } onClick={handleEventPublish}>{!eventDetailData?.publish ? "Publish":"Published" }</button>}
                        </div>
                    )

                }

            </div>
        </div>
    </div>
  )
}

export default PublishPage