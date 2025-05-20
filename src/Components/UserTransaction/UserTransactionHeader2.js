import React from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";

export default function UserTransactionHeader2() {

  const headerWidths = [60, 125, 135, 137, 150, 110, 225 , 140];

  const headers = [
    "#",
    "Input Token",
    "Output Token",
    "Input Amount",
    "Output Amount",
    "Exchange",
    "Transaction Hash",
    "Date/Time"
  ];

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
