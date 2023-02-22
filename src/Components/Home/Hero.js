import React from 'react'
import './Hero.css'
import ImgPink from './Images/Ellipse 1.png'
import ImgPink1 from './Images/Ellipse 5.png'
import ImgPurple from './Images/Ellipse 4.png'
import ImgBlue from './Images/Ellipse 3.png'

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero__container'>
          <img alt='ellipse 1' className='pink' src={ImgPink} ></img>
          <img alt='ellipse 2' className='pink1' src={ImgPink1} ></img>
          <img alt='ellipse 3' className='purple' src={ImgPurple} ></img>
          <img alt='ellipse 4' className='blue' src={ImgBlue} ></img>
          <div className='hero__title'>
            <p className='hero__title-head'>One app,<br />all things credit</p>
            <div className='hero__title-text'><p>Facilitationg loan transactions<br />between lenders and borrowers</p></div>
          </div>
        </div>

        <div className='download-btn'>
          <div className='white__button'>
            <div><i class='bx bxl-play-store' ></i></div>
            <div className='white__button-text'> Download on Playstore</div>
          </div>
          <div className='black__button'>
            <div><i class='bx bxl-apple'></i></div>
            <div className='black__button-text'>Download on Appstore</div>
          </div>
        </div>

      </div>
    </>
  )
}

