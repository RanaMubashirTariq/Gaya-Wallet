import React from 'react'
import './PaymentTracking1.css'
import { Paper, Table, TableBody, TableRow, TableCell, TableContainer, IconButton, Tooltip, Box, } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Link } from 'react-router-dom';



export default function Pt2Body() {
     
  const cellWidths = [70, 150, 130, 120, 210, 150 , 110, 130];

    const users = Array.from({length:10} , (_, i) => ({
      id: i + 1,
      name : 'Transfer (Send)',
      subcription : i % 2 == 0 ? 'Monthly' : 'Yearly' ,
      amount : '$15,000',
      wallet: "1Fnmb....N455paPH",
      datetime : '9/10/25 11:22:33',
      platform: 'platform-icon',
      expiryDate : '9/10/25',
   }))
      
      const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
      };


      const cellStyle = {
        color: "white",
        background: 'rgba(255, 255, 255, 0.05)',
        fontSize: "14px",
        fontWeight: 400,
        fontFamily: "Poppins",
        borderBottom:'2px',
         '@media (max-width:770px)': {
                    fontSize: '12px',
                     py:'2px',
                     px:'10px',
                 }, 
      };


  return (
    <TableContainer
      component={Paper}
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: "7.66px",
        marginBottom: "16px",
        minWidth: "950px",
      }}
    >
      <Table>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[0]}px` ,     '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.id}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[1]}px` , color:'green' ,        '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.name}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[2]}px`,         '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.subcription}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[3]}px` ,      '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.amount}</TableCell>
                 
<TableCell sx={{ ...cellStyle, width: `${cellWidths[4]}px` ,        '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {user.wallet}
                  <Tooltip title="Copy Wallet">
                    <IconButton
                      size="small"
                      onClick={() => handleCopy(user.wallet)}
                      sx={{ ml: 1, color: "#ccc" }}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>

              <TableCell sx={{ ...cellStyle, width: `${cellWidths[5]}px` ,         '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.datetime}</TableCell>


                           <TableCell sx={{ ...cellStyle, width: `${cellWidths[6]}px` , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px', 
                 },  }}>
                              {/* You can replace this with your platform loader icon */}
                                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src="/Pictures/gaya.svg" alt="platform" width="24" height="24" />
                                  </Box>
                            </TableCell>


         <TableCell sx={{ ...cellStyle, width: `${cellWidths[7]}px` ,   '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },}}>{user.expiryDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
