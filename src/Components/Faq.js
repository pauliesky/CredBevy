import React from 'react'
import { IoChevronDown } from "react-icons/io5";
import './Faq.css'
import { BsArrowRight } from "react-icons/bs";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Faq() {
  return (
    <>
      <div className='questions'>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className='question'>
          <h3>WHAT IS CREDBEVY?</h3> <IoChevronDown />
        </div>
        <div className='question'>
          <h3>WHAT IS CREDBEVY?</h3> <IoChevronDown />
        </div>
        <div className='question'>
          <h3>WHAT IS CREDBEVY?</h3> <IoChevronDown />
        </div>
        <div className='question'>
          <h3>WHAT IS CREDBEVY?</h3> <IoChevronDown />
        </div>
        <div className='question'>
          <h3>WHAT IS CREDBEVY?</h3> <IoChevronDown />
        </div>
        <div className='faqbtn-container'>
          <div className='faq-btn'>
            <p>See All</p> <BsArrowRight className={'arrow-right'} />
          </div>
        </div>
      </div>


    </>
  )
}

