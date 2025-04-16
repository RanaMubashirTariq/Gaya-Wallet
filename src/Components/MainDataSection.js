import React from 'react'
import './MainDataSection.css';
import CardsSection from './CardsSection';


export default function MainDataSection() {
  return (
    <div className='main-data-section'>
             <div className='header-div'>
                 <h2>Analytics & Reporting</h2>
             </div>
             <CardsSection/>
    </div>
  )
}
