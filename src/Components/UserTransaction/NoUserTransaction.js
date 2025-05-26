import React from 'react'
import { Box, colors } from '@mui/material'
import './NoUserTransaction.css'
// import '../LayOut.css'
export default function NoUserTransaction() {
  return (
    <div className='no-user-main-container'> 
     <div className='second-circle-shadow-4'></div>

<div className='header-div'>
                         <h2>User Transaction</h2>
                  </div>

        <Box className="no-user-main-div">
        <Box className="inner-no-user-div">
               <div className='gradient-mask '>
               {/* <img src="/Pictures/NoUserTransaction.svg" className='blend-img' /> */}
               </div>
        <h2>No User Transactions</h2>
        </Box>
        </Box>
    </div>
  )
}
