
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


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/FAQs' element={<FAQs />} />
          <Route path='/ScoreRating' element={<ScoreRating />} />
          <Route path='/LoanOffers' element={<LoanOffers />} />
          <Route path='/Transfer' element={<Transfer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
