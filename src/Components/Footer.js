import React from 'react'
import './Footer.css'
import logoImg from '../Images/B.png'

function Footer() {
  return (
    <div>
      <div className='footer1'>
        <div className='ft-logo'><img src={logoImg} alt='logo-img'></img></div>
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
          <h5>EMI Calculator</h5>
          <h5>Blog</h5>
          <h5>Security</h5>
        </div>
        <div className='company'>
          <h4>Company</h4>
          <h5>About</h5>
          <h5>Contact</h5>
          <h5>MEdia</h5>
          <h5>Partners</h5>
          <h5>Team</h5>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Footer