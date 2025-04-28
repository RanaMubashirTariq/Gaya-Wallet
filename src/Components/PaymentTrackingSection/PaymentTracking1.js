import React  from  'react';
import  './PaymentTracking1.css'
import  CoTablePt from'./CoTablePt'

export default function PaymentTracking1() {


  return (
    <div className='payment-tracking-container'>
                       <div className='header-div-payment-tracking'>
                 <h2>Payment Tracking</h2>
             </div>

             {/* { Part 2 Table} */}
             
             <CoTablePt/>
    </div>
  )
}
