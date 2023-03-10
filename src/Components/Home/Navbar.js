import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import logoImg from '../Home/Images/Credbevy Logo.svg'
import { Link } from 'react-router-dom';
import Features from './Features';
import Partners from './Partners';
import Company from './Company';
import Button from './Utilities/Button';
import { UilAlignRight } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import Radium, { StyleRoot } from 'radium';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false)
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  const [mobile, setMobile] = useState(false)

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

  const sizeStyle = {
    '@media (max-width: 676px)': {
      width: '345px',
      background: 'blue',
    },

  }


  return (
    <>
      <nav className='navbar'>
        <Link to='/'>
          <img className='navbar__image' src={logoImg} alt='logo-img'></img>
        </Link>
        <div>

          <ul className={mobile ? 'nav__links-mobile' : 'nav-links'} onClick={() => setMobile(false)} >
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
            <div className='nav__company' >
              <div className='nav-link'>
                <div><li
                  ref={displayRef}
                  onClick={() => setDisplay(!display)
                  } >Company</li></div>
                <div><i class='bx bx-chevron-down' ></i></div>
              </div>
            </div>
            <div className='nav__Button'>
              <StyleRoot>  <Button
                buttonStyle={sizeStyle}
                label={'Get Started'} />    </StyleRoot>

            </div>

          </ul>
        </div>
        <button className='mobile-menu-icon'
          onClick={() => setMobile(!mobile)}
        >


          {mobile ? <UilTimes /> : <UilAlignRight />}

        </button >
      </nav>
      {showMenu && <Features />}
      {show && <Partners />}
      {display && <Company />}

    </>

  )
}

export default Radium(Navbar)