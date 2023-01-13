import React from 'react'
import './Highlights.css'

import { FaPlayCircle } from "react-icons/fa";
import sec1Img from '../Images/iPhone 13-1.png'
import sec2Img from '../Images/iPhone 13-2.png'
import sec3Img from '../Images/iPhone 13-3.png'
import sec4Img from '../Images/iPhone 13-4.png'
import phoneUsage from '../Images/phone in-use1.jpg'

export default function Highlights() {
  return (
    <>
      <div className='features'>
        <div className='sec-1'>
          <div className='sec1-text'>
            <div className='title box1' ><p>Loan app like you've never seen before</p></div>
            <div className='body box2'><p>Loan app like you've never seen before
              Credbevy aims to be your one-stop shop for all matters<br /> relating to loans. Loan offers, credit scores, approval<br /> chances, and more.
              Get Started</p></div>
            <div className='login'>Get Started</div>
          </div>
          <div className='sec1-img'><img alt='seci-img' src={sec1Img}></img></div>
        </div>
        <div className='sec-2'>
          <div className='sec2-img'><img alt='seci-img' src={sec2Img}></img></div>
          <div className='sec2-text'>
            <div className='title box3'><p>Multiple Loan Offers</p></div>
            <div className='body box4' ><p>Multiple loan offers
              You may compare the loan estimates you receive from several lenders to see which one is giving you the best deal</p></div>
          </div>
        </div>
        <div className='sec-3'>
          <div className='sec3-text'>
            <div className='title box5'><p>Bevy Store</p></div>
            <div className='body box6' ><p>Credbevy allows you to view your credit ratings without charge and provides advice on how to improve them.</p>
            </div>
          </div>
          <div className='sec3-img'><img alt='seci-img' src={sec1Img}></img></div>
        </div>
        <div className='sec-2'>
          <div className='sec2-img'><img alt='seci-img' src={sec3Img}></img></div>
          <div className='sec2-text'>
            <div className='title box3'><p>Instant Transfer</p></div>
            <div className='body box4' ><p>Instant Transfers
              Credbevy enables you to send immediate transfers to any accepted financial institution of your choosing.</p></div>
          </div>
        </div>
        <div className='sec-3'>
          <div className='sec3-text'>
            <div className='title box5'><p>Easy Payment</p></div>
            <div className='body box6' ><p>With Credbevy, you have a number of easy loan repayment choices at your disposal.</p>
            </div>
          </div>
          <div className='sec3-img'><img alt='seci-img' src={sec4Img}></img></div>
        </div>
      </div>
      <div className='home-v'>
        {/* <div className="overlay"></div> */}
        <img alt='img' className='hm-video' src={phoneUsage} ></img>
        <div className='video-text'>
          <p>See how it works in less than a minute</p>
          <div className='play-btn'><FaPlayCircle /></div>
        </div>
      </div>

    </>
  )
}

