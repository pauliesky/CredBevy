import React from 'react'
import './Highlights.css'
import Button from './Utilities/Button';

import sec1Img from '../Home/Images/iPhone 13-1.png'
import sec2Img from '../Home/Images/iPhone 13-2.png'
import sec3Img from '../Home/Images/iPhone 13-3.png'
import sec4Img from '../Home/Images/iPhone 13-4.png'



export default function Highlights() {
  return (
    <>
      <div className='features'>
        <div className='feature__1'>
          <div className='feature__1-content'>
            <div className='feature__1-head' >
              <p>Loan app like you've never seen before</p>
            </div>
            <div className='feature__1-body'><p>
              Credbevy aims to be your one-stop shop for all matters relating to loans. Loan offers, credit scores, approval chances, and more.
              Get Started</p>
            </div>
            <Button label={'Get Started'} />
          </div>
            <img alt='seci-img' src={sec1Img}></img>
        </div>
        <div className='feature__2'>
          <div className='feature__2-image'>
            <div className='feature__2-img'>
              <img alt='seci-img' src={sec2Img}></img>
            </div>
          </div>
          <div className='feature__2-content'>
            <div className='feature__2-head'>
              <p>Multiple Loan Offers</p>
            </div>
            <div className='feature__2-body'>
              <p>
                You may compare the loan estimates you receive from several lenders to see which one is giving you the best deal</p>
            </div>
          </div>
        </div>
        <div className='feature__3'>
          <div className='feature__3-content'>
            <div className='feature__3-head'>
              <p>Bevy Store</p>
            </div>
            <div className='feature__3-body'>
              <p>Credbevy allows you to view your credit ratings without charge and provides advice on how to improve them.</p>
            </div>
          </div>
          <div className='feature__3-image'>
            <div className='feature__3-img'>
              <img alt='seci-img' src={sec1Img}></img></div>
          </div>
        </div>
        <div className='feature__4'>
          <div className='feature__4-image' >
            <div className='feature__4-img'><img alt='seci-img' src={sec3Img}></img>
            </div>
          </div>
          <div className='feature__4-content'>
            <div className='feature__4-head'><p>Instant Transfer</p></div>
            <div className='feature__4-body' >
              <p>
                Credbevy enables you to send immediate transfers to any accepted financial institution of your choosing.</p>
            </div>
          </div>

        </div>
        <div className='feature__5'>
          <div className='feature__5-content'>
            <div className='feature__5-head'><p>Easy Payment</p></div>
            <div className='feature__5-body' ><p>With Credbevy, you have a number of easy loan repayment choices at your disposal.</p>
            </div>
          </div>
          <div className='feature__5-image'>
            <div className='feature__5-img'>
              <img alt='seci-img' src={sec4Img}></img></div>
          </div>
        </div>
        <div className='feature__video'>
          <div className='feature__video-content'>
            <p>
              See how it works in less than a minute</p>
          </div>
          <div className='feature__video-button'>
            <i class='bx bx-play-circle' ></i>
          </div>

        </div>
      </div>

    </>
  )
}

