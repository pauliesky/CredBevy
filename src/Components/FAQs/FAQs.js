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
  {
    question: 'What factors determine my eligibility for a personal loan?',
    answer: 'Lenders consider factors such as your credit history, income, employment status, and debt-to-income ratio when determining your eligibility for a personal loan.'
  },
  {
    question: 'What credit score do I need to qualify for a personal loan?',
    answer: 'Lenders may have varying credit score requirements, but generally, a higher credit score increases your chances of approval and may result in better interest rates.'
  },
  {
    question: 'Can I get a personal loan with bad credit?',
    answer: 'Yes, you can still apply for a personal loan with less-than-perfect credit. Some lenders specialize in providing loans for individuals with lower credit scores.'
  },
  {
    question: 'What is the typical loan term for a personal loan?',
    answer: 'Loan terms for personal loans can range from a few months to several years, depending on the lender and the loan amount.'
  },
  {
    question: 'How much can I borrow with a personal loan?',
    answer: 'The loan amount you can borrow depends on factors such as your creditworthiness, income, and the lender\'s policies. Some lenders offer loans ranging from a few hundred to several thousand dollars.'
  },
  {
    question: 'Is collateral required for a personal loan?',
    answer: 'Personal loans are typically unsecured, meaning they do not require collateral. Your creditworthiness and income are the primary factors considered by lenders.'
  },
  {
    question: 'What should I consider when comparing personal loan offers?',
    answer: 'When comparing loan offers, consider factors such as the interest rate, repayment terms, any fees or charges, and the total cost of the loan over its duration.'
  },
  {
    question: 'How can I improve my chances of getting approved for a personal loan?',
    answer: 'Maintaining a good credit score, providing accurate and complete information on your application, and demonstrating a stable income can improve your chances of approval.'
  },
  {
    question: 'How can I improve my chances of getting approved for a personal loan?',
    answer: 'Maintaining a good credit score, providing accurate and complete information on your application, and demonstrating a stable income can improve your chances of approval.'
  },

]
export default FAQs
