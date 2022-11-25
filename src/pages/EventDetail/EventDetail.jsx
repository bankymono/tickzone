import React from 'react';
import './EventDetail.css';
import {IoLocationSharp} from 'react-icons/io5'
import {AiFillCalendar} from 'react-icons/ai'
import {AiFillClockCircle} from 'react-icons/ai'
import logo_one from '../../assets/first_logo.png'
import logo_two from '../../assets/second_logo.png'
import logo_three from '../../assets/third_logo.png'
import placeholder_four from '../../assets/placeholder_four.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEventDetail } from '../../redux/actions/eventActions';

const EventDetail = ({history,match}) => {
    const dispatch = useDispatch();
    const eventDetail = useSelector(state => state.eventDetail)
    const { eventDetailData, eventDetailLoading, eventDetailError } = eventDetail

    useEffect(() => {

        if (match.params.id) {
            dispatch(getEventDetail(match.params.id))
        }
    },[match.params.id, dispatch])

    const handlePageRedirect =(e, id) => {
        history.push(`/payment-page/${id}`)
    }

    return (
    <div className='event-detail-container'>
        {
            eventDetailData?.imageUrl ? 
            <img src={JSON.parse(eventDetailData?.imageUrl)} alt="banner" className='evt-detail-banner-img' />
            :
            <img src={placeholder_four} alt="banner" className='evt-detail-banner-img' />
        }

        <div className='event-detail-bottom-item'>
            <div className='evt-detail-heading'>{eventDetailData?.eventName}</div>
            <div className='evt-detail-info-wrapper'>
                <div className='event-detail-left-item'>
                    {/* <div className='evt-detail-top-line'>Party  .  hangouts  .  Drinks</div> */}
                    <div className='evt-detail-second-top-line'>
                        <IoLocationSharp /><div>{eventDetailData?.eventLocation}</div>
                    </div>

                    <div className='evt-detail-third-top-line'>
                        <div className='evt-detail-third-date'><AiFillCalendar /><div>{eventDetailData?.eventDate ?(new Date(eventDetailData?.eventDate)).toDateString():"" }</div></div>
                        {/* <div className='evt-detail-third-time'><AiFillClockCircle /><div>12:00 PM - 3:00 AM</div></div> */}
                    </div>

                    <div className='evt-detail-fourth-line'>
                        <div className='evt-fth-line-heading'>Event Description</div>
                        <div>{eventDetailData?.eventDescription}
                        </div>

                        {/* <div className='evt-detail-sixth-line'>
                            <div>Event Organised in conjunction with:</div>
                            <div className='evt-detail-conjunction'>
                                <div className='evt-detail-sponsor'>
                                    <img src={logo_one} alt="logo" />
                                    <div>Ces Lights</div>
                                </div>
                                <div className='evt-detail-sponsor'>
                                    <img src={logo_two} alt="logo" />
                                    <div>Ces Lights</div>
                                </div>
                                <div className='evt-detail-sponsor'>
                                    <img src={logo_three} alt="logo" />
                                    <div>Ces Lights</div>
                                </div>

                            </div>
                        </div> */}
                    </div>

                </div>

                <div className='event-detail-right-item'>
                    <div className='event-detail-right-one'>Ticket Details</div>
                    <div className='event-detail-right-two'>Pineapple fiesta tickets</div>
                    <div className='event-detail-right-three'>30 tickets available of 200</div>
                    <div className='event-detail-right-price-selection-option'>
                        <div className='event-detail-right-price'>5,000.00</div>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                        {console.log(eventDetailData?.id, "heeee")}
                    <button onClick={(e) => handlePageRedirect(e, eventDetailData?.id)} className='event-detail-right-btn'>Buy tickets</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetail