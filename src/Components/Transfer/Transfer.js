import React from 'react'
import './Transfer.css'
import Download from '../Home/Download'
import iPhone13_7 from '../Home/Images/iPhone 13-7.png'
import iPhone13_8 from '../Home/Images/iPhone 13-8.png'
import liquid13 from '../Home/Images/liquid13.png'
import liquid6 from '../Home/Images/liquid6.png'
import Button from '../Home/Utilities/Button'
import Footer from "../Home/Footer";




function Transfer() {
  return (
    <>
      <div className='Transfer__hero'>
        <div className='Transfer__head' >
          <h5>Features</h5>
        </div>
        <div className='Transfer__title'>
          Instant Transfers
        </div>
      </div>
      <div className='Transfer__body-1' >
        <div className='Transfer__1'>
          <div className='Transfer__1-wrapper' >
            <div className='Transfer__1-content'>
              <div className='Transfer__1-head' >
                <p>Multiple loan
                  offers just for you</p>
              </div>
              <div className='Transfer__1-body'><p>
                Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
              </div>
              <Button
                className={'transfer-button__container'}
                label={'Get Started'} />

            </div>
            <img className='transfer__liquidImage' src={liquid13} alt=''></img>
            <img className='transfer__liquidImage6' src={liquid6} alt=''></img>

            <div className='transfer__image-container' >
              <img className='transfer__image' alt='seci-img' src={iPhone13_7}></img>
            </div>
          </div>
        </div>
      </div>
      <div className='Transfer__body-2'>
        <div className='Transfer__body-2__content-1' >
          <div className='Transfer__body-2__content-1-head'  >
            <h3>You get to sort loan option
              as you wish</h3>
          </div>
          <div className='Transfer__body-2__content-1-body' >
            <p>Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={iPhone13_8} alt='iphone'></img>
        </div>
        <div className='Transfer__body-2__content-2' >
          <div className='Transfer__body-2__content-2-head'  >
            <h3>Customise your own loans Set your terms</h3>
          </div>
          <div className='Transfer__body-2__content-2-body' >
            <p>Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={iPhone13_8} alt='iphone'></img>
        </div>
      </div>
      <Download />
      <Footer />
    </>
  )
}

export default Transfer
