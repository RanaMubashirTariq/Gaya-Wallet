import React , {useState} from 'react'
// import './UserTransaction2.css'

export default function UserTransaction2() {


    const [activeButton, setActiveButton] = useState('Swaps');
   
     const handleButtonClick = (buttonName) => {
       setActiveButton(buttonName);
     };
   
   
   
   
       const [formData, setFormData] = useState({
           name: '',
           email: '',
           wallet: '',
           subscription: '',
           insuredAmount: '',
           insuranceFee: ''
         });
       
         const handleChange = (e) => {
           const { name, value } = e.target;
       
           if (name === 'name' || name === 'subscription') {
             if (/^[a-zA-Z\s]*$/.test(value)) {
               setFormData({ ...formData, [name]: value });
             }
           } else if (name === 'insuredAmount' || name === 'insuranceFee') {
             if (/^\d*$/.test(value)) {
               setFormData({ ...formData, [name]: value });
             }
           } else {
             setFormData({ ...formData, [name]: value });
           }
         };
   



  return (
    <div className='swap-number-upper-div'>

    <div className="user-details-container">
             <div className="user-details-card">
                  <div className="user-details-flex">
    
                    {/* Name */}
    
                    <div className="input-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Geroge" />
                    </div>
    
                    {/* Email */}
    
                    <div className="input-group">
                    <label>Email</label>
                     <input  type="email"  name="email"  value={formData.email}  onChange={handleChange}   placeholder="loremispum@gmail.com" /> </div>
                      
                      </div>
    
                      <div className="user-details-flex">
                    {/* Wallet Address */}
    
                    <div className="input-group">
                    <label>Wallet Address</label>
                    <input type="text" name="wallet" value={formData.wallet} onChange={handleChange} placeholder="1Ffmb........N455paPH"/>
                    </div>
    
                    {/* Subscription */}
    
                    <div className="input-group">
                    <label>Subscription</label>
                    <input type="text" name="subscription" value={formData.subscription} onChange={handleChange} placeholder="Monthly" />
                    </div>
                   
    
                  </div>
                    
    
    
    
                  <div className="user-details-flex">
    
                    {/* Insured Amount */}
    
                    <div className="input-group">
                    <label>Insured Amount</label>
                    <input type="text"  name="insuredAmount" value={formData.insuredAmount}   onChange={handleChange}   placeholder="$150,000" />
                    </div>
    
                    {/* Insurance Fee */}
    
                    <div className="input-group">
                    <label>Insurance Fee</label>
                    <input type="text" name="insuranceFee" value={formData.insuranceFee} onChange={handleChange} placeholder="$1,500" />
                    </div>
    
                </div>
        </div>
      </div>
    
    
               {/* {ButtonS [PART]} */}
                 
                     <div className='three-btn-div'>
                        <button   className={activeButton === 'Transfers' ? 'active' : ''}
                                 onClick={() => handleButtonClick('Transfers')}>Transfers</button>
    
                        <button   className={activeButton === 'Swaps' ? 'active' : ''}
                                  onClick={() => handleButtonClick('Swaps')}>Swaps</button>
    
                        <button   className={activeButton === 'Insurance Payments' ? 'active' : ''}
            onClick={() => handleButtonClick('Insurance Payments')}>Insurance Payments</button>
                     </div>
    
              </div>
  )
}
