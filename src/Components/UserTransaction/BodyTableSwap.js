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


export default function BodyTableSwap() {
  const cellWidths = [70, 180, 150, 170, 250, 150, 110];

  const users = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    category: i % 2 === 0 ? 'Transfer (Send)' : 'Transfer (Received)',
    token: i % 2 === 0 ? 'Solana' : 'PEPE',
    amount: i === 1 ? '45,092' : '$15,000',
    hash: '1Ffmb....N455paPH',
    date: '9/10/25 11:22:33',
    platform: 'platform-icon', // you can replace this with your platform icon
  }));

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const cellStyle = {
    color: 'white',
    background: 'rgba(255, 255, 255, 0.05)',
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'Poppins',
    borderBottom: 'none', // remove underline
    textAlign:'left',
    '@media (max-width:765px)': {
      fontSize: '12px',
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
                 },  }}>{user.id}</TableCell>
              
              <TableCell
                sx={{
                  ...cellStyle,
                  width: `${cellWidths[1]}px`,
                  color: user.category.includes('Send') ? '#FF4D4D' : '#00FF00',
                  '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },
                }}
              >
                {user.category}
              </TableCell>


              <TableCell sx={{ ...cellStyle, width: `${cellWidths[2]}px` , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },}}>{user.token}</TableCell>




              <TableCell sx={{   ...cellStyle,   width: `${cellWidths[3]}px`, '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }} > {user.amount} </TableCell>


              <TableCell sx={{ ...cellStyle, width: `${cellWidths[4]}px` , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 },}}>
                  {user.hash}
                  <Tooltip title="Copy Transaction Hash">
                    <IconButton  sx={{fontSize:'small' , color:'white' , width:'16px' , height:'16px' }} onClick={() => handleCopy(user.hash)} sx={{ ml: 1, color: '#ccc' }}  >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                    <IconButton  size="small">
                    <ArrowOutwardIcon sx={{fontSize:'small' , color:'white' , width:'16px' , height:'16px'}} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>

              <TableCell sx={{ ...cellStyle, width: `${cellWidths[5]}px` , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>{user.date}</TableCell>

              <TableCell sx={{ ...cellStyle, width: `${cellWidths[6]}px` , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>
                {/* You can replace this with your platform loader icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , '@media (max-width:770px)': {
                    fontSize: '12px', py:'4px',  px:'10px',
                 }, }}>
                  <img
                    src="/Pictures/gaya.svg"
                    alt="platform"
                    width="24"
                    height="24"
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
