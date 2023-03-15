import React from 'react'
import { useState } from 'react'
import './FAQs.css'
import Download from '../Home/Download'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

function FAQs() {

  const [selected, setSelected] = useState()

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }



  return (
    <>
      <div className='Faqs__container' >
        <div className='Faqs__head' >
          <h5>FAQs</h5>
        </div>
        <div className='Faqs__title'>
          Fequently Asked Questions
        </div>


        <div className='FAQ' >
          <div className='Accordion'>
            {data.map((item, i) => (
              <div className='Item'>
                <div className='Title' onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span> {selected === i ? [<SlArrowUp />] : [<SlArrowDown />]} </span>
                </div>
                <div className={selected === i ? 'Content show' : 'Content'}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Download />
    </>
  )
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
  {
    question: 'WHAT IS CREDBEVY?',
    answer: 'CredBevy financial technology (fintech) industry is coming of age. In the face of political and economic challenges and a global pandemic, fintech on the continent is booming. Between 2020 and 2021, the number of tech startups in Africa tripled to around 5,200 companies. Just under half of these are fintechs, which are making it their business to disrupt and augment traditional financial services '
  },

]
export default FAQs
