import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInSection from './Components/SignInSection';
import SideNav from './Components/SideNav';
import MainDataSection from './Components/MainDataSection';
import InsuredUser from './Components/InsuredUser';
import NoInsurance from './Components/NoInsurance';
import './App.css';
import UserTranactions from './Components/UserTransactions';

function App() {
  return (
    <Router>
      <Routes>
        {/* Sign In Page */}
        <Route path="/" element={<SignInSection />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={
          <div className='main-1'>
            <div className='second-circle-shadow'>
              <img src="/Pictures/vector.svg" alt="background" />
            </div>
            <SideNav />
            <MainDataSection />
          </div>
        } />

        {/* Insured Users */}
        <Route path="/insured-users" element={
           <div className='main-1'>
                <div className='second-circle-shadow'>
                  <img src="/Pictures/vector.svg" alt="background" />
                </div>
            <SideNav />
            <InsuredUser />
          </div>
        } />
                  <Route path="/no-insurance" element={
           <div className='main-1'>
                <div className='second-circle-shadow-3'>
                  <img src="/Pictures/vector.svg" alt="background" />
                </div>
            <SideNav />
            <NoInsurance/>
          </div>
        } />

          
          {/* Uner Transaction */}

          <Route path="/userTransactions" element={
           <div className='main-1'>
                <div className='second-circle-shadow'>
                  <img src="/Pictures/vector.svg" alt="background" />
                </div>
            <SideNav />
            <UserTranactions/>
          </div>
        } />


      </Routes>
    </Router>
  );
}

export default App;
