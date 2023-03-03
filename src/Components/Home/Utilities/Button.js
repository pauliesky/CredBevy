import React from 'react'
import './button.css'

export default function Button({ label, handleClick }) {
  return (
    <>

      <button
        className='button__container'
        onClick={handleClick}>
        <div className='button__container-text'>{label}</div>
      </button>

    </>
  )
}


