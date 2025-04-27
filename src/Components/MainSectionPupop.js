import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import './IncurancePopup.css';
import NoInsurance from './NoInsurance';
import { Link } from 'react-router-dom';

export default function MainSectionPupop({ open, onClose }) {
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

       
  const handleNumericChange = (e, field) => {
    const value = e.target.value;
    if (  /^\d*$/.test(value)) {
      setInsuredAmount((prev) => ({
        ...prev,
        [field]: value,
      }));
    } else {
      alert("Please enter numeric value only.");
    }
  };
  const handlechangeAplhabat = (e, field) => {
    const value = e.target.value;
    if (  /^\d*$/.test(value)) {
      setInsuranceFee((prev) => ({
        ...prev,
        [field]: value,
      }));
    } else {
      alert("Please enter numeric value only.");
    }
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
              <div className="input-group-container">
                    <input type="text"  placeholder="Min Amount"  value={insuredAmount.min}  onChange={(e) => handleNumericChange(e, 'min')}  className="input-box"  />

                    <input  type="text"  placeholder="Max Amount"  value={insuredAmount.max}   onChange={(e) => handleNumericChange(e, 'max')}  className="input-box"  />
              </div>
        </div>

        {/* Insurance Fee */}
        <div className="popup-section">
          <div className="section-header">
            <span>Insurance Fee</span>
            <button onClick={resetInsuranceFee} className="reset-button">Reset</button>
          </div>
              <div className="input-group-container">
                    <input  type="text"  placeholder="Min Amount"   value={insuranceFee.min}  onChange={(e) => handlechangeAplhabat (e, 'min')}  className="input-box"  />

                    <input  type="text"  placeholder="Max Amount"   value={insuranceFee.max}  onChange={(e) => handlechangeAplhabat (e, 'max')}  className="input-box"  />
              </div>
        </div>

        {/* Buttons */}
        <div className="action-buttons">
          <button className="reset-filter-btn" onClick={resetAll}>Reset Filter</button>
          <button className="apply-filter-btn" onClick={()=> setIsOpen(true)}>Apply Filter</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
