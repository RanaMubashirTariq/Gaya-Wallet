import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInSection from './Components/SignInSection';
import MainDataSection from './Components/MainDataSection';
import InsuredUser from './Components/InsuredUser';
import NoInsurance from './Components/NoInsurance';
import './App.css';
import UserTranactions from './Components/UserTransaction/UserTransactions';
import LayOut from './Components/LayOut'
import CompleteSwapNumber from './Components/UserTransaction/CompleteSwapNumber'
import UserTransaction2 from './Components/UserTransaction/UserTransaction2';
import UserTransactionComplete from './Components/UserTransaction/UserTransactionComplete'
import NoUserTransaction from './Components/UserTransaction/NoUserTransaction';
import PaymentTracking1 from './Components/PaymentTrackingSection/PaymentTracking1';
import Pt2 from './Components/PaymentTrackingSection/Pt2';
import NoPaymentTracking from './Components/PaymentTrackingSection/NoPaymentTracking';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignInSection />} />
  
        <Route path="/dashboard" element={<LayOut />}>
        <Route index element={<MainDataSection />} />

               {/* Insurance Payment section*/}
        <Route path="insured-users" element={<InsuredUser />} /> 
        <Route path="no-user" element={<NoInsurance/>} />  

          {/* User Transaction section*/}
        <Route path="/dashboard/userTransactions" element={<UserTranactions />} />
        <Route path='complete-swap-number' element={<CompleteSwapNumber/>}/> 
        <Route path="user-transaction-2" element={<UserTransactionComplete/>} />  
        <Route path="no-transaction-monitoring" element={<NoUserTransaction/>} /> 
        {/* Payment Traking section */}
        <Route path="payment-tracking" element={<PaymentTracking1/>} /> 
        <Route path="payment-tracking-2" element={<Pt2/>} /> 
        <Route path="no-payment-tracking" element={<NoPaymentTracking/>} /> 
      </Route>
    </Routes>
  </Router>
  
  );
}

export default App;
