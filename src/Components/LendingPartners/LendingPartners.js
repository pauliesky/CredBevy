import React from 'react'
import './LendingPartners.css'
import Coin from '../Home/Images/Coinbase.png'
import Download from '../Home/Download'
import Partner from '../Home/Utilities/Partner'
export default function LendingPartners() {
  return (

    <>
      <div className='LendingPartners__head' >

        <div className='LendingPartners__head-title' >
          <h2>
            CredBevy's Lending Partners
          </h2>
        </div>
        <div className='LendingPartners__head-body' >
          <p>Our top-tier partners from whom we source leads and fulfill customers' lending demands
          </p>
        </div>

      </div>
      <div className='lendingPartners__grid'  >
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />
        <Partner companyName={'Company Name'}
          companyDetails={'Company Name Technologies solution limited'} />

      </div>
      <Download />
    </>

  )
}
