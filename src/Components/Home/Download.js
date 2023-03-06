import React from 'react'
import './Download.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";
// import liquid18 from '../Images/liquid-18.png'
import DownloadButton from './Utilities/DownloadButton'
import { UilAppleAlt } from '@iconscout/react-unicons'


export default function Download() {


  const buttonStyleWhite = {
    backgroundColor: 'white'
  }
  const buttonStyleBlack = {
    backgroundColor: 'black',
    color: 'white'
  }


  return (

    <>
      <div className='download'>
        <div className='download-container'>
          <p>Download the CredBevy App</p>
          <div className='download-button'>
            <div className='download__btn'>
              <DownloadButton
                icon={<i class="uit uit-google-play"></i>}
                label={`Download on  ${'PlayStore'}   `}
                buttonStyle={buttonStyleWhite}
              />
              <DownloadButton
                label={'Download on AppStore'}
                buttonStyle={buttonStyleBlack}
                icon={<UilAppleAlt />}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
