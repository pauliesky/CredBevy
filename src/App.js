
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Home/Footer'
import Home from './Components/routes/Home';
import Contact from './Components/Contact/ContactUs'
import AboutUs from './Components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
