import React from 'react'
import './DownloadButton.css'

export default function DownloadButton({ label, buttonStyle, icon, handleClick }) {
  return (
    <>
      <button
        className='download__button'
        onClick={handleClick}>
        <div
          className='download__button-container'
          style={buttonStyle}>
          <div
            className='download__button-icon'>
            {icon}
          </div>
          <div
            className='download__button-text'>
            {label}
          </div>
        </div>
      </button>


    </>
  )
}
