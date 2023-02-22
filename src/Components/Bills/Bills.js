import React from 'react'
import './Bills.css'
import Download from '../Home/Download'
import iPhone13_7 from '../Home/Images/iPhone 13-7.png'
import iPhone13_9 from '../Home/Images/iPhone 13-9.png'

function Bills() {
  return (
    <>

      <div className='Bills__hero'>
        <div className='Bills__head' >
          <h5>Features</h5>
        </div>
        <div className='Bills__title'>
          Pay Bills
        </div>
      </div>
      <div className='Bills__body-1' >
        <div className='Bills__1'>
          <div className='Bills__1-wrapper' >
            <div className='Bills__1-content'>
              <div className='Bills__1-head' >
                <p>Multiple loan
                  offers just for you</p>
              </div>
              <div className='Bills__1-body'><p>
                Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
              </div>
              <div className='Bills__1-button'><p>Get Started</p></div>

            </div>
            <img alt='seci-img' src={iPhone13_7}></img>
          </div>
        </div>
      </div>
      <div className='Bills__body-2'>
        <div className='Bills__body-2__content-1' >
          <div className='Bills__body-2__content-1-head'  >
            <h3>You get to sort loan option
              as you wish</h3>
          </div>
          <div className='Bills__body-2__content-1-body' >
            <p>Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={iPhone13_9} alt='iphone'></img>
        </div>
        <div className='Bills__body-2__content-2' >
          <div className='Bills__body-2__content-2-head'  >
            <h3>Customise your own loans
              Set your terms</h3>
          </div>
          <div className='Bills__body-2__content-2-body' >
            <p>Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={iPhone13_9} alt='iphone'></img>
        </div>
      </div>
      <Download />
    </>
  )
}

export default Bills
