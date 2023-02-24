import React from 'react'
import './News.css'

function News() {
  return (
    <>
      <div className='News__head' >
        <div className='News__head-title' >
          <h2>
            CredBevy's News
          </h2>
        </div>
        <div className='News__head-body' >
          <p>News related to Credbevy all around the world gathered here
          </p>
        </div>
      </div>
      <div className='News__searchbar'>
        <input type="text" placeholder="Search.." />
      </div>
      <div className='News__grid-container' >
        <div className='News__grid-item1'>1</div>
        <div className='News__grid-item'>2</div>
        <div className='News__grid-item'>3</div>
        <div className='News__grid-item'>4</div>
        <div className='News__grid-item'>5</div>
        <div className='News__grid-item'>6</div>
        <div className='News__grid-item'>7</div>
        <div className='News__grid-item'>8</div>
        <div className='News__grid-item'>9</div>
        <div className='News__grid-item'>10</div>
      </div>
    </>
  )
}

export default News
