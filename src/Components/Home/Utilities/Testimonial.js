import React from 'react'
import './Testimonial.css'
import appStore from '../Images/App Store.png'
// 
export default function Testimonial({ testimonialName, testimonialRate, testimonialReview }) {
  return (
    <>
  
        <div className='test'>
          <div className='t-name'>{testimonialName}</div>
          <div className='T-Rate'>
            {testimonialRate}
          </div>
          <div className='T-Review'><p>{testimonialReview}</p></div>
          <div className='T-btn'><img alt='app-store' src={appStore}></img><p>App Store</p></div>
        
      </div>



    </>
  )
}

