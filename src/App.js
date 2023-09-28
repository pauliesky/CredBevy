import React, { lazy } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
// import Footer from "./Components/Home/Footer";
// import Home from ;
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
import Waitlist from './Components/Waitlist/Waitlist';
import MediaQuery from './MediaQuery';
import ScrollToTop from './Components/ScrollToTop';
const Home = lazy(() => import('./Components/routes/Home'))


function App() {
  const displayMobile = MediaQuery("(max-width: 778px)");
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {displayMobile ? <DropDown /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/score-rating" element={<ScoreRating />} />
          <Route path="/loan-offers" element={<LoanOffers />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/bills" element={<Bills />} />
          <Route
            path="/partners-integrations"
            element={<PartnersIntegrations />}
          />
          <Route path="/lending-partners" element={<LendingPartners />} />
          <Route path="/news" element={<News />} />
          <Route path="/news-article" element={<NewsSingle />} />
          <Route path="/terms&condition" element={<TermsAndConditions />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
