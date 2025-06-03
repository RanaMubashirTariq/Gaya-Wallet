import React, { useState, useRef, useEffect } from 'react';
import './SideNav.css';
import { NavLink , Link, useLocation} from 'react-router-dom';


export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
  const location = useLocation();

  // Close on outside click
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  // Close on outside click (unchanged) …
  useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
<li>
  <NavLink to="/dashboard" end   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
    {({ isActive }) => (
      <>
        <img   src={isActive ? '/Pictures/Dasboard-1.svg' : '/Pictures/Dashboard.svg'}   alt="Dashboard Icon"   />
               Dashboard
      </>
      )}
  </NavLink>
</li>
  <li>
    <NavLink to="/dashboard/insured-users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {({ isActive }) => (
      <>
        <img   src={isActive ? '/Pictures/insured-1.svg' : '/Pictures/insured.svg'}   alt="insured Icon"   />
               Insured User
      </>
      )}
    </NavLink>
  </li>
  <li>
    <NavLink to="/dashboard/userTransactions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {({ isActive }) => (
      <>
        <img   src={isActive ? '/Pictures/user-transaction-1.svg' : '/Pictures/UserTransaction.svg'}   alt="UserTransaction Icon"   />
             User Transactions
      </>
      )}
    </NavLink>
  </li>
  <li>
    <NavLink to="/dashboard/payment-tracking" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {({ isActive }) => (
      <>
        <img   src={isActive ? '/Pictures/Insurance-3.svg' : '/Pictures/Insurance.svg'}   alt="Insurance Icon"   />
              Insurance Payments
      </>
      )}
    </NavLink>
  </li>
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
