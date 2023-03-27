import React from 'react'
import './Download.css'
import liquid18 from './Images/liquid18.png'
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
        <span className='download__overlay  mobile-download__overlay'></span>
        <div className='download__image' alt='liq'></div>
        <div className='download-container'>
          <div className='download-container-title'  >  <p>Download the CredBevy App</p>        </div>

          <div className='download-button'>
            <div className='download__btn mobile__download-btn'>
              <DownloadButton

                classNameButtonContainer='download__button-container'
                classNameButtonText='download__button-text'
                icon={<i class="uit uit-google-play"></i>}
                label={`Download on  ${'PlayStore'} `}
                buttonStyle={buttonStyleWhite}
              />
              <DownloadButton
                classNameButtonContainer='download__button-container'
                classNameButtonText='download__button-text'
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
