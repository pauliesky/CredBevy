import React from 'react'
import { useState } from 'react'
import './FAQs.css'
import Download from '../Home/Download'

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
      </div>
      <Download />
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
  {
    question: 'WHAT IS CREDBEVY?',
    answer: 'Lorem bawo ni sowapa bvjsayyberybv rfayverybryb rjfysjybovbyskbvyjfbvb uskjybskbvysuvbkuvb vsuvybskvbyskuvybub ybysubsubvsbvs bsybvsbybyrgfshriubfoeou fhoiosgsoisyb foifhlakufyfhbfffhfhbndrfruiehfi ferbslfbleiurb fyrowyvovywr uybsgshuierb righsirghrnieuuie rgouygowugougoubosbvb kwbrthreevbtvyjwtv vjvbrlvevtbv t jhtblvrtvlrbvt vtjvbrltvbdtjbrv rtvsvblbvrit titvwiytb liutbi lisbtg '
  },

]
export default FAQs
