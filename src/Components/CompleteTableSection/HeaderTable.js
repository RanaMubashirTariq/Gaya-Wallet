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
                '@media (max-width:1050px)': {
                  fontSize: '12px',
                },
                  '@media (max-width:770px)': {
                    fontSize: '12px',
                     py:'4px',
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
