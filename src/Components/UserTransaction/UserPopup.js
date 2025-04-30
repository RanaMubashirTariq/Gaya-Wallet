import React , {useState , useEffect , useRef} from 'react';
import './UserPopup.css';
import { Link } from 'react-router-dom';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  SvgIcon,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { TextField, InputAdornment } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { TextField, InputAdornment } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';




export default function UserPopup({ open, onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Close if clicked outside the popup
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
     else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  

                   
  const [checked, setChecked] =useState(true);
  const [value, setValue] = useState(new Date());
    const [maxAmount, setMaxAmount] = useState({ min: '', max: '' });
    const [receiveFee, setReceiveFee] = useState({ min: '', max: '' });
    const [selectedToken, setSelectedToken] = useState("solve");
       
    const resetdAmount = () => setMaxAmount({ min: '', max: '' });
    const resetReceiveFee = () => setReceiveFee({ min: '', max: '' });
    const clearDate = () => setValue({From: '5/04/2025' , To: '5/04/2025'});
    const clearToken = () => setSelectedToken("solve");
    const resetAll = () => {
      clearDate();
      resetdAmount();
      resetReceiveFee();
      clearToken();
    };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const handleNumericChange = (e, field) => {
    const value = e.target.value;
    if (  /^\d*$/.test(value)) {
      setMaxAmount((prev) => ({
        ...prev,
        [field]: value,
      }));
    } else {
      alert("Please enter numeric value only.");
    }
  };
  
  
  const handleNumericNums = (e, field) => {
    const value = e.target.value;
    if (  /^\d*$/.test(value)) {
      setReceiveFee((prev) => ({
        ...prev,
        [field]: value,
      }));
    } else {
      alert("Please enter numeric value only.");
    }
  };


  if (!open) return null;









  return (
    <div className="popup-overlay-No-transaction-d" ref={popupRef}>
      <div className="popup-box" >
        <div className="section">
          <div className="header">
            <span>Send</span>
            <button className="reset-btn" onClick={resetdAmount}>Reset</button>
          </div>
          <div className="input-group-d">
            <input type="text" placeholder="Min Amount"       value={maxAmount.min}
             onChange={(e) => handleNumericChange(e, 'min')}/>
            <input type="text" placeholder="Max Amount"   value={maxAmount.max}
              onChange={(e) => handleNumericChange(e, 'max')}/>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <span>Receive</span>
            <button className="reset-btn" onClick={resetReceiveFee}>Reset</button>
          </div>
          <div className="input-group-d">
            <input type="text" placeholder="Min Amount"  value={receiveFee.min}
              onChange={(e) =>  handleNumericNums(e, 'min')}/>
            <input type="text" placeholder="Max Amount"  value={receiveFee.max}
            onChange={(e) =>  handleNumericNums(e, 'max')}/>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <span>Token</span>
            <button className="reset-btn" onClick={clearToken}>Reset</button>
          </div>
          <div className="radio-group">
      <FormControl>
        <RadioGroup
                   value={selectedToken}
                   onChange={(e) => setSelectedToken(e.target.value)}
          sx={{
            gap: 1.5,
          }}
        >
          {["solve", "1", "2", "3"].map((val, index) => (
            <FormControlLabel
              key={val}
              value={val}
              control={
                <Radio
                  disableRipple
                  icon={
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        display: "inline-block",
                        borderRadius: "50%",
                        border : " 1px  solid #fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  }
                  checkedIcon={
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1201FF, #C597FD)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckIcon style={{ color: "#1C1C1C", fontSize: 14 }} />
                    </span>
                  }
                />
              }
              label={`PIPE ${index}`}
              sx={{
                color: "white",
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
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
      </div>
      <div className="footer-buttons">
          <button className="reset-filter" onClick={ resetAll }>Reset Filter</button>
          <button className="apply-filter"><Link to='/dashboard/complete-swap-number'>Apply Filter</Link></button>
        </div>
    </div>
  );
}
