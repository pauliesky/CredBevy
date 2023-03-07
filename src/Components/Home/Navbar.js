import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import logoImg from '../Home/Images/Credbevy Logo.svg'
import { Link } from 'react-router-dom';
import Features from './Features';
import Partners from './Partners';
import Company from './Company';
import Button from './Utilities/Button';

function Navbar() {

  // const loginHandler = () => {
  //   console.log('logged in')
  // }

  // 
  // onClick = {() => setOpen(!open)}


  // useEffect(() => {

  //   const closeDropDown = e => {

  //     if (e.path[0].tagName !== 'nav-link') {
  //       setOpen(false)
  //     } else {

  //     }
  //   }

  //   document.body.addEventListener('click', closeDropDown)
  //   return () => document.body.addEventListener('click', closeDropDown)
  // }, []);





  // const [open, setOpen] = useState(false)

  // useEffect(() => {
  //   const handler = () => setShowMenu(false);
  //   window.addEventListener('click', handler);
  //   return () => {
  //     window.removeEventListener('click', handler);
  //   };
  // }, [showMenu]);
  // const [navItem, setNavItem] = useState(Features)
  const [showMenu, setShowMenu] = useState(false)
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)
  // const dropdownRef = useRef(null)
  // useEffect(() => {

  //   const pageClickEvent = (e) => {
  //     if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
  //       setShowMenu(!showMenu);
  //     }
  //   }
  //   if (showMenu) {
  //     window.addEventListener('click', pageClickEvent)
  //   }
  //   return () => {
  //     window.removeEventListener('click', pageClickEvent)
  //   }

  // }, [])





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
            <div >
              <div className='nav-link'>
                <div><li>Products</li></div>
                <div className=''>
                  <i className='bx bx-chevron-down ' ></i>
                </div>
              </div>
            </div>
            <div  >
              <div className='nav-link'>

                <div ><li
                  onClick={() =>
                    setShowMenu(!showMenu) ||
                    setShow(false) ||
                    setDisplay(false)}
                >Features</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </div>
            <div  >
              <div className='nav-link'>
                <div><li
                  onClick={() =>
                    setShow(!show) ||
                    setShowMenu(false) ||
                    setDisplay(false)}   >Partners</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </div>
            <div  >
              <div className='nav-link'>
                <div><li onClick={() =>
                  setDisplay(!display) ||
                  setShow(false) ||
                  setShowMenu(false)} >Company</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </div>
          </ul>
        </div>
        <Button label={'Get Started'} />
      </nav>
      {showMenu && <Features />}
      {show && <Partners />}
      {display && <Company />}

    </>

  )
}

export default Navbar