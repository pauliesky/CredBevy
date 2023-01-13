import React from 'react'
import './Navbar.css'
import { FaAngleDown } from "react-icons/fa";
import logoImg from '../Images/Credbevy Logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {

  const loginHandler = () => {
    console.log('logged in')
  }
  return (
    <>
      <div className='navbar-container'>
        <nav className='navbar'>
          <Link to='/'><div className='nav-logo'><img src={logoImg} alt='logo-img'></img></div></Link>
          <ul className='nav-links'>
            <Link to='/products'  className='nav-links'><li>Products<FaAngleDown className='arrow-down' /></li></Link>
            <Link to='/features'  className='nav-links'><li>Features<FaAngleDown className='arrow-down' /></li></Link>
            <Link to='/partners'  className='nav-links'><li>Partners<FaAngleDown className='arrow-down' /></li></Link>
            <Link to='/company'  className='nav-links'><li>Company<FaAngleDown className='arrow-down' /></li></Link>
          </ul>
          <div className='get-started-btn' onClick={loginHandler}
          >Get Started</div>
        </nav>
      </div>

    </>

  )
}

export default Navbar