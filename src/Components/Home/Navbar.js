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

  const showMenuRef = useRef(null)
  const showRef = useRef(null)
  const displayRef = useRef(null)


  useEffect(() => {

    const pageClickEvent = (e) => {
      if (showMenuRef.current !== null && !showMenuRef.current.contains(e.target)) {
        setShowMenu(!showMenu);
      }
    }
    if (showMenu) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }

  }, [showMenu])

  useEffect(() => {

    const pageClickEvent = (e) => {
      if (showRef.current !== null && !showRef.current.contains(e.target)) {
        setShow(!show);
      }
    }
    if (show) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }

  }, [show])

  useEffect(() => {

    const pageClickEvent = (e) => {
      if (displayRef.current !== null && !displayRef.current.contains(e.target)) {
        setDisplay(!display);
      }
    }
    if (display) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }

  }, [display])




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
                  ref={showMenuRef}
                  onClick={() => setShowMenu(!showMenu)
                  }
                >Features</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </div>
            <div  >
              <div className='nav-link'>
                <div><li
                  ref={showRef}
                  onClick={() => setShow(!show)

                  }   >Partners</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </div>
            <div  >
              <div className='nav-link'>
                <div><li
                  ref={displayRef}
                  onClick={() => setDisplay(!display)
                  } >Company</li></div>
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