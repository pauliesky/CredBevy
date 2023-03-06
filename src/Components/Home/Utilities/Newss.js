import React from 'react'
import './Newss.css'

export default function Newss({ newsTitle, newsContent, newsProfileName }) {
  return (
    <>

      <div className='News__grid-item'>
        <div className='News__grid-item-image'></div>
        <div className='News__grid-item-content'>

          <div className='News__grid-item-content-title' >{newsTitle}</div>
          <div className='News__grid-item-content-body'>{newsContent}</div>
          <div className='News__grid-item-content-profile'>
            <div className='News__grid-item-content-profile-img' ></div>
            <div>{newsProfileName}</div>

          </div>

        </div>
      </div>



    </>
  )
}

