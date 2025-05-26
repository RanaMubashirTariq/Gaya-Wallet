import React from 'react'
import './NoInsurance.css'


export default function NoInsurance() {
  return (
        <div className='no-user-main-container'>
                <div className='header-div'>
                 <h2>Insured Users</h2>
             </div>
                <div className='main-container-d'>
           <div className='sb-main-container-d'>
                <div className='User-pic-div'>
                {/* <img src="/Pictures/NoUser.svg" alt="" /> */}
                </div>
                  <h2>No Insured User</h2>
           </div>
    </div>
        </div>
  )
}
