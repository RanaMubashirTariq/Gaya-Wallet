import React ,{useState} from 'react'
import BodyTableSwap from './BodyTableSwap'
import HeaderTablesSwap from './HeaderTablesSwap'
import { Box , Button} from '@mui/material';
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import UserPopup from '../UserPopup';


export default function CompleteTableSwap() {

  const [open, setOpen] = useState(false);


  return (
    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'flex-end' , gap:'25px'}}>

            <Button onClick={() => setOpen(true)} variant="contained" startIcon={<FilterAltIcon />}  className='filter-btn'>
              Filter
            </Button>
    <Box sx={{ overflowX: "auto", width:'100%' }}>
            <Box  sx={{ minWidth: '1060px', tableLayout: 'fixed' }}>
            <HeaderTablesSwap/>
             <BodyTableSwap/>
            </Box>
            <UserPopup  open={open} onClose={() => setOpen(false)}  />
    </Box>
    </Box>
  )
}
