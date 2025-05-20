import React from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";

export default function HeaderTablesSwap() {

  const headerWidths = [70, 180, 150, 170, 250, 150, 110];

  const headers = [
    "#",
    "Category",
    "Token",
    "Amount of tokens",
    "Transaction Hash",
    "Date/Time",
    "Platform",
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
