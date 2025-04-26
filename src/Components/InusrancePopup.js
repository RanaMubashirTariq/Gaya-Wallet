import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import './IncurancePopup.css';
import NoInsurance from './NoInsurance';
import { Link } from 'react-router-dom';

export default function InusrancePopup({ open, onClose }) {
  const [subscription, setSubscription] = useState('');
  const [insuredAmount, setInsuredAmount] = useState({ min: '', max: '' });
  const [insuranceFee, setInsuranceFee] = useState({ min: '', max: '' });
  const [isOpen ,setIsOpen] = useState(false);


  const resetSubscription = () => setSubscription('');
  const resetInsuredAmount = () => setInsuredAmount({ min: '', max: '' });
  const resetInsuranceFee = () => setInsuranceFee({ min: '', max: '' });
  const resetAll = () => {
    resetSubscription();
    resetInsuredAmount();
    resetInsuranceFee();
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

        {/* Insured Amount */}
        <div className="popup-section">
          <div className="section-header">
            <span>Insured Amount</span>
            <button onClick={resetInsuredAmount} className="reset-button">Reset</button>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Min Amount"
              value={insuredAmount.min}
              onChange={(e) => setInsuredAmount({ ...insuredAmount, min: e.target.value })}
              className="input-box"
            />
            <input
              type="text"
              placeholder="Max Amount"
              value={insuredAmount.max}
              onChange={(e) => setInsuredAmount({ ...insuredAmount, max: e.target.value })}
              className="input-box"
            />
          </div>
        </div>

        {/* Insurance Fee */}
        <div className="popup-section">
          <div className="section-header">
            <span>Insurance Fee</span>
            <button onClick={resetInsuranceFee} className="reset-button">Reset</button>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Min Amount"
              value={insuranceFee.min}
              onChange={(e) => setInsuranceFee({ ...insuranceFee, min: e.target.value })}
              className="input-box"
            />
            <input
              type="text"
              placeholder="Max Amount"
              value={insuranceFee.max}
              onChange={(e) => setInsuranceFee({ ...insuranceFee, max: e.target.value })}
              className="input-box"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="action-buttons">
          <button className="reset-filter-btn" onClick={resetAll}>Reset Filter</button>
          <button className="apply-filter-btn" onClick={()=> setIsOpen(true)}><Link to='/dashboard/no-insurance'>Apply Filter</Link></button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
