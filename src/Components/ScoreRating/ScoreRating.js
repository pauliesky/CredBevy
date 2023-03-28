import React from 'react'
import './ScoreRating.css'
import sec1Img from '../Home/Images/iPhone 13-1.png'
import Iphone13 from '../Home/Images/iPhone 13-5.png'
import Iphone12 from '../Home/Images/iPhone 13-6.png'
import liquid1 from '../Home/Images/liquid1.png'
import Download from '../Home/Download'
import Button from '../Home/Utilities/Button'




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
                <p>See your credit score and how to improve it</p>
              </div>
              <img className='scorerate__liquidImage'   src={liquid1} alt=''></img>
              <div className='scoreRate__1-body'><p>
                Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
              </div>
              <Button
                className={'scorerate-button__container  scorerate-button__container'}
                label={'Get Started'} />
            </div>
            <img  className='scorerate__iphone'  alt='seci-img' src={sec1Img}></img>
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
