import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import placeholder_four from '../../assets/placeholder_four.png';
import './EventListCard.css';


const EventListCard = ({event}) => {
    const history = useHistory()
    
    const handlePageRedirect =(e, id) => {
        history.push(`/event-detail/${id}`)
    }
  return (
    <div className='evt-list-card'>
        {
            event?.imageUrl?
            <img src={JSON.parse(event.imageUrl)} className="evt-card-item-img" alt="evt_card_img" />
            :
            <img src={placeholder_four} className="evt-card-item-img" alt="evt_card_img" />
        }
        <div className='evt-card-item-img-details'>
            <div className='evt-card-item-details-top'>
                <div className='evt-card-date-and-time'>
                    <div className='evt-card-date-text'>{ event?.eventDate ? (new Date(event?.eventDate)).toDateString(): "no date"}</div>
                    {/* <div className='evt-card-date-no'>20</div> */}

                </div>

                <div className='evt-card-detail-info'>
                    <div className='evt-card-detail-info-first'>{event?.eventName|| "Random Event"}</div>
                    <div className='evt-card-detail-info-second'>{event?.eventLocation || "Random Location"}</div>
                </div>
            </div>

            <div className='evt-card-item-details-bottom'>
                <button onClick={(e) => handlePageRedirect(e, event?.id)} className='evt-card-item-btn'>View</button>
                {/* <div className='evt-card-item-price'>N5,000.00</div> */}
            </div>
        </div>
    </div>
  )
}

export default EventListCard