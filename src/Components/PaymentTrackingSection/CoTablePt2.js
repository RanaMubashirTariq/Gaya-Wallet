import React ,{useState} from 'react'
import  './PaymentTracking1.css'
import { Box ,  Button  } from "@mui/material"
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Pt2Header from './Pt2Header'
import Pt2Body from './Pt2Body'
import { Link } from 'react-router-dom';

export default function CoTablePt2() {
    
             const [open, setOpen] = useState(false);

  return (
    <div className='pyment-tracking-div'>  
   
           <Link to={'/dashboard/payment-tracking'}>
           <Button  onClick={() => setOpen(true)}   sx={{color:'white' , background: 'rgba(8, 10, 12, 1)', border:'none' , outline:"none" , textDecorationLine:'none' ,display:'flex', gap:'10px' }}>
              <img src='/Pictures/arrow-reverse.svg'/>
              back
            </Button>
           </Link>

        <Box sx={{ overflowX: "auto",width:'100%' }}>
            <Box  sx={{ minWidth: '1060px', tableLayout: 'fixed' }}>
                <Pt2Header/>
                <Pt2Body/>
        </Box>
        </Box>
  </div>
  )
}
