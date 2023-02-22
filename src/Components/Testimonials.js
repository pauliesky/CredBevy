import React from 'react'
import { FaStar } from 'react-icons/fa'

import './Testimonials.css'
import appStore from '../Images/App Store.png'


export default function Testimonials() {

  return (
    <>
      <div className='testimony'>
        <h2>Testimonials</h2>
        <div className='Testimonial-container'>
          <div className='test'>
            <div className='t-name'>@Alexiscoker</div>
            <div className='T-Rate'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className='T-Review'><p>Nice App,I was able to effectively able to do financila transactions without delay.</p></div>
            <div className='T-btn'><img alt='app-store' src={appStore}></img><p>App Store</p></div>
          </div>
          <div className='test'>
            <div className='t-name'>@Alexiscoker</div>
            <div className='T-Rate'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div className='T-Review'><p>Nice App,I was able to effectively able to do financila transactions without delay.</p>
            </div>
            <div className='T-btn'><img alt='app-store' src={appStore}></img><p>App Store</p></div>
          </div>
          <div className='test'>
            <div className='t-name'>@Alexiscoker</div>
            <div className='T-Rate'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className='T-Review'><p>Nice App,I was able to effectively able to do financila transactions without delay.</p>
            </div>
            <div className='T-btn'>
              <img alt='app-store' src={appStore}></img><p>App Store</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

