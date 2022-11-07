import React from 'react'
import './PaymentPage.css'

const PaymentPage = () => {
  return (
    <div className='payment-page-container'>
            <div className='payment-page-wrapper'>
                <div className='payment-page-left-content'>
                    <div className='payment-page-left-content-heading'>Bill Details</div>
                    <div className='payment-page-left-content-form-wrapper'>
                        <div className='payment-page-pair-form'>
                            <input type="text" placeholder='First Name' className='payment-page-form-one' />
                            <input type="text" placeholder='Last Name' className='payment-page-form-two'/>
                        </div>
                        <div className='payment-page-pair-form'>
                            <input type="text" placeholder='Email' className='payment-page-form-one' />
                            <input type="text" placeholder='Confirm Email' className='payment-page-form-two'/>
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

                        <button className='payment-page-opt-btn-two'>Make Payment</button>
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