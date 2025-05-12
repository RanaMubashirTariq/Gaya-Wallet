import React from 'react'
import './UserTransactions.css'
import UserTransaction2 from './UserTransaction2'
import UserTransactionTable2 from './UserTransactionTable2'

export default function UserTransactionComplete() {
  return (
        <div className='swap-main-container'>
                        <div className='header-div-user'>
                             <h2>User Transaction</h2>
                      </div>
                      <div className='swap-main-bottom-div'>
                              <UserTransaction2/>
                              <UserTransactionTable2/>
                      </div>
        </div>
  )
}
