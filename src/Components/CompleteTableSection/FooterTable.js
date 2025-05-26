import React from 'react'
import {
    Paper,
    Table,
    TableFooter,
    TableRow,
    TableCell,
    TableContainer,
  } from "@mui/material";

export default function FooterTable() {

    const cellStyle = {
      //  background: 'rgba(255, 255, 255, 0.05)',
        color: "white",
        fontSize: "14px",
        fontWeight: 400,
        fontFamily: "Poppins",
         borderBottom: "none",
      };

  return (
    <TableContainer
    component={Paper}
    sx={{
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: "7.66px",
      minWidth: "950px",
    }}
  >
    <Table>
    <TableFooter sx={{   background: 'rgba(255, 255, 255, 0.05)',}}>
  <TableRow>
    <TableCell sx={{ width: "70px"  ,  borderBottom: "none",}} />
    <TableCell sx={{ width: "130px" ,  borderBottom: "none", }} />
    <TableCell sx={{ width: "220px" ,  borderBottom: "none", }} />
    <TableCell sx={{ width: "210px" ,  borderBottom: "none", }} />
    <TableCell sx={{ ...cellStyle, width: "160px" ,   borderBottom: "none",  '@media (max-width:770px)': {
            fontSize: '12px', py:'0px', px:'10px',
          }, }}>$35,000</TableCell>
    <TableCell sx={{ width: "130px" , borderBottom: "none", }} />
    <TableCell sx={{ ...cellStyle, width: "140px" ,  borderBottom: "none",        '@media (max-width:770px)': {
            fontSize: '12px', py:'0px', px:'10px',
          }, }}>$35,000</TableCell>
  </TableRow>
</TableFooter>

    </Table>
  </TableContainer>
  )
}
