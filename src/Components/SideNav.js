import React, { useState, useRef, useEffect } from 'react';
import './SideNav.css';
import { NavLink , Link} from 'react-router-dom';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      {/* Sidebar */}
      <div  ref={sidebarRef}  className={`side-nav-container ${isOpen ? 'open' : ''}`} >
        <div className="first-circle-shadow"></div>

        <img src="/Pictures/GayaWallet-logo.svg" className="side-nav-logo" alt="Logo" />

        <div className="side-nav-menu">
          <ul>
            <li><Link to="/dashboard"><img src='/Pictures/Dashboard.svg'/>Dashboard</Link></li>
            <li><Link to="/insured-users"><img src='/Pictures/Insured.svg'/>insuredUser</Link></li>
            <li><a href="#"><img src='/Pictures/UserTransaction.svg'/>User Transactions</a></li>
            <li><a href="#"><img src='/Pictures/Insurance.svg'/>Insurance Payments</a></li>
          </ul>
        </div>

        <div className="side-nav-logout-d">
          <img src="Line.svg" className="line-div" alt="Line" />
          <Link to="/"><img src='/Pictures/Arrow-right.svg'/>Log Out</Link>
        </div>
      </div>
    </>
  );
}
