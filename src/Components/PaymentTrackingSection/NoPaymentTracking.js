import React from 'react'
import './PaymentTracking1.css'

export default function NoPaymentTracking() {
  return (
        <div className='payment-tracking-container'>
                           <div className='header-div-payment-tracking'>
                     <h2>Payment Tracking</h2>
                 </div>


                 <div className='no-paymnet-div'>
                      <div className='inner-no-paymnet-div'>
                            <div className='img-div-payment'>
                            </div>
                      </div>
                      <h2>No Insurance Payments</h2>
                 </div>
        </div>
  )
}
