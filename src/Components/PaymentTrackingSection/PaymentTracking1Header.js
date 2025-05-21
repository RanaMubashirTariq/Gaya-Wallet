import React from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";


export default function PaymentTracking1Header() {

       const headerWidths = [70, 140, 140, 130, 155, 210, 110, 100];

       const headers = [
          "#",
          'Name',
          'Subcribtion',
          'Amount',
          'Date/Time',
          'Wallet Address',
          'Status',
          'View',
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
                background: 'rgba(255, 255, 255, 0.05)',
                color: "rgba(143, 162, 183, 1)",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
                border: "none",
                whiteSpace: "nowrap",
                '@media (max-width:1050px)': {
                  fontSize: '12px',
                },
                '@media (max-width:770px)': {
                    fontSize: '12px',
                     py:'2px',
                     px:'10px',
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
