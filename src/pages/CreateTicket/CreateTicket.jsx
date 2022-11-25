import React, { useState } from 'react';
import './CreateTicket.css';
import {BsChevronLeft} from 'react-icons/bs'
import SideBarTwo from '../../components/SideBarTwo/SideBarTwo';
import create_ticket from '../../assets/create_ticket_icon.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { createTickets } from '../../redux/actions/ticketActions';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const CreateTicket = ({history,match}) => {
    const dispatch = useDispatch();

    const ticketsCreated = useSelector(state => state.ticketsCreated);
    const { ticketsSuccess, ticketsLoading, ticketsError } = ticketsCreated;

    const [ticketName, setTicketName] = useState("")
    const [noOfTickets, setNoOfTickets] = useState("")
    const [ticketPrice, setTicketPrice] = useState("")
    const [ticketInfo, setTicketInfo] = useState("")


    useEffect(()=> {
        if (ticketsSuccess) {
            Swal.fire({
                icon: 'success',
                title: 'Tickets Created Successfully',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                history.push('/event-ticket')
            })
        } else if (ticketsError) {
            Swal.fire({
                icon: 'error',
                title: ticketsError,
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                setTicketName('')
                setNoOfTickets('')
                setTicketPrice('')
                setTicketInfo('')

                history.push(`/create-ticket/${match.params.id}`)
            })

        }

    },[history,match.params.id, ticketsError,ticketsSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name:ticketName,
            noOfTickets: parseInt(noOfTickets),
            price:ticketPrice,
            info:ticketInfo
        }
        dispatch(createTickets(match.params.id, data))

        setTicketName("")
        setNoOfTickets("")
        setTicketInfo("")
        setTicketPrice("")
    }


    const handleChange = (e) => {
        switch (e.target.name) {
            case 'ticketName':
                setTicketName(e.target.value)
                break;
            case 'noOfTickets':
                setNoOfTickets(e.target.value)
                break;
            case 'ticketPrice':
                setTicketPrice(e.target.value)
                break;
            case 'ticketInfo':
                setTicketInfo(e.target.value)
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

        <div className='create-ticket-form-container'>
            <div className='create-ticket-info'>
                <img src={create_ticket} alt="ticket creation" className='create-ticket-icon'/>
                <div>Create Tickets</div>
                <div>Let’s create tickets for your event</div>
            </div>
            <form action="" className='create-ticket-form' onSubmit={handleSubmit}>
                <div>Ticket name</div>
                <input type="text" placeholder='Ticket name' name="ticketName" value={ticketName} onChange={handleChange} />

                <div>Available stock</div>
                <input type="text" name='noOfTickets' value={noOfTickets} onChange={handleChange}  />

                <div>Ticket price</div>
                <input type="text" placeholder='' name="ticketPrice" value={ticketPrice} onChange={handleChange} />
                <div>Ticket details</div> 
                <textarea  id="" cols="20" rows="10" name="ticketInfo" value={ticketInfo} onChange={handleChange} ></textarea>
            <button>{ticketsLoading ? <ClipLoader size={12} /> : <span>Save</span>}</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTicket