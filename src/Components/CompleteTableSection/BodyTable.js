import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell, TableContainer, IconButton, Tooltip, Box, } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";



export default function BodyTable() {
     
    const cellWidths = [70, 130, 220, 210, 160, 130, 140];

    const users = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: "George",
        email: "loremipsum@gmail.com",
        wallet: "1Fnmb....N455paPH",
        insured: i === 2 ? "$1,000,000" : i === 1 ? "$100,000" : "$15,000",
        subscription: i % 2 === 0 ? "Monthly" : "Yearly",
        insuranceFee: i === 2 ? "$1,000,000" : i === 1 ? "$100,000" : "$15,000",
      }));
      
      const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
      };


      const cellStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        color: "white",
        fontSize: "14px",
        fontWeight: 400,
        fontFamily: "Poppins",
        borderBottom:'3px'
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
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[0]}px` ,        '@media (max-width:770px)': {
            fontSize: '12px', py:'2px', px:'10px',
          }, }}>{user.id}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[1]}px` ,       '@media (max-width:770px)': {
            fontSize: '12px',py:'2px', px:'10px',
          }, }}>{user.name}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[2]}px`,        '@media (max-width:770px)': {
            fontSize: '12px' ,py:'2px', px:'10px',
          }, }}>{user.email}</TableCell>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[3]}px` ,        '@media (max-width:770px)': {
            fontSize: '12px',py:'2px', px:'10px',
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
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[4]}px` ,       '@media (max-width:770px)': {
            fontSize: '12px', py:'2px', px:'10px',
          }, }}>{user.insured}</TableCell>
          <TableCell sx={{ ...cellStyle, width: `${cellWidths[5]}px` ,        '@media (max-width:770px)': {
            fontSize: '12px', py:'2px', px:'10px',
          }, }}>{user.subscription}</TableCell>
          <TableCell sx={{ ...cellStyle, width: `${cellWidths[6]}px`  ,        '@media (max-width:770px)': {
            fontSize: '12px', py:'2px', px:'10px',
          },}}>{user.insuranceFee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
