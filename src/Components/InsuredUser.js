import React , {useState} from 'react'
import './InsuredUser.css'
import TableSection from './CompleteTableSection/TableSection'
import InsurancePopup from './InusrancePopup'
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

export default function InsuredUser() {


  const [open, setOpen] = useState(false);


  return (
    <div className='main-data-section'>
             <div className='header-div-user'>
                 <h2>Insured Users</h2>
             </div>

             <Box className='table-main-container'>
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
          sx={{
            background:'linear-gradient(91.26deg, #1201FF 0%, #C597FD 100%)',
            borderRadius: "20px",
            textTransform: "none",
            px: 3,
            "&:hover": {
             opacity:0.4,
            },
          }}
        >
          Filter
        </Button>
      </Box>
          <TableSection/>
          <InsurancePopup  open={open} onClose={() => setOpen(false)} />
    </Box>
    </div>
  )
}
