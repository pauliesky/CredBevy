import React from 'react'
import './Home.css'
import FAQ from '../Faq'
import TESTIMONIAL from '../Testimonials'
import DOWNLOAD from '../Download'
import HIGHLIGHTS from '../Highlights'
import HERO from '../Hero'


function Home() {
  return (
    <div className='home'>
      <HERO />
      <HIGHLIGHTS />
      <FAQ />
      <TESTIMONIAL />
      <DOWNLOAD />
    </div>
  )
}

export default Home
