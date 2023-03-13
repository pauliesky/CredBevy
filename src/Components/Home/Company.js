import React from 'react'
import './Company.css'
import { Link } from 'react-router-dom';

function Company() {
  return (

    <>

      <div className='company'>

        <div className='company__container' >
          <div className='company__content-1'>

            <Link to='/aboutus' style={{ textDecoration: 'none' }}>
              <div className='company__content-link'>
                <h3>About us</h3>
              </div>
            </Link>

            <Link to='/contactus' style={{ textDecoration: 'none' }}>
              <div className='company__content-link'  >
                <h3>Contact Us</h3>
              </div>
            </Link>

            <div className='company__content-link'  >
              <h3>Career</h3>
            </div>

            <Link to='/News' style={{ textDecoration: 'none' }}> <div className='company__content-link' >
              <h3>News and Media</h3>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Company