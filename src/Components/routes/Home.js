import React from 'react'
import './Home.css'
import  FAQ from '../Faq'


import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";


import sec1Img from '../../Images/iPhone 13-1.png'
import sec2Img from '../../Images/iPhone 13-2.png'
import sec3Img from '../../Images/iPhone 13-3.png'
import sec4Img from '../../Images/iPhone 13-4.png'
import videoBG from '../../Images/course-video.mp4'
// 
function Home() {
  return (
    <div className='home'>
      <div className='hero'>
        <div className='title'><p>One app,<br />all things credit</p></div>
        <div className='text'><p>Facilitationg loan transactions<br />between lenders and borrowers</p></div>
        <div className='download-btn'>
          <div className='btn-white'>
            <IoLogoGooglePlaystore className='gplaylogo' /> Download on <br /> Playstore</div>
          <div className='btn-black'>
            <AiOutlineApple className='applelogo' />
            Download on<br /> Playstore</div>
        </div>
      </div>
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
        <video className='hm-video' src={videoBG} muted />
        {/* <div className="overlay"></div> */}
        <div className='video-text'>
          <p>See how it works in lessthan a minute</p>
          <div><FaPlayCircle /></div>
        </div>
      </div>
      <FAQ />
    
    </div>
  )
}

export default Home
