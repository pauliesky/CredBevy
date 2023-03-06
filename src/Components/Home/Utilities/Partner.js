import React from 'react'
import Coin from '../Images/Coinbase.png'
import './Partner.css'

export default function Partner({companyName,companyDetails}) {
  return (
    <>

      <div className='lendingPartners__grid-item'>

        <img alt='' src={Coin}  ></img>
        <div className='lendingPartners__grid-item_title' >{companyName}</div>
        <div className='lendingPartners__grid-item_body' >{companyDetails}
        </div>

      </div>



    </>
  )
}

