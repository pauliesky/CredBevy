import React from 'react'
import './Hero.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero-title'><p>One app,<br />all things credit</p></div>
        <div className='text'><p>Facilitationg loan transactions<br />between lenders and borrowers</p></div>
        <div className='download-btn'>
          <div className='btn-white'>
            <IoLogoGooglePlaystore className='gplaylogo' /> Download on <br /> Playstore</div>
          <div className='btn-black'>
            <AiOutlineApple className='applelogo' />
            Download on<br /> Appstore</div>
        </div>
      </div>
    </>
  )
}

