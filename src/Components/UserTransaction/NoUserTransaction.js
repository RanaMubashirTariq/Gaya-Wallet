import React from 'react'
import { Box, colors } from '@mui/material'
import './NoUserTransaction.css'
export default function NoUserTransaction() {
  return (
    <div>

<div className='header-div-user'>
                         <h2>User Transaction</h2>
                  </div>

        <Box className="no-user-main-div">
        <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center', fontFamily:'Poppins' , fontSize:'30px' , color:'white' , fontWeight:'500'}}>
               <div className='img-div'>
               <img src="/Pictures/NoUserTransaction.svg" alt="" />
               </div>
        <h2>No User Transactions</h2>
        </Box>
        </Box>
    </div>
  )
}
