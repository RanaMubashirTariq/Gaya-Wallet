import React , {useState} from 'react'
import './LayOut.css'
import './CardsSection.css';
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
import TabelSection from './CompleteTableSection/TableSection'
import MainSectionPupop from './MainSectionPupop'



export default function CardsSection() {

           const [open, setOpen] = useState(false);

  return (

       <div className='Data-main-div'>
         <div className="second-circle-shadow-3"></div>

        {/*  Partv 1 */}
 
    <div className='cards-main-container'>
  
          <div className='single-card-div'>
                   <div className='inner-card-div'>
                       <h3>insured Wallets</h3>
                        <div className='inner-card-detail-div'>
                            <div className='inner-detail-heading'>
                                <img src="/Pictures/Arrow-upper.svg"/><h2>293</h2>                          </div>
                        </div>
                        <p><span>+7.3%</span>vs Last 7 Days</p>
                   </div>
                   <div className='carv-line'><img src="/Pictures/Carv-line.svg" alt="" /></div>
          </div>



   {/*  Part 2 */}

   <div className='single-card-div'>
                   <div className='inner-card-div'>
                       <h3>Coverage AmounteRed</h3>
                        <div className='inner-card-detail-div'>
                            <div className='inner-detail-heading'>
                                <img src="/Pictures/Arrow-down.svg"/><h2>$15,000</h2>                          </div>
                        </div>
                        <div className='carve-red-line'>
                        <p><span>-7.3%</span> vs Last 7 Days</p>
                        </div>
                   </div>
                   <div className='carv-line'><img src="/Pictures/CarveRed-line.svg" alt="" /></div>
          </div>




          {/*  Part 3 */}



          <div className='single-card-div'>
                   <div className='inner-card-div'>
                       <h3>Revenue</h3>
                        <div className='inner-card-detail-div'>
                            <div className='inner-detail-heading'>
                                <img src="/Pictures/Arrow-down.svg"/><h2>$15,000</h2>                          </div>
                        </div>
                        <div className='carve-red-line'>
                        <p><span>-7.3%</span> vs Last 7 Days</p>
                        </div>
                   </div>
                   <div className='carv-line'><img src="/Pictures/CarveRed-line.svg" alt="" /></div>
          </div>

           
    </div>

      
      
       {/* Part 2 */}


         <div>

         <Box className='table-main-container'>
      {/* Header Row */}
      <Box className='table-upper-div'>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          New Users
        </Typography>

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
          variant="contained"
          startIcon={<FilterAltIcon />}
           className='filter-btn'
           onClick={() => setOpen(true)} 
        >
          Filter
        </Button>
      </Box>
          <TabelSection/>
    </Box>
         </div>
          <MainSectionPupop open={open} onClose={() => setOpen(false)}/>

    </div>
  )
}
