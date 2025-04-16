import React from 'react'
import './SideNavigationBar.css'


export default function SideNavigationBar() {
  return (
    <div className='side-navbar'>
        <div className='side-navbar-inner-d'>
            <div className='navbar-logo'><img src="/Pictures/GayaWallet-logo.svg" /></div>
             <div className='navbar-menu-d'>
                         <div className='menu-list-d'>
                            <div className='menu-inner-list-d'>
                                <img src='/Images/deshBoardIcon.svg'/>
                                <a href='#'>Dashboard</a>
                            </div>
                         </div>
                         <div className='menu-list-d'>
                            <div className='menu-inner-list-d'>
                                <img src='/Images/tradingIcon.svg'/>
                                <a href='#'>Ownership & Trading</a>
                            </div>
                         </div>
                         <div className='menu-list-d'>
                            <div className='menu-inner-list-d'>
                                <img src='/Images/mangementIcon.svg'/>
                                <a href='#'>Portfolio Management</a>
                            </div>
                         </div>
                         <div className='menu-list-d'>
                            <div className='menu-inner-list-d'>
                                <img src='/Images/claimingIcon.svg'/>
                                <a href='#'>Claiming ROIs</a>
                            </div>
                         </div>
             </div>
        </div>
    </div>
  )
}
