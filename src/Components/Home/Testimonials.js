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
            testimonialReview={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'} />
          <Testimonial
            testimonialName={'@Alexiscoker'}
            testimonialRate={[<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]}
            testimonialReview={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'} />
          <Testimonial
            testimonialName={'@Alexiscoker'} testimonialRate={[<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]}
            testimonialReview={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'} />
        </div>
      </div>
    </>
  )
}

