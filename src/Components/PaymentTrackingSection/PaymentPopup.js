import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom';

export default function InusrancePopup({ open, onClose }) {

  const [subscription, setSubscription] = useState('');
  const [value, setValue] = useState(new Date());


  const [isOpen ,setIsOpen] = useState(false);


  const resetSubscription = () => setSubscription('');
  const clearDate = () => setValue({From: '5/04/2025' , To: '5/04/2025'});
  const resetAll = () => {
    resetSubscription();
    clearDate();
  };




  return (
    <Dialog open={open} onClose={onClose} className='main-popup-contianer'>
      <DialogContent className="popup-container popup-overlay">
        {/* Subscription */}
        <div className="popup-section">
          <div className="section-header">
            <span>Subscription</span>
            <button onClick={resetSubscription} className="reset-button">Reset</button>
          </div>
          <div className="subscription-options">
            <button
              className={`subscription-button ${subscription === 'Monthly' ? 'active' : ''}`}
              onClick={() => setSubscription('Monthly')}
            >
              Monthly
            </button>
            <button
              className={`subscription-button ${subscription === 'Yearly' ? 'active' : ''}`}
              onClick={() => setSubscription('Yearly')}
            >
              Yearly
            </button>
          </div>
        </div>


        <div className="section">
              <div className="header">
                <span>Date</span>
                <button className="reset-btn" onClick={clearDate}>Reset</button>
              </div>
              <div className="date-group">
              <div className="custom-datepicker-wrapper">
                  <label className="datepicker-label">From</label>
                  <input type="date" className="custom-datepicker" />
        </div>
        <div className="custom-datepicker-wrapper">
                  <label className="datepicker-label">To</label>
                  <input type="date" className="custom-datepicker" />
        </div>
              </div>
            </div>

  


        {/* Buttons */}
        <div className="action-buttons">
          <button className="reset-filter-btn" onClick={resetAll}>Reset Filter</button>
          <button className="apply-filter-btn" onClick={()=> setIsOpen(true)}><Link to='/dashboard/no-payment-tracking'>Apply Filter</Link></button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
