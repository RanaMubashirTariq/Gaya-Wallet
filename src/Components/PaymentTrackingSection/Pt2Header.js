import React from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";


export default function Pt2Header() {

       const headerWidths = [70, 150, 130, 120, 210, 150 , 110, 130];

       const headers = [
          "#",
          'Category',
          'Subcribtion',
          'Amount',
          'Wallet Address',
          'Date/Time',
          'Platform',
          'Expiry Date',
       ];

  return (
    <TableContainer
    component={Paper}
    sx={{
      background:'rgba(255, 255, 255, 0.05)',
      borderRadius: "7.66px",
      marginBottom: "16px",
      minWidth: "950px",
    }}
  >
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          {headers.map((head, idx) => (
            <TableCell
              key={idx}
              sx={{
                width: `${headerWidths[idx]}px`,
                color: "rgba(143, 162, 183, 1)",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
                border: "none",
                whiteSpace: "nowrap",
                backgroundColor: '#000000',
                '@media (max-width:1050px)': {
                  fontSize: '12px',
                },
               
              }}
            >
              {head}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </Table>
  </TableContainer>
  )
}
