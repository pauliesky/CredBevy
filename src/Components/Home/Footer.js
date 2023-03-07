import React from 'react'
import './Footer.css'
import logoImg from '../Home/Images/Credbevy Logo.svg'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
      <div className='footer-1-container'>
        <div className='footer__wrapper'>
          <div className='footer-1'>
            <div className='footer-1-content'>
              <div className='ft-logo'><img src={logoImg} alt='logo-img'></img>
              </div>
              <div className='products'>
                <h4 className='head'>Products</h4>
                <h5>Features</h5>
                <h5>Integrations</h5>
                <h5>Support</h5>
                <h5>Why CredBevy</h5>
              </div>
              <div className='resources'>
                <h4>Resources</h4>
                <h5>Guides</h5>
                <Link to='/Calculator' style={{ textDecoration: 'none' }}><h5>EMI Calculator</h5></Link>

                <h5>Blog</h5>
                <h5>Security</h5>
              </div>
              <div className='footer__company'>
                <h4>Company</h4>
                <h5>About</h5>
                <h5>Contact</h5>
                <h5>Media</h5>
                <h5>Partners</h5>
                <h5>Team</h5>
              </div>   </div>

          </div>
        </div>

      </div>
      <div className='divider'>
        <hr></hr>
      </div>
      <div className='footer2'>

        <div className='footer2__wrapper'>
          <div className='footer2-text'>
            <div className='all_right'>2023 CredBevy. All right reserved.</div>
            <div className='under_line'  >Privacy</div>
            <Link to='/Terms&Conditions' style={{ textDecoration: 'none' }} > <div className='under_line'>Terms of Service</div> </Link>
            <div className='under_line'>Cookies Settings</div>
          </div>
          <div className='footer-icons'>
            <div className='icon'><FaFacebookF /></div>
            <div className='icon'><FaInstagram /></div>
            <div className='icon'><FaTwitter /></div>
            <div className='icon'><FaLinkedin /></div>
          </div>


        </div>

      </div>
      <div className='foot-note'>
        <div className='foot-note__wrapper'>
          <p>CredBevy and featured clients are financial technology companies and not a bank. Banking services are provided by Credbevy's partner banks who are Member FDIC.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer