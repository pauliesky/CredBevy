import React from 'react'
// import './Download.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";
// import liquid18 from '../Images/liquid-18.png'


export default function Download() {
  return (

    <>
      <div className='download'>
        <div className='download-container'>
          {/* <img src={liquid18} alt='liq18' className='liq18'></img> */}
          <p>Download the CredBevy App</p>
          <div className='download-button'>
            <div className='download-btn'>
              <div className='btn-white'>
                <IoLogoGooglePlaystore className='gplaylogo' /> Download on <br /> Playstore</div>
              <div className='btn-black'>
                <AiOutlineApple className='applelogo' />
                Download on<br /> Playstore</div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
