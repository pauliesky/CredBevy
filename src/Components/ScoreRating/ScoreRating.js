import React from 'react'
import './ScoreRating.css'
import sec1Img from '../Home/Images/iPhone 13-1.png'
import Iphone13 from '../Home/Images/iPhone 13-5.png'
import Iphone12 from '../Home/Images/iPhone 13-6.png'
import Download from '../Home/Download'



function ScoreRating() {
  return (
    <>
      <div className='scoreRate__hero'>
        <div className='scoreRate__head' >
          <h5>Features</h5>
        </div>
        <div className='scoreRate__title'>
          Bevy Score rating
        </div>
      </div>
      <div className='scoreRate__body-1' >
        <div className='scoreRate__1'>
          <div className='scoreRate__1-wrapper' >
            <div className='scoreRate__1-content'>
              <div className='scoreRate__1-head' >
                <p>Loan app like you've never seen before</p>
              </div>
              <div className='scoreRate__1-body'><p>
                Credbevy aims to be your one-stop shop for all matters relating to loans. Loan offers, credit scores, approval chances, and more.
                Get Started</p>
              </div>
              <div className='scoreRate__1-button'><p>Get Started</p></div>

            </div>
            <img alt='seci-img' src={sec1Img}></img>
          </div>
        </div>
      </div>
      <div className='scoreRate__body-2'>
        <div className='scoreRate__body-2__content-1' >
          <div className='scoreRate__body-2__content-1-head'  >
            <h3>See factors that affected
              your credit score</h3>
          </div>
          <div className='scoreRate__body-2__content-1-body' >
            <p>Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={Iphone13} alt='iphone'></img>
        </div>
        <div className='scoreRate__body-2__content-2' >
          <div className='scoreRate__body-2__content-2-head'  >
            <h3>Importance and tips for a
              good credit score</h3>
          </div>
          <div className='scoreRate__body-2__content-2-body' >
            <p>Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={Iphone12} alt='iphone'></img>
        </div>
      </div>
      <Download />
    </>
  )
}


export default ScoreRating
