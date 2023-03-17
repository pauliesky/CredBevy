
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Home/Footer'
import Home from './Components/routes/Home';
import Contact from './Components/Contact/ContactUs'
import AboutUs from './Components/AboutUs/AboutUs';
import FAQs from './Components/FAQs/FAQs';
import ScoreRating from './Components/ScoreRating/ScoreRating';
import LoanOffers from './Components/LoanOffers/LoanOffers';
import Transfer from './Components/Transfer/Transfer';
import Bills from './Components/Bills/Bills';
import PartnersIntegrations from './Components/Integrations/PartnersIntegrations';
import LendingPartners from './Components/LendingPartners/LendingPartners';
import News from './Components/News/News';
import NewsSingle from './Components/News/NewsSingle';
import TermsAndConditions from './Components/T&C/TermsAndConditions';
import Calculator from './Components/E.M.I/Calculator';
import DropDown from './Components/Home/DropDown';
import { useState } from 'react';

import MediaQuery from './MediaQuery';

function App() {

  const displayMobile = MediaQuery('(max-width: 676px)')


  return (
    <div className="App">
      <Router>
        {displayMobile ? <DropDown /> : <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/FAQs' element={<FAQs />} />
          <Route path='/ScoreRating' element={<ScoreRating />} />
          <Route path='/LoanOffers' element={<LoanOffers />} />
          <Route path='/Transfer' element={<Transfer />} />
          <Route path='/Bills' element={<Bills />} />
          <Route path='/PartnersIntegrations' element={<PartnersIntegrations />} />
          <Route path='/LendingPartners' element={<LendingPartners />} />
          <Route path='/News' element={<News />} />
          <Route path='/NewsSingle' element={<NewsSingle />} />
          <Route path='/Terms&Conditions' element={<TermsAndConditions />} />
          <Route path='/Calculator' element={<Calculator />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
