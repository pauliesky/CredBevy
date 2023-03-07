import React from 'react'
import './Download.css'
// import liquid18 from './Images/liquid18.png'
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
        {/* <img alt='liq' src={liquid18}></img> */}
        <div className='download-container'>
          <div className='download-container-title'  >  <p>Download the CredBevy App</p>        </div>
          
          <div className='download-button'>
            <div className='download__btn'>
              <DownloadButton
                icon={<i class="uit uit-google-play"></i>}
                label={`Download on  ${'PlayStore'} `}
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
