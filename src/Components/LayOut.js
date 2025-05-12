import React from 'react'
import SideNav from './SideNav'
import './LayOut.css'
import { Outlet } from 'react-router-dom';



export default function LayOut() {
  return (
    <div className="main-1">
      <div className="second-circle-shadow">
        {/* <img src="/Pictures/vector.svg" alt="background" /> */}
      </div>
      <SideNav />
      <Outlet />
    </div>
  )
}
