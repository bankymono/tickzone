import React, { useEffect } from 'react'
import './TicketList.css'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo'
import { useDispatch, useSelector } from 'react-redux';
import { getEventTickets } from '../../redux/actions/ticketActions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const TicketList = () => {
    const history =  useHistory();
    const dispatch = useDispatch();
    const eventTickets = useSelector(state => state.eventTickets)
    const {eventTicketsList, eventTicketsLoading, eventTicketsError} = eventTickets;
    const globalEventId = useSelector(state => state.globalEventId)
    const {theEventId} = globalEventId;

    useEffect(()=>{
        console.log(theEventId,"eeeee")
        dispatch(getEventTickets(theEventId));
    },[dispatch,theEventId])

    const handlePageRedirect = (id) => {
        history.push(`/create-ticket/${id}`)
    }

  return (
    <div className='events-dashboard'>
            <SideBarTwo />
            <div className='ticketlist-center-content'>

                <div className='events-list-db'>
                    <div className='ticketlist-table'>
                        <div className='ticketlist-heading'>
                            <div>Ticket name</div>
                            <div>Ticket price</div>
                            <div>Ticket Status </div>
                        </div>
                        <div className='ticketlist-body'>
                            {
                                eventTicketsList.length && eventTicketsList.length !== 0 ?
                                eventTicketsList.map((eventTicket,index) =>(
                                    <div className='ticketlist-body-row'>
                                    <div className='ticketlist-first'>
                                        {eventTicket.ticketName}
                                    </div>
                                    <div className='ticketlist-three'>{eventTicket.ticketPrice}</div>
                                    <div className='ticketlist-two'> <span className='evt-db-secnd-col-content'>{eventTicket.purchased ? "Sold":"Available"}</span></div> 
                                    </div>
                                ))
                                :<div></div>
                            }
                        </div>
                    </div>
                    <button onClick={() => handlePageRedirect(theEventId)}  className='evt-list-create-btn'>Add Tickets</button>
                </div>
            </div>
    </div>
  )
}

export default TicketList