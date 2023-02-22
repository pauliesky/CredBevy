import React from 'react'
import './AboutUs.css'
import story1 from '../Home/Images/Frame 304.png'
import story2 from '../Home/Images/Frame 304 (2).png'
import story3 from '../Home/Images/Frame 304 (3).png'
import Download from '../Home/Download'
function AboutUs() {
  return (
    <>
      <div className='aboutUs__hero'>
        <div className='aboutUs__head' >
          <h5>About us</h5>
        </div>
        <div className='aboutUs__title'>
          Our Story
        </div>
      </div>

      <div className='aboutUs__body'>
        <div className='aboutUs__body-1' >
          <img src={story1} alt='story1'></img>
          <div className='aboutUs__body-1-text' >
            <h2>Our Story</h2>
            <p> Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
        </div>
        <div className='aboutUs__body-1' >
          <div className='aboutUs__body-1-text' >
            <h2>Our Mission</h2>
            <p> Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={story2} alt='story1'></img>
        </div>
        <div className='aboutUs__body-1' >
          <img src={story3} alt='story1'></img>
          <div className='aboutUs__body-1-text' >
            <h2>Our Vision</h2>
            <p> Facilitating access to financing for all </p>
          </div>
        </div>
      </div>

      <Download/>
    </>
  )
}

export default AboutUs
