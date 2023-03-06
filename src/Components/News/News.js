import React from 'react'
import './News.css'
import Download from '../Home/Download'
import { Link } from 'react-router-dom'
import Newss from '../Home/Utilities/Newss'

function News() {
  return (
    <>

      <div className='News__head' >
        <div className='News__head-title' >
          <h2>
            CredBevy News
          </h2>
        </div>
        <div className='News__head-body' >
          <p>News related to Credbevy all around the world gathered here
          </p>
        </div>
      </div>
      <div className='News__searchbar'>
        <input type="text" placeholder="Search Something.." />
      </div>
      <div className='News__grid-container' >


        <div className='News__grid-item1'>

          <div className='News__grid-item1-image'></div>
          <div className='News__grid-item1-content'>
            <Link to='/NewsSingle'>
              <div className='News__grid-item1-content-head'><h4>Credbevy raises unknown amount in undisclosed round funding </h4></div></Link>
            <div className='News__grid-item1-content-body'><p>
              News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......</p>
            </div>
            <div className='News__grid-item1-content-profile'>
              <div className='News__grid-item1-content-profile-img' ></div>
              <div>Oripeloye Timilehin</div>
            </div>
          </div>
        </div>
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
        <Newss
          newsTitle={'Credbevy raises unknown amount in indisclosed round'}
          newsContent={'News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......'} newsProfileName={'Oripeloye Timilehin'} />
   
      </div>

      <Download />
    </>
  )
}

export default News
