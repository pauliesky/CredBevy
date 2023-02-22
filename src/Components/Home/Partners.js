import React from 'react'
import './Partners.css'
// import ftImg from '../Home/Images/download.jpg'
import { Link } from 'react-router-dom'
function Partners() {

  const loginHandler = () => {
    console.log('logged in')
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
            <div><h4>Customer Hub</h4>
              <p>Get  instant loan disbursed to your account <br />under 24 hrs of application.</p></div>
            <div>
              <Link to='/FAQs'> <h4>FAQs</h4> </Link>


              <p>Get  instant loan disbursed to your account <br /> under 24 hrs of application.</p></div>
            <div><h4>API Documentation</h4>
              <p>Get  instant loan disbursed to your account <br /> under 24 hrs of application.</p></div>
          </div>
          <div className='partners__content-3'>
            <div className='partners__content-2-img'>
              {/* <img alt='img' src={ftImg} /> */}
              <h2 className='partners__content-2-text'>Try out CredBevy <br /> today, it will change <br /> the way you think <br /> about loans</h2>
              <div className='get-started-ft-btn' onClick={loginHandler}
              >Get Started</div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Partners