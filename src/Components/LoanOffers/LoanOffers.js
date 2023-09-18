import React from 'react'
import './LoanOffers.css'
import Download from '../Home/Download'
import iPhone13_7 from '../Home/Images/iPhone 13-7.png'
import iPhone13_8 from '../Home/Images/iPhone 13-8.png'
import iPhone13_9 from '../Home/Images/iPhone 13-9.png'
import Button from '../Home/Utilities/Button'
import Footer from "../Home/Footer";

function LoanOffers() {
  return (
    <>
      <div className='loanOffer__hero'>
        <div className='loanOffer__head' >
          <h5>Features</h5>
        </div>
        <div className='loanOffer__title'>
          Multiple Loan Offers
        </div>
      </div>
      <div className='loanOffer__body-1' >
        <div className='loanOffer__1'>
          <div className='loanOffer__1-wrapper' >
            <div className='loanOffer__1-content'>
              <div className='loanOffer__1-head' >
                <p>Multiple loan
                  offers just for you</p>
              </div>
              <div className='loanOffer__1-body'><p>
                Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
              </div>

              <Button

                className={'loanoffer-button__container mobile-loanoffer-button__container'}
                label={'Get Started'} />



            </div>
            <div className='loanOffer__1-wrapper-image'  >
              <img alt='seci-img' src={iPhone13_7}></img>
            </div>
          </div>
        </div>
      </div>
      <div className='loanOffer__body-2'>
        <div className='loanOffer__body-2__content-1' >
          <div className='loanOffer__body-2__content-1-head'  >
            <h3>You get to sort loan option
              as you wish</h3>
          </div>
          <div className='loanOffer__body-2__content-1-body' >
            <p>Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={iPhone13_8} alt='iphone'></img>
        </div>
        <div className='loanOffer__body-2__content-2' >
          <div className='loanOffer__body-2__content-2-head'  >
            <h3>Customise your own loans
              Set your terms</h3>
          </div>
          <div className='loanOffer__body-2__content-2-body' >
            <p>Instead of having to download multiple loan app and keep trying your luckto see which ones will offer you a loan </p>
          </div>
          <img src={iPhone13_9} alt='iphone'></img>
        </div>
      </div>
      <Download />
      <Footer />
    </>
  )
}

export default LoanOffers
