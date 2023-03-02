import React from 'react'
import './Calculator.css'
import formular from '../Home/Images/formular.png'
import Download from '../Home/Download'

function Calculator() {
  return (
    <>

      <div className='calculator'>
        <div className='calculator-container' >
          <div className='calculator-title'  >E.M.I Calculator</div>
          <div className='calculator-subtitle'  >Get a prediction of the loan amounts you can <br /> qualify for.</div>
          <div className='calculator-form'>

            <form className='calculator-form-container'  >

              <div className='calculator-form-input'>
                <label>Expected Amount</label>
                <input
                  className="input__size"
                  type='text'
                  required
                />
              </div>
              <div className='calculator-form-input'>  <label>Yearly Income</label>
                <input
                  className="input__size"
                  type='text'
                  required
                /></div>
              <div className='calculator-form-input'>  <label>Loan Period</label>
                <input
                  className="input__size"
                  type='text'
                  required
                /></div>
              <div className='calculator-form-input'>  <label>Expected Interest Rate</label>
                <input
                  className="input__size"
                  type='text'
                  required
                /></div>
            </form>
            <div className='nav__btn'>
              <div className='nav__btn-content'>Calculate</div>
            </div>

          </div>
          <div className='calculator-content-title'>Overview</div>
          <div className='calculator-content-body' >What is an EMI?<br />
            Equated Monthly Installment, or EMI for short, is the sum that must be paid to the bank or other financial institution each month until the loan balance is completely repaid. It consists of the loan interest as well as a portion of the principal that needs to be paid back. The total principle and interest are divided by the duration, or the total number of months, that the loan must be returned. This sum must be paid on a monthly basis. With each payment, the interest component of the EMI would go smaller. Initially, it would be more substantial. Depending on the interest rate, a specific proportion is assigned for principle repayment. Despite the fact that your EMI payment will be fixed each month, the percentage of principle and interest factors will evolve over time. You'll put more money toward the principle and less toward interest with each additional payment.<br /><br />

            The EMI calculation formula is as follows:</div>
          <img alt='formula' src={formular}></img>
          <div className='calculator-content-footer'>
            where<br /><br />

            E is EMI.<br /><br />

            P is the Principal Loan Amount.<br /><br />

            R stands for the monthly interest rate. (R = Annual Interest Rate / 12/100, for example. If the interest rate is 10.5% annually, then r is equal to 10.5/12/100 = 0.00875).<br /><br />

            In months, n represents the loan term, tenure, or length.</div>






        </div>
      </div>
      <Download />

    </>
  )
}

export default Calculator
