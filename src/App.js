
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Products from './Components/routes/Products';
import Features from './Components/routes/Features';
import Partners from './Components/routes/Partners';
import Company from './Components/routes/Company';
import Home from './Components/routes/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/features' element={<Features />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/company' element={<Company />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
