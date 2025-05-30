import React from 'react'
import './PaymentTracking1.css'
import { Paper, Table, TableBody, TableRow, TableCell, TableContainer, IconButton, Tooltip, Box, } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Link } from 'react-router-dom';



export default function PaymentTracking1Body() {
     
  const cellWidths = [70 , 140 , 140 , 130 , 155 , 210 , 110 , 100];

    const users = Array.from({length:10} , (_, i) => ({
      id: i + 1,
      name : 'Georage',
      subcription : i % 2 == 0 ? 'Monthly' : 'Yearly' ,
      amount : '$15,000',
      datetime : '9/10/25 11:22:33',
      wallet: "1Fnmb....N455paPH",
      status :  i % 2 === 0 ? 'Overdue' : 'Overgoing' ,
      view : 'view',
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
                    fontSize: '12px', py:'2px',  px:'10px',
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
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[1]}px` ,      '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.name}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[2]}px`,       '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.subcription}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[3]}px` ,     '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.amount}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[4]}px` ,       '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.datetime}</TableCell>

                 
<TableCell sx={{ ...cellStyle, width: `${cellWidths[5]}px` ,   '@media (max-width:770px)': {
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


              <TableCell sx={{ ...cellStyle, width: `${cellWidths[6]}px`  , color: user.status.includes('Overdue') ? '#FF4D4D' : '#00FF00',  '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },}}>{user.status}</TableCell>


         <TableCell sx={{ ...cellStyle, width: `${cellWidths[7]}px` ,  '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },}}><button className='btn-cell-link'><Link to='/dashboard/payment-tracking-2'>{user.view}</Link></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
