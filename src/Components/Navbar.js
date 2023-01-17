import React from 'react'
import './Navbar.css'
import logoImg from '../Images/Credbevy Logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {

  const loginHandler = () => {
    console.log('logged in')
  }
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
            <Link style={{ textDecoration: 'none' }} to='/products'>
              <div className='nav-link'>
                <div><li>Products</li></div>
                <div className=''>
                  <i className='bx bx-chevron-down ' ></i>
                </div>
              </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/features'>
              <div className='nav-link'>
                <div><li>Features</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/features'>
              <div className='nav-link'>
                <div><li>Partners</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/features'>
              <div className='nav-link'>
                <div><li>Company</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </Link>
          </ul>
        </div>
        <div className='nav__btn' onClick={loginHandler}>
          <div className='nav__btn-content'>Get Started</div>
        </div>
      </nav>

    </>

  )
}

export default Navbar