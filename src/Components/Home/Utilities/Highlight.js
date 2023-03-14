import React from 'react'
// import sec2Img from '../Images/iPhone 13-2.png'
import './Highlight.css'
// import { device } from '../Device';
// import styled from 'styled-components'

export default function Highlight({ className, title, body, highlightStyle, image, frameColor }) {



  //   const FlexDirection = styled.div`

  // @media ${device.mobile}{
  //   // flex-direction: column;
  //   background-color:red;
  // }
  // `


  return (
    <>
      {/* <FlexDirection></FlexDirection> */}
      <div
        className={className}
      // className='highlight__container'
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

