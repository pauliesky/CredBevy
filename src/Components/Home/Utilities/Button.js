import React from 'react'
import './button.css'

export default function Button({ buttonTextStyle,  buttonStyle, label, handleClick, icon
}) {
  return (
    <>

      <button
        style={buttonStyle}
        className='button__container'
        onClick={handleClick}>
        <div
          style={buttonTextStyle} className='button__container-text'>{label} </div>
        <div className='button__container-icon' > {icon} </div>
      </button>

    </>
  )
}


