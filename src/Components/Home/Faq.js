import React from 'react'
import './Faq.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Utilities/Button'
import { BsArrowRight } from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";



function Faq() {

  const [selected, setSelected] = useState()

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  const arrowStyle = {
    color: 'white',
    fontSize: '20px',
    paddingTop: '.2rem'
  }
  const data = [
    {
      question: 'WHAT IS CREDBEVY?',
      answer: 'CredBevy financial technology (fintech) industry is coming of age. In the face of political and economic challenges and a global pandemic, fintech on the continent is booming. Between 2020 and 2021, the number of tech startups in Africa tripled to around 5,200 companies. Just under half of these are fintechs, which are making it their business to disrupt and augment traditional financial services'
    },
    {
      question: 'WHAT IS CREDBEVY?',
      answer: 'CredBevy financial technology (fintech) industry is coming of age. In the face of political and economic challenges and a global pandemic, fintech on the continent is booming. Between 2020 and 2021, the number of tech startups in Africa tripled to around 5,200 companies. Just under half of these are fintechs, which are making it their business to disrupt and augment traditional financial services '
    },
    {
      question: 'WHAT IS CREDBEVY?',
      answer: 'CredBevy financial technology (fintech) industry is coming of age. In the face of political and economic challenges and a global pandemic, fintech on the continent is booming. Between 2020 and 2021, the number of tech startups in Africa tripled to around 5,200 companies. Just under half of these are fintechs, which are making it their business to disrupt and augment traditional financial services '
    },
    {
      question: 'WHAT IS CREDBEVY?',
      answer: 'CredBevy financial technology (fintech) industry is coming of age. In the face of political and economic challenges and a global pandemic, fintech on the continent is booming. Between 2020 and 2021, the number of tech startups in Africa tripled to around 5,200 companies. Just under half of these are fintechs, which are making it their business to disrupt and augment traditional financial services '
    },
    {
      question: 'WHAT IS CREDBEVY?',
      answer: 'CredBevy financial technology (fintech) industry is coming of age. In the face of political and economic challenges and a global pandemic, fintech on the continent is booming. Between 2020 and 2021, the number of tech startups in Africa tripled to around 5,200 companies. Just under half of these are fintechs, which are making it their business to disrupt and augment traditional financial services '
    },

  ]
  return (
    <>
      <div className='faq__head'> <h1>Frequently Asked Questions</h1> </div>

      <div className='faq' >
        <div className='accordion'>
          {data.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <div> {selected === i ? [<SlArrowUp />] : [<SlArrowDown />]}  </div>
              </div>

              <div className={selected === i ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>


      <Link to='/FAQs' style={{ textDecoration: 'none' }}>
        <div className='faq__btn'>
          <Button label={'See All'} icon={[<BsArrowRight style={arrowStyle} />]} />
        </div>
      </Link>
    </>
  )
}



export default Faq