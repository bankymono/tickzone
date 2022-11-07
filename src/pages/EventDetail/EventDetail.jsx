import React from 'react';
import './EventDetail.css';
import {IoLocationSharp} from 'react-icons/io5'
import {AiFillCalendar} from 'react-icons/ai'
import {AiFillClockCircle} from 'react-icons/ai'
import logo_one from '../../assets/first_logo.png'
import logo_two from '../../assets/second_logo.png'
import logo_three from '../../assets/third_logo.png'
import evt_detail_banner from '../../assets/event-detail-banner.png'

const EventDetail = () => {
  return (
    <div className='event-detail-container'>
        <img src={evt_detail_banner} alt="banner" className='evt-detail-banner-img' />
        <div className='event-detail-bottom-item'>
            <div className='evt-detail-heading'>PINEAPPLE FIESTA</div>
            <div className='evt-detail-info-wrapper'>
                <div className='event-detail-left-item'>
                    <div className='evt-detail-top-line'>Party  .  hangouts  .  Drinks</div>
                    <div className='evt-detail-second-top-line'>
                        <IoLocationSharp /><div>Landmark beach, VI, Lagos</div>
                    </div>

                    <div className='evt-detail-third-top-line'>
                        <div className='evt-detail-third-date'><AiFillCalendar /><div>20 November</div></div>
                        <div className='evt-detail-third-time'><AiFillClockCircle /><div>12:00 PM - 3:00 AM</div></div>
                    </div>

                    <div className='evt-detail-fourth-line'>
                        <div className='evt-fth-line-heading'>Event Description</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam eu turpis molestie, dictum est a, mattis tellus. 
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
                            ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                             per inceptos himenaeos. Praesent auctor purus luctus enim egestas, 
                             ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, 
                             eu tempor urna. Curabitur vel bibendum lorem. 
                            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </div>

                        <div className='evt-detail-sixth-line'>
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
                        </div>
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

                    <button className='event-detail-right-btn'>Buy tickets</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetail