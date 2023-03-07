import React from 'react'
import './Hero.css'
import ImgPink from './Images/Ellipse 1.png'
import ImgPink1 from './Images/Ellipse 5.png'
import ImgPurple from './Images/Ellipse 4.png'
import ImgBlue from './Images/Ellipse 3.png'
import DownloadButton from './Utilities/DownloadButton'
import { UilAppleAlt } from '@iconscout/react-unicons'


export default function Hero() {
  const buttonStyleWhite = {
    backgroundColor: 'white'
  }
  const buttonStyleBlack = {
    backgroundColor: 'black',
    color: 'white'
  }

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


            <div className='hero__title-text'><p>Facilitationg loan transactions between <span id='purple' >lenders </span> and <span id='purple' >borrowers</span></p>

            </div>
          </div>
        </div>

        <div className='hero__download-button'>
          <DownloadButton
            icon={<i class="uit uit-google-play"></i>}
            label={`Download on ${'PlayStore'}`}
            buttonStyle={buttonStyleWhite}
          />
          <DownloadButton
            label={'Download on AppStore'}
            buttonStyle={buttonStyleBlack}
            icon={<UilAppleAlt />}
          />
        </div>

      </div>
    </>
  )
}

