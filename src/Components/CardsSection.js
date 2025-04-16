import React from 'react'
import './CardsSection.css';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableFooter,
    Paper,
    TextField,
    Button,
    Typography,
    IconButton,
    Tooltip,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import FilterAltIcon from "@mui/icons-material/FilterAlt";
  import ContentCopyIcon from "@mui/icons-material/ContentCopy";


export default function CardsSection() {

    const users = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: "George",
        email: "loremipsum@gmail.com",
        wallet: "1Fnb....N455pPdH",
        insured: i === 2 ? "$1,000,000" : i === 1 ? "$100,000" : "$15,000",
        subscription: i % 2 === 0 ? "Monthly" : "Yearly",
        insuranceFee: i === 2 ? "$1,000,000" : i === 1 ? "$90,000" : "$15,000",
      }));
        


        const handleCopy = (text) => {
          navigator.clipboard.writeText(text);
        };


  return (

       <div className='Data-main-div'>

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

      {/* Table Header */}
      <Box sx={{ mb: 2 }} className='table-scroll-wrapper'>
        <TableContainer component={Paper} sx={{ backgroundColor: "#1A1A2E" }}>
          <Table>
          <TableHead>
                <TableRow >
                    <TableCell sx={{ color:' rgba(143, 162, 183, 1)', fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , width: "60px" , p:'10px' }}>#</TableCell>
                    <TableCell sx={{ color:' rgba(143, 162, 183, 1)', fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , minWidth: "120px" , p:'10px'}}>Name</TableCell>
                    <TableCell sx={{ color:' rgba(143, 162, 183, 1)', fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , minWidth: "220px" , p:'10px'}}>Email</TableCell>
                    <TableCell sx={{ color:' rgba(143, 162, 183, 1)', fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , minWidth: "210px" , p:'10px'}}>Wallet Address</TableCell>
                    <TableCell sx={{ color:' rgba(143, 162, 183, 1)', fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , minWidth: "120px" , p:'10px', whiteSpace: "nowrap" }}>Insured Amount</TableCell>
                    <TableCell sx={{ color:' rgba(143, 162, 183, 1)', fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , minWidth: "100px" , p:'10px'}}>Subscription</TableCell>
                    <TableCell sx={{ color:' rgba(143, 162, 183, 1)', fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , minWidth: "120px" , p:'10px', whiteSpace: "nowrap"}}>Insurance Fee</TableCell>
                </TableRow>
                </TableHead>
          </Table>
        </TableContainer>
      </Box>

      {/* Table Body */}
      <Box sx={{ mb: 2 }}>
        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', }}>
          <Table>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell sx={{ color: "#fff" , fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , width: "60px"  }}>{user.id}</TableCell>
                  <TableCell sx={{ color: "#fff" , fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , minWidth: "100px" }}>{user.name}</TableCell>
                  <TableCell sx={{ color: "#fff" , fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , p:'0px' , overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',  maxWidth: '180px', }}>{user.email}</TableCell>

                  <TableCell sx={{  color: "#fff" , fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , p:'0px' , overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',  maxWidth: '180px',  }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                {user.wallet}
                                <Tooltip title="Copy Wallet">
                                <IconButton
                                    size="small"
                                    onClick={() => handleCopy(user.wallet)}
                                    sx={{ ml: 1, color: "#888" }}
                                >
                                    <ContentCopyIcon fontSize="small" />
                                </IconButton>
                                </Tooltip>
                            </Box>
                    </TableCell>

                  <TableCell sx={{ color: "#fff" , fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' ,  }}>{user.insured}</TableCell>
                  <TableCell sx={{ color: "#fff" , fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , }}>{user.subscription}</TableCell>
                  <TableCell sx={{ color: "#fff" , fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' , }}>{user.insuranceFee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Table Footer */}
      <Box>
      <Table>
          <TableFooter>
                <TableRow sx={{ backgroundColor: 'transparent', borderRadius:'7.6px' , border: '1px solid rgba(255, 255, 255, 0.02)' }}>
                    <TableCell colSpan={4} /> 
                    <TableCell sx={{ color: "#fff", textAlign:'right', fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins' ,  }}>$35,000</TableCell>
                    <TableCell sx={{width : '165px'}} />
                    <TableCell sx={{ color: "#fff", fontWeight: "400px", fontSize:'14px',  fontFamily:'Poppins'  , textAlign:'left' , width:'125px'}}>$35,000</TableCell>
                </TableRow>
                </TableFooter>
          </Table>
      </Box>
    </Box>
         </div>

    </div>
  )
}
