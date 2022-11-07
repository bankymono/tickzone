import React from 'react'
import './EventList.css'
import img_item from '../../assets/eventitem.png'

const EventList = () => {
  return (
    <div className='eventlist-container'>
        <div className='eventlist-heading'>Upcoming Events</div>
        <div className='eventlist-grid'>
            <div className='eventlist-item'>
                <img className='eventlist-item-img' src={img_item} alt="eventitem" />
                <div className='eventlist-item-btm'>
                    <div className='eventlist-item-btm-first'>
                      <div className='eventlist-item-date'>
                        <span>Nov</span>
                        <span>20</span>
                      </div>

                      <div className='eventlist-item-desc'>
                        <div>Pineapple fiesta</div>
                        <div>Landmark Beach, VI, Lagos</div>
                      </div>
                    </div>

                    <div className='eventlist-item-ticketandbtn'>
                      <button>Buy Tickets</button>
                      <div>N5,000.00</div>
                    </div>
                </div>
            </div>

            <div className='eventlist-item'>
                <img className='eventlist-item-img' src={img_item} alt="eventitem" />
                <div className='eventlist-item-btm'>
                    <div className='eventlist-item-btm-first'>
                      <div className='eventlist-item-date'>
                        <span>Nov</span>
                        <span>20</span>
                      </div>

                      <div className='eventlist-item-desc'>
                        <div>Pineapple fiesta</div>
                        <div>Landmark Beach, VI, Lagos</div>
                      </div>
                    </div>

                    <div className='eventlist-item-ticketandbtn'>
                      <button>Buy Tickets</button>
                      <div>N5,000.00</div>
                    </div>
                </div>
            </div>

            <div className='eventlist-item'>
                <img className='eventlist-item-img' src={img_item} alt="eventitem" />
                <div className='eventlist-item-btm'>
                    <div className='eventlist-item-btm-first'>
                      <div className='eventlist-item-date'>
                        <span>Nov</span>
                        <span>20</span>
                      </div>

                      <div className='eventlist-item-desc'>
                        <div>Pineapple fiesta</div>
                        <div>Landmark Beach, VI, Lagos</div>
                      </div>
                    </div>

                    <div className='eventlist-item-ticketandbtn'>
                      <button>Buy Tickets</button>
                      <div>N5,000.00</div>
                    </div>
                </div>
            </div>

            <div className='eventlist-item'>
                <img className='eventlist-item-img' src={img_item} alt="eventitem" />
                <div className='eventlist-item-btm'>
                    <div className='eventlist-item-btm-first'>
                      <div className='eventlist-item-date'>
                        <span>Nov</span>
                        <span>20</span>
                      </div>

                      <div className='eventlist-item-desc'>
                        <div>Pineapple fiesta</div>
                        <div>Landmark Beach, VI, Lagos</div>
                      </div>
                    </div>

                    <div className='eventlist-item-ticketandbtn'>
                      <button>Buy Tickets</button>
                      <div>N5,000.00</div>
                    </div>
                </div>
            </div>

            <div className='eventlist-item'>
                <img className='eventlist-item-img' src={img_item} alt="eventitem" />
                <div className='eventlist-item-btm'>
                    <div className='eventlist-item-btm-first'>
                      <div className='eventlist-item-date'>
                        <span>Nov</span>
                        <span>20</span>
                      </div>

                      <div className='eventlist-item-desc'>
                        <div>Pineapple fiesta</div>
                        <div>Landmark Beach, VI, Lagos</div>
                      </div>
                    </div>

                    <div className='eventlist-item-ticketandbtn'>
                      <button>Buy Tickets</button>
                      <div>N5,000.00</div>
                    </div>
                </div>
            </div>
            <div className='eventlist-item'>
                <img className='eventlist-item-img' src={img_item} alt="eventitem" />
                <div className='eventlist-item-btm'>
                    <div className='eventlist-item-btm-first'>
                      <div className='eventlist-item-date'>
                        <span>Nov</span>
                        <span>20</span>
                      </div>

                      <div className='eventlist-item-desc'>
                        <div>Pineapple fiesta</div>
                        <div>Landmark Beach, VI, Lagos</div>
                      </div>
                    </div>

                    <div className='eventlist-item-ticketandbtn'>
                      <button>Buy Tickets</button>
                      <div>N5,000.00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventList