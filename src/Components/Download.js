import React from 'react'
import './Download.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";


export default function Download() {
  return (

    <>
      <div className='download'>
        <div className='download-container'>
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
