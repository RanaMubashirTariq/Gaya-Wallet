import React , {useState} from 'react'
import './UserTransactions.css'
import TableSection from '../CompleteTableSection/TableSection'
import {
    Box,
    TextField,
    Button,
    Table,
    Typography,
    IconButton,
    Tooltip,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import FilterAltIcon from "@mui/icons-material/FilterAlt";
import UserPopup from './UserPopup';

export default function UserTranactions() {


  const [open, setOpen] = useState(false);


  return (
    <div className='main-data-section'>
             <div className='header-div-user'>
                 <h2>User Transaction</h2>
             </div>

             <Box className='table-main-container-d'>
      {/* Header Row */}
      <Box className='table-upper-div'>
        <Box className='search-div'>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Search User by name, email, or wallet address"
            InputProps={{
              disableUnderline: true,
              style: { color:' rgba(143, 162, 183, 1)'},
            }}
            // sx={{ ml: 1 }}
          />
          <SearchIcon sx={{ color: "#aaa" }} />
        </Box>

        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          startIcon={<FilterAltIcon />}
           className='filter-btn'
        >
          Filter
        </Button>
      </Box>
          <TableSection/>
          <UserPopup  open={open} onClose={() => setOpen(false)}  />
    </Box>
    </div>
  )
}
