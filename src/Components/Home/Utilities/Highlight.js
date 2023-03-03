import React from 'react'
// import sec2Img from '../Images/iPhone 13-2.png'
import './Highlight.css'

export default function Highlight({ title, body, highlightStyle,image,frameColor }) {
  return (
    <>
      <div className='highlight__container'
        style={highlightStyle}
      >
        <div className='hightlight__frame'
        style={frameColor}
        >
          <img alt='seci-img' src={image}></img>
        </div>
        <div className='highlight__content'>
          <div className='highlight__title'>
            <p>{title}</p>
          </div>
          <div className='highlight__body'>
            <p>
              {body}</p>
          </div>
        </div>
      </div>

    </>
  )
}

