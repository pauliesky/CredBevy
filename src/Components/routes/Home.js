import React from 'react'
import './Home.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";
// 
function Home() {
  return (
    <div className='home'>
      <div className='hero'>
        <div className='title'><p>One app,<br />all things credit</p></div>
        <div className='text'><p>Facilitationg loan transactions<br />between lenders and borrowers</p></div>
        <div className='download-btn'>
          <div className='btn-white'>
            <IoLogoGooglePlaystore className='gplaylogo'/> Download on <br /> Playstore</div>
          <div className='btn-black'>
            <AiOutlineApple className='applelogo' />
            Download on<br /> Playstore</div>
        </div>
      </div>
    </div>
  )
}

export default Home
