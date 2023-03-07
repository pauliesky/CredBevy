import React from 'react'
import './ContactUs.css'
import Button from '../Home/Utilities/Button'
const ContactUs = () => {

  const buttonStyleSize = {
    width: '159px',
    height: '55px',
  }

  const buttonTextSize = {
    width: '110px',
    height: '21px',
  }

  const style = {
    height: '175px',
    width: '466px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    resize: 'none',
    borderRadius: '8px',
    marginBottom: '6rem'

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
          <div className='contactUs__btn-wrapper' >
            <Button buttonTextStyle={buttonTextSize} buttonStyle={buttonStyleSize} label={'Send Message'} />
          </div>

        </form>

      </div>

    </>
  )
}

export default ContactUs
