import React, { useState, useRef, useEffect } from 'react';
import './SideNav.css';
import { NavLink , Link, useLocation} from 'react-router-dom';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
  const location = useLocation();

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


  useEffect(() => {
    console.log('Current path:', location.pathname);
  }, [location]);

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
            <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img src='/Pictures/Dashboard.svg'/>Dashboard</NavLink></li>
            <li><NavLink to="/dashboard/insured-users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img src='/Pictures/Insured.svg'/>insured User</NavLink></li>
            <li> <NavLink to="/dashboard/userTransactions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> <img src='/Pictures/UserTransaction.svg' /> User Transactions </NavLink></li>
            <li><NavLink to="/dashboard/user-transactions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img src='/Pictures/Insurance.svg' /> Insurance Payments</NavLink> </li>

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
