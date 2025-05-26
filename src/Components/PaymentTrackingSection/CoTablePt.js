import React, {useState}   from  'react';
import  './PaymentTracking1.css'
import { Box ,  Button } from "@mui/material"
import PaymentTracking1Header from './PaymentTracking1Header'
import PaymentTracking1Body from './PaymentTracking1Body'
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PaymentPopup from './PaymentPopup'


export default function CoTablePt() {
  
   
             const [open, setOpen] = useState(false);
   
  return (
                   <div className='complete-table-div'>  
   
                   <Button  onClick={() => setOpen(true)}  variant="contained"  startIcon={<FilterAltIcon />}  className='filter-btn-2'>
                     Filter
                   </Button>
   
                 <Box className="hide-scrollbar" sx={{ overflowX: "auto",width:'100%' }}>
                    <Box  sx={{ minWidth: '1060px', tableLayout: 'fixed' }}>
                         <PaymentTracking1Header/>
                         <PaymentTracking1Body/>

                         <PaymentPopup open={open} onClose={()=> {setOpen(false)}}/>
                  </Box>
            </Box>
       </div>
  )
}
