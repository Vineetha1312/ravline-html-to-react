import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Pricing from './pages/Pricing';
import ProtectionPlans from './pages/ProtectionPlans';
import BusinessFunding from './pages/BusinessFunding';
import CreditRestoration from './pages/CreditRestoration';
import WealthEducation from './pages/WealthEducation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path='/appointment' element={<Appointment/>}/>
          <Route exact path='/pricing' element={<Pricing/>}/>
          <Route exact path='protection-plans' element={<ProtectionPlans/>}/>
          <Route exact path='/business-funding' element={<BusinessFunding/>}/>
          <Route exact path='/credit-restoration' element={<CreditRestoration/>}/>
          <Route exact path='/wealth-education' element={<WealthEducation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
