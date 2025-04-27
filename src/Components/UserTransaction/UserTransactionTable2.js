import React , {useState} from 'react'
import { Box , Button} from '@mui/material';
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import  TransactionMP2 from './TransactionMP2';
import UserTransactionHeader2 from './UserTransactionHeader2'
import UserTransactionBody from './UserTransactionBody'


export default function UserTransactionTable2() {


     const [open, setOpen] = useState(false);


  return (
    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'flex-end' , gap:'25px'}}>
    <Button onClick={() => setOpen(true)} variant="contained" startIcon={<FilterAltIcon />}  className='filter-btn'>
      Filter
    </Button>
    <Box sx={{ overflowX: "auto", width:'100%'  }}>
    <Box  sx={{ minWidth: '1060px', tableLayout: 'fixed' }}>
          <UserTransactionHeader2/>
          <UserTransactionBody/>
    </Box>
    < TransactionMP2  open={open} onClose={() => setOpen(false)}  />
</Box>
</Box>
  )
}
