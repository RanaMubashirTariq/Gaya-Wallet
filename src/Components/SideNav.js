import React, { useState, useRef, useEffect } from 'react';
import './SideNav.css';

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
      <div
        ref={sidebarRef}
        className={`side-nav-container ${isOpen ? 'open' : ''}`}
      >
        <div className="first-circle-shadow"></div>

        <img src="/Pictures/GayaWallet-logo.svg" className="side-nav-logo" alt="Logo" />

        <div className="side-nav-menu">
          <ul>
            <li><a href="#"><img src='/Pictures/Dashboard.svg'/>Dashboard</a></li>
            <li><a href="#"><img src='/Pictures/Insured.svg'/>Insured Users</a></li>
            <li><a href="#"><img src='/Pictures/UserTransaction.svg'/>User Transactions</a></li>
            <li><a href="#"><img src='/Pictures/Insurance.svg'/>Insurance Payments</a></li>
          </ul>
        </div>

        <div className="side-nav-logout-d">
          <img src="Line.svg" className="line-div" alt="Line" />
          <a href="#"><img src='/Pictures/Arrow-right.svg'/>Log Out</a>
        </div>
      </div>
    </>
  );
}
