import React from 'react'
import top_event_img from '../../assets/top_event_img.png'

const TopEvent = () => {
  return (
    <>
        <div className='home-item-selection'>
            <select>
                <option>Gbagada</option>
                <option>Agege</option>
                <option>Shomolu</option>
            </select>
        </div>

        <div>
            <div className='top-event-heading'>Top Event in Gbagada </div>
            <div className='top-event-card'>
                <img className='top-event-img' src={top_event_img} alt="top img" />
                <div className='top-event-card-details-section'>
                    <div className='top-evt-card-left-detail'>
                        <div className='top-evt-details-date-and-time'>
                            <div className='top-evt-date'>
                                <div className='top-evt-month'>Nov</div>
                                <div className='top-evt-month-no'>20</div>
                                <div className='top-evt-month-time'>10pm</div>   
                            </div>
                            <div className='top-evt-details-info'>
                                <div className='top-evt-details-info-first'>Pineapple fiesta</div>
                                <div className='top-evt-details-info-second'>Landmark Beach, VI, Lagos</div>
                            </div>
                        </div>
                        <div>N5,000.00</div>
                    </div>

                    <div className='top-evt-btn-container'>
                        <button className='top-evt-btn'>Buy tickets</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopEvent