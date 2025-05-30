import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


export default function UserTransactionBody() {
  const cellWidths =[60, 125, 135, 137, 150, 110, 225 , 140];

  const users = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    inputToken: i % 3 === 0 ? 'Solana' : 'PEPE',
    outputToken: i % 2 === 0 ? 'PEPE' : 'Solana',
    inputAmount: i === 1 ? '$15,000' : '45,092',
    outputAmount: i === 1 ? '$15,000' : '45,092',
    exchange: i % 2 === 0 ? 'Jupiter' : 'Meteora',
    hash: '1Ffmb....N455paPH',
    date: '9/10/25 11:22:33',
  }));

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const cellStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    color: 'white',
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'Poppins',
    borderBottom: 'none', // remove underline
    textAlign:'left',
    '@media (max-width:770px)': {
                    fontSize: '12px', py:'2px',  px:'10px',
                 },
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <Table>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell sx={{ ...cellStyle, width: `${cellWidths[0]}px` , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.id}</TableCell>
              
              <TableCell
                sx={{
                  ...cellStyle,
                  width: `${cellWidths[1]}px`, '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },
                }}
              >
                {user.inputToken}
              </TableCell>


              <TableCell sx={{ ...cellStyle, width: `${cellWidths[2]}px` , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.outputToken}</TableCell>




              <TableCell sx={{   ...cellStyle,   width: `${cellWidths[3]}px`, '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }} > {user.inputAmount} </TableCell>
              <TableCell sx={{   ...cellStyle,   width: `${cellWidths[4]}px`, '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },  }} > {user.outputAmount} </TableCell>
              <TableCell sx={{   ...cellStyle,   width: `${cellWidths[5]}px`, '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }} > {user.exchange} </TableCell>


              <TableCell sx={{ ...cellStyle, width: `${cellWidths[6]}px` , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>
                  {user.hash}
                  <Tooltip title="Copy Transaction Hash">
                    <IconButton  sx={{fontSize:'small' , color:'white' , width:'16px' , height:'16px'}} onClick={() => handleCopy(user.hash)} >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                    <IconButton  size="small">
                    <ArrowOutwardIcon sx={{fontSize:'small' , color:'white' , width:'16px' , height:'16px'}} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>

              <TableCell sx={{ ...cellStyle, width: `${cellWidths[7]}px` ,  whiteSpace:'nowrap' , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }} >{user.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
