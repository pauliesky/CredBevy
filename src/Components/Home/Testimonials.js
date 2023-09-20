import React from 'react'
import { FaStar } from 'react-icons/fa'

import './Testimonials.css'
import Testimonial from './Utilities/Testimonial'


export default function Testimonials() {


  
  return (
    <>
      <div className='testimony'>
        <h2>Testimonials</h2>

        <div className='Testimonial-container  mobile__testimonial-container'>

          <Testimonial
            testimonialName={'@Alexiscoker'}
            testimonialRate={[<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]}
            testimonialReview={'I had a positive experience borrowing through this marketplace. The application was straightforward, and the funds were quickly disbursed. Great service!'} />
          <Testimonial
            testimonialName={'@FundsInHand'}
            testimonialRate={[<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]}
            testimonialReview={'Finding the right loan has never been easier. The app\'s user-friendly interface and search filters make the process a breeze.'} />
          <Testimonial
            testimonialName={'@SmartInvestor99'} testimonialRate={[<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]}
            testimonialReview={'As an investor, I value the variety of loan products available here. It helps me diversify my portfolio and achieve my financial goals.'} />
        </div>
      </div>
    </>
  )
}

