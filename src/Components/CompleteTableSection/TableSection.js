import React from 'react'
import HeaderTable from './HeaderTable'
import BodyTable from './BodyTable'
import FooterTable from './FooterTable'
import { Box } from '@mui/material'
import UserTransactions from '../UserTransaction/UserTransactions.css'

export default function TableSection() {
  return (
    <Box  className="hide-scrollbar" sx={{ overflowX: "auto",width:'100%' }}>
            <Box  sx={{ minWidth: 1060, tableLayout: 'fixed' }}>
            <HeaderTable/>
             <BodyTable/>
             <FooterTable/>
            </Box>
    </Box>
  )
}
