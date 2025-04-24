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
        color: "white",
        fontSize: "14px",
        fontWeight: 400,
        fontFamily: "Poppins",
      };

  return (
    <TableContainer
    component={Paper}
    sx={{
      backgroundColor: "#1F1F30",
      borderRadius: "7.66px",
      minWidth: "950px",
    }}
  >
    <Table>
    <TableFooter>
  <TableRow>
    <TableCell sx={{ width: "70px" }} />
    <TableCell sx={{ width: "130px" }} />
    <TableCell sx={{ width: "220px" }} />
    <TableCell sx={{ width: "210px" }} />
    <TableCell sx={{ ...cellStyle, width: "160px" ,        '@media (max-width:765px)': {
            fontSize: '12px',
          }, }}>$35,000</TableCell>
    <TableCell sx={{ width: "130px" }} />
    <TableCell sx={{ ...cellStyle, width: "140px" ,        '@media (max-width:765px)': {
            fontSize: '12px',
          }, }}>$35,000</TableCell>
  </TableRow>
</TableFooter>

    </Table>
  </TableContainer>
  )
}
