// import React, { useState} from 'react'
import './button.css'

export default function Button({ className, buttonTextStyle, buttonStyle, label, handleClick, icon
}) {

  // const [responsiveWidth, setResponsiveWidth] = useState(false)

  return (
    <>

      <button
        style={buttonStyle}
        className={className}
        // className='button__container'
        onClick={handleClick}>
        <div
          style={buttonTextStyle} className='button__container-text'>{label} </div>
        <div className='button__container-icon' > {icon} </div>
      </button>

    </>
  )
}


