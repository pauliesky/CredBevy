import React from 'react'
import './Features.css'
import ftImg from '../../Images/download.jpg'
import DOWNLOAD from '../Download'

function Features() {

  const loginHandler = () => {
    console.log('logged in')
  }
  return (
    <>
      <div className='feature-container'>
        <div className='feature-content-1'>
          <div><h3>Features</h3></div>
          <div>
            <h4>Multiple loan offers</h4>
            <p>Get  instant loan disbursed to your account under 24 hrs of application.</p>
          </div>
          <div>
            <h4>Credit Score</h4>
            <p>View your credit score rating and know where or how to improve it.</p>
          </div>
          <div>
            <h4>Free Transfer</h4>
            <p>Transfer money for free from your loan wallets to any bank account.</p>
          </div>
          <div>
            <h4>Pay Bills</h4>
            <p>Pay for your airtime, data, light, water, cable bill at your convinience</p>
          </div>
        </div>
        <div className='feature-content-2'>
          <div><h3>Integrations</h3></div>
          <div><h4>API Integrations</h4>
            <p>Get  instant loan disbursed to your account under 24 hrs of application.</p></div>
          <div><h4>Partner Integrations</h4>
            <p>Get  instant loan disbursed to your account under 24 hrs of application.</p></div>
        </div>
        <div className='feature-content-2'>
          <div className='feature-content-2-img'>
            <img alt='img' src={ftImg} />
            <h2 className='feature-content-2-text'>Try out CredBevy <br /> today, it will change <br /> the way you think <br /> about loans</h2>
            <div className='get-started-ft-btn' onClick={loginHandler}
            >Get Started</div>
          </div>
        </div>
      </div>
      <DOWNLOAD />

    </>
  )
}

export default Features