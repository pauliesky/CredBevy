import React, { useState } from 'react'
import './Navbar.css'
import logoImg from '../Home/Images/Credbevy Logo.svg'
import { Link } from 'react-router-dom';
import Features from './Features';
import Partners from './Partners';
import Company from './Company';

function Navbar() {

  const loginHandler = () => {
    console.log('logged in')
  }

  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-logo'>
          <Link to='/'>
            <div>
              <img src={logoImg} alt='logo-img'></img>
            </div>
          </Link>
        </div>
        <div>
          <ul className='nav-links'>
            <Link style={{ textDecoration: 'none' }}>
              <div className='nav-link'>
                <div><li>Products</li></div>
                <div className=''>
                  <i className='bx bx-chevron-down ' ></i>
                </div>
              </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} >
              <div className='nav-link'>
                <div><li onClick={() => setOpen(!open)}>Features</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} >
              <div className='nav-link'>
                <div><li onClick={() => setShow(!show)} >Partners</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} >
              <div className='nav-link'>
                <div><li onClick={() => setDisplay(!display)}>Company</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </Link>
          </ul>
        </div>
        <div className='nav__btn' onClick={loginHandler}>
          <div className='nav__btn-content'>Get Started</div>
        </div>
      </nav>
      {open && <Features />}
      {show && <Partners />}
      {display && <Company />}

    </>

  )
}

export default Navbar