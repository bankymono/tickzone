import React from 'react';
import evt_card_img from '../../assets/card_img.png';
import './EventListCard.css';


const EventListCard = () => {
  return (
    <div className='evt-list-card'>
        <img src={evt_card_img} className="evt-card-item-img" alt="evt_card_img" />

        <div className='evt-card-item-img-details'>
            <div className='evt-card-item-details-top'>
                <div className='evt-card-date-and-time'>
                    <div className='evt-card-date-text'>NOV</div>
                    <div className='evt-card-date-no'>20</div>
                    <div className='evt-card-date-time'>12PM</div>
                </div>

                <div className='evt-card-detail-info'>
                    <div className='evt-card-detail-info-first'>Pineapple fiesta</div>
                    <div className='evt-card-detail-info-second'>Landmark Beach, VI, Lagos</div>
                </div>
            </div>

            <div className='evt-card-item-details-bottom'>
                <button className='evt-card-item-btn'>Buy tickets</button>
                <div className='evt-card-item-price'>N5,000.00</div>
            </div>
        </div>
    </div>
  )
}

export default EventListCard