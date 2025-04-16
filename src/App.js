import './App.css';
import SignInSection from './Components/SignInSection';
import DrawerSection from './Components/DrawerSection'
import SideNav from './Components/SideNav';
import MainDataSection from './Components/MainDataSection';

function App() {
  return (
    <div>
        {/* <SignInSection/> */}
        {/* <DrawerSection/> */}
        <div className='main-1'>
        <div className='second-circle-shadow'><img src="/Pictures/vector.svg"/></div>
        <SideNav/>
        <MainDataSection/>
        </div>
    </div>
  );
}

export default App;
