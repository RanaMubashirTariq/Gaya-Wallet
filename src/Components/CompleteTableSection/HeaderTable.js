import React from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";


export default function HeaderTable() {

  const headerWidths = [70, 130, 220, 210, 160, 130, 140];

  const headers = [
    "#",
    "Name",
    "Email",
    "Wallet Address",
    "Insured Amount",
    "Subscription",
    "Insurance Fee",
  ];

  return (
    <TableContainer
    component={Paper}
    sx={{
      backgroundColor: '#000000',
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
