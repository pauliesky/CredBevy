import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  const loginHandler = () => {
    console.log('logged in')
  }


  const style = {
    height: '166px',
    width: '266px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    resize: 'none',
    borderRadius:'8px',
  }
  return (
    <>
      <div className='contactUs__wrapper'>
        <div className='contactUs__head'>
          <h5>Contact us</h5>
        </div>
        <div className='contactUs__title' > We'll love to hear from you</div>
        <form className='contactUs__form'>
          <label>Name</label>
          <input
            className="input__size"
            type='text'
            required
          />
          <label>Email</label>
          <input
            className="input__size"
            type='email'
            required
          />
          <label>Your Message</label>
          <textarea
            className="textarea"
            style={style}
            type='textarea'
            name='message'
            required
          />
          <div className='contactUs__btn-wrapper' >   <div className='contactUs__btn' onClick={loginHandler}>
            <div className='contactUs__btn-content'>Get Started</div>
          </div>    </div>
          
        </form>

      </div>

    </>
  )
}

export default ContactUs
