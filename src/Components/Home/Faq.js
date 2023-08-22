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
      question: 'What is Credbevy?',
      answer: 'Credbevy is an online platform that connects borrowers with a wide range of lenders, offering various loan options to meet your financial needs.'
    },
    {
      question: 'How does Credbevy work?',
      answer: 'We provide a user-friendly platform where you can browse different loan products, compare terms and rates, and apply for loans that match your requirements. Our network of lenders ensures you have access to a diverse range of financing options.'
    },
    {
      question: 'Is Credbevy a direct lender?',
      answer: 'No, we are not a direct lender. We partner with multiple reputable lenders to provide you with a variety of loan options. You can compare and choose the loan that best suits your needs.'
    },
    {
      question: 'What can I use a personal loan for?',
      answer: 'Personal loans can be used for a variety of purposes, including debt consolidation, home improvements, medical expenses, education costs, and more.'
    },
    {
      question: 'How do I apply for a personal loan through Credbevy?',
      answer: 'Applying for a personal loan is easy. Simply navigate to the personal loans section, choose a loan that matches your needs, and follow the instructions to complete the application.'
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
          <Button
            className={'faq-button__container'}

            label={'See All'} icon={[<BsArrowRight style={arrowStyle} />]} />
        </div>
      </Link>
    </>
  )
}



export default Faq