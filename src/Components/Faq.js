import React from 'react'
import './Faq.css'
import { useState } from 'react'
function Faq() {

  const [selected, setSelected] = useState()

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }


  return (
    <>
      <div className='faq__head'> <h1>Frequently Asked Questions</h1> </div>

      <div className='faq' >
        <div className='accordion'>
          {data.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span> {selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='faq__btn'>
        <div className='faq__btn-content'>See All   <i className='bx bx-chevron-right ' ></i></div>
      </div>
    </>
  )
}

const data = [
  {
    question: 'WHAT IS CREDBEVY?',
    answer: 'Lorem bawo ni sowapa bvjsayyberybv rfayverybryb rjfysjybovbyskbvyjfbvb uskjybskbvysuvbkuvb vsuvybskvbyskuvybub ybysubsubvsbvs bsybvsbybyrgfshriubfoeou fhoiosgsoisyb foifhlakufyfhbfffhfhbndrfruiehfi ferbslfbleiurb fyrowyvovywr uybsgshuierb righsirghrnieuuie rgouygowugougoubosbvb kwbrthreevbtvyjwtv vjvbrlvevtbv t jhtblvrtvlrbvt vtjvbrltvbdtjbrv rtvsvblbvrit titvwiytb liutbi lisbtg'
  },
  {
    question: 'WHAT IS CREDBEVY?',
    answer: 'Lorem bawo ni sowapa bvjsayyberybv rfayverybryb rjfysjybovbyskbvyjfbvb uskjybskbvysuvbkuvb vsuvybskvbyskuvybub ybysubsubvsbvs bsybvsbybyrgfshriubfoeou fhoiosgsoisyb foifhlakufyfhbfffhfhbndrfruiehfi ferbslfbleiurb fyrowyvovywr uybsgshuierb righsirghrnieuuie rgouygowugougoubosbvb kwbrthreevbtvyjwtv vjvbrlvevtbv t jhtblvrtvlrbvt vtjvbrltvbdtjbrv rtvsvblbvrit titvwiytb liutbi lisbtg '
  },
  {
    question: 'WHAT IS CREDBEVY?',
    answer: 'Lorem bawo ni sowapa bvjsayyberybv rfayverybryb rjfysjybovbyskbvyjfbvb uskjybskbvysuvbkuvb vsuvybskvbyskuvybub ybysubsubvsbvs bsybvsbybyrgfshriubfoeou fhoiosgsoisyb foifhlakufyfhbfffhfhbndrfruiehfi ferbslfbleiurb fyrowyvovywr uybsgshuierb righsirghrnieuuie rgouygowugougoubosbvb kwbrthreevbtvyjwtv vjvbrlvevtbv t jhtblvrtvlrbvt vtjvbrltvbdtjbrv rtvsvblbvrit titvwiytb liutbi lisbtg '
  },
  {
    question: 'WHAT IS CREDBEVY?',
    answer: 'Lorem bawo ni sowapa bvjsayyberybv rfayverybryb rjfysjybovbyskbvyjfbvb uskjybskbvysuvbkuvb vsuvybskvbyskuvybub ybysubsubvsbvs bsybvsbybyrgfshriubfoeou fhoiosgsoisyb foifhlakufyfhbfffhfhbndrfruiehfi ferbslfbleiurb fyrowyvovywr uybsgshuierb righsirghrnieuuie rgouygowugougoubosbvb kwbrthreevbtvyjwtv vjvbrlvevtbv t jhtblvrtvlrbvt vtjvbrltvbdtjbrv rtvsvblbvrit titvwiytb liutbi lisbtg '
  },
  {
    question: 'WHAT IS CREDBEVY?',
    answer: 'Lorem bawo ni sowapa bvjsayyberybv rfayverybryb rjfysjybovbyskbvyjfbvb uskjybskbvysuvbkuvb vsuvybskvbyskuvybub ybysubsubvsbvs bsybvsbybyrgfshriubfoeou fhoiosgsoisyb foifhlakufyfhbfffhfhbndrfruiehfi ferbslfbleiurb fyrowyvovywr uybsgshuierb righsirghrnieuuie rgouygowugougoubosbvb kwbrthreevbtvyjwtv vjvbrlvevtbv t jhtblvrtvlrbvt vtjvbrltvbdtjbrv rtvsvblbvrit titvwiytb liutbi lisbtg '
  },

]

export default Faq