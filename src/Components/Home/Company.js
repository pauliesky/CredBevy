import React from 'react'
import './Company.css'
import { Link } from 'react-router-dom';

function Company() {
  return (

    <>

      <div className='company'>

        <div className='company__container' >
          <div className='company__content-1'>

            <Link to='/aboutus'>
              <div>
                <h3>About us</h3>
              </div>
            </Link>

            <Link to='/contactus'>
              <div>
                <h3>Contact Us</h3>
              </div>
            </Link>

            <div>
              <h3>Career</h3>
            </div>
            <div>
              <Link to='/News'> <h3>News and Media</h3>  </Link>

            </div>

          </div>


        </div>
      </div>
    </>

  )
}

export default Company