import React from 'react'
import './Partners.css'
import liquid20 from '../Home/Images/liquid20.png'
import { Link } from 'react-router-dom'
import Button from './Utilities/Button'


function Partners() {

  const buttonStyleWhite = {
    backgroundColor: 'white'
  }
  const buttonTextStyleBlack = {
    color: 'black'
  }

  return (
    <>
      <div className='partners'>
        <div className='partners__container' >
          <div className='partners__content-1'>
            <div><h3>News & Resoures</h3></div>
            <div>
              <h4>Latest Articles and Research</h4>
              <p>Get  instant loan disbursed to your account <br /> under 24 hrs of application.</p>
            </div>

          </div>
          <div className='partners__content-2'>
            <div><h3>Help & Support</h3></div>
            <div>
              <Link to='./LendingPartners' style={{ textDecoration: 'none' }}> <h4>Customer Hub</h4>  </Link>

              <p>Get  instant loan disbursed to your account <br />under 24 hrs of application.</p></div>
            <div>
              <Link to='/FAQs' style={{ textDecoration: 'none' }}> <h4>FAQs</h4> </Link>


              <p>Get  instant loan disbursed to your account <br /> under 24 hrs of application.</p></div>
            <div><h4>API Documentation</h4>
              <p>Get  instant loan disbursed to your account <br /> under 24 hrs of application.</p></div>
          </div>
         
          <div className='partners-content-3'>
            <div className='partners-content-3-img'>
              <img alt='img' src={liquid20} />
              <h2 className='partners-content-3-text'> Learn how to increase your credit score rating</h2>
            </div>
            <div className='partners__button'>
              <Button
                className={'partners-button__container'}
                buttonStyle={buttonStyleWhite}
                buttonTextStyle={buttonTextStyleBlack} label={'Learn More'} />
            </div>
            <div className='partners__footer'><p>Blog</p></div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Partners