import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyTicket, getAvailableTickets } from '../../redux/actions/eventActions';
import './PaymentPage.css'

const PaymentPage = ({history, match}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch();

    const availableTickets = useSelector(state => state.availableTickets)
    const {availableTicketsList, availableTicketsLoading, availableTicketsError} = availableTickets

    const buyTicketInfo = useSelector(state => state.buyTicketInfo);
    const {buyTicketData,buyTicketLoading,buyTicketSuccess,buyTicketError} = buyTicketInfo;

    useEffect(()=>{
        dispatch(getAvailableTickets(match.params.id));
    },[dispatch, match.params.id])

    useEffect(()=> {
        if(buyTicketData) {
            localStorage.setItem("boughtTicket", JSON.stringify(buyTicketData))
            history.push("/bought-ticket")
        }
    },[history,buyTicketData])
    
    const getLastTicket = () => {
        let lastTicket = availableTicketsList[availableTicketsList.length - 1]
        return lastTicket
    }

    const handleBuyTicket = () => {
        const lastTicket = getLastTicket()
        const buyerInfo = {
            firstName,
            lastName,
            email
        }
        console.log(lastTicket, "haaaa")
        localStorage.setItem("buyerInfo", JSON.stringify(buyerInfo));
        dispatch(buyTicket(lastTicket.id))

    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstName(e.target.value)
                break;
            case 'lastName':
                setLastName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;

            default:
                return null;
        }
    }

  return (
    <div className='payment-page-container'>
        {console.log(availableTicketsList,"yeba")}
            <div className='payment-page-wrapper'>
                <div className='payment-page-left-content'>
                    <div className='payment-page-left-content-heading'>Bill Details</div>
                    <div className='payment-page-left-content-form-wrapper'>
                        <div className='payment-page-pair-form'>
                            <input name="firstName" value={firstName} onChange={handleChange} type="text" placeholder='First Name' className='payment-page-form-one' />
                            <input name="lastName" value={lastName} onChange={handleChange} type="text" placeholder='Last Name' className='payment-page-form-two'/>
                        </div>
                        <div className='payment-page-pair-form'>
                            <input value={email} onChange={handleChange} name="email" type="text" placeholder='Email' className='payment-page-form-one' />
                            {/* <input type="text" placeholder='Confirm Email' className='payment-page-form-two'/> */}
                        </div>
                    </div>

                    <div className='payment-page-options-wrapper'>
                        <div className='payment-page-options-heading'>Payment Options</div>
                        <button className='payment-page-opt-btn-one'>Pay with Card</button>
                        <button className='payment-page-opt-btn-two'>Pay with Bank Transfer</button>

                        <div className='payment-opt-terms-and-con'>
                            <input type="checkbox" name="" id="" />
                            <div>Accept Eventic Terms and Conditions Privacy policy.</div>
                        </div>

                        <button onClick={handleBuyTicket} className='payment-page-opt-btn-two'>Make Payment</button>
                    </div>


                </div>
                <div className='payment-summary-card'>
                    <div className='payment-summary-card-heading'>Order summary</div>
                    <div className='payment-summary-card-item'>
                        <div>1 x Regular ticket</div>
                        <div>N5,000.00</div>
                    </div>

                    <div className='payment-summary-card-item'>
                        <div>V.A.T</div>
                        <div>N0.00</div>
                    </div>

                    <div className='payment-summary-card-total'>
                        <div>Total</div>
                        <div>N5,000.00</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PaymentPage