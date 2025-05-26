import React from 'react'
import SwapNumber from './SwapName'
import CompleteTableSwap from './CompleteTableSwap'
import './CompleteSwapNumber.css'

export default function CompleteSwapNumber() {
  return (
    <div className='swap-main-container'>
                    <div className='header-div'>
                         <h2>User Transaction</h2>
                  </div>

                  <div className='swap-main-bottom-div'>
                          <SwapNumber/>
                          <CompleteTableSwap/>
                  </div>
    </div>
  )
}
