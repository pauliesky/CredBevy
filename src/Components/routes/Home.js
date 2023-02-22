import React from 'react'
import './Home.css'
import FAQ from '../Home/Faq'
import TESTIMONIAL from '../Home/Testimonials'
import DOWNLOAD from '../Home/Download'
import HIGHLIGHTS from '../Home/Highlights'
import HERO from '../Home/Hero'


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
