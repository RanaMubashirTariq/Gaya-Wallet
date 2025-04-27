import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInSection from './Components/SignInSection';
import SideNav from './Components/SideNav';
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


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignInSection />} />
  
        <Route path="/dashboard" element={<LayOut />}>
        <Route index element={<MainDataSection />} />
        <Route path="insured-users" element={<InsuredUser />} /> 
        <Route path="no-user" element={<NoInsurance/>} />  
        <Route path="user-transactions" element={<UserTranactions />} />
        <Route path='complete-swap-number' element={<CompleteSwapNumber/>}/> 
        <Route path="user-transaction-2" element={<UserTransactionComplete/>} />  
        <Route path="no-transaction-monitoring" element={<NoUserTransaction/>} /> 
      </Route>
    </Routes>
  </Router>
  
  );
}

export default App;
