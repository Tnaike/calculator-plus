import React from 'react';
import styled from 'styled-components';
import './currencyStyle.css';

const DisplayResult = styled.div`
  display: block;
  font-size: 14px;
  color: var(--white);
  text-align: center;
  background: #1f2128;
  padding: 0.4rem;
  letter-spacing: 0.7px;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor || '#FFF'};
`;

const CurrencyConverter = () => {
  return (
    <>
      <div className='wrap-input'>
        <div className='input-group'>
          <select className='form-select' id='inputGroupSelect01'>
            <option value='NGN' selected>
              ₦ - NGN
            </option>
            <option value='USD'>$ - USD</option>
            <option value='Euro'>€ - Euro</option>
            <option value='GBP'>£ - GBP</option>
            <option value='AED'>د.إ - AED</option>
            <option value='Yuan'>¥ - Yuan</option>
            <option value='ZAR'>R - ZAR</option>
            <option value='KES'>Ksh - KES</option>
            <option value='CHF'>Fr - CHF</option>
            <option value='INR'>₹ - INR</option>
          </select>
          <input type='number' className='input-control' min='0' required />
        </div>
      </div>
      <div className='wrap-input'>
        <div className='input-group'>
          <select className='form-select' id='inputGroupSelect01'>
            <option value='NGN'>₦ - NGN</option>
            <option value='USD' selected>
              $ - USD
            </option>
            <option value='Euro'>€ - Euro</option>
            <option value='GBP'>£ - GBP</option>
            <option value='AED'>د.إ - AED</option>
            <option value='Yuan'>¥ - Yuan</option>
            <option value='ZAR'>R - ZAR</option>
            <option value='KES'>Ksh - KES</option>
            <option value='CHF'>Fr - CHF</option>
            <option value='INR'>₹ - INR</option>
          </select>
          <input type='number' className='input-control' min='0' required />
        </div>
      </div>

      <div className='wrap-input'>
        <input
          type='number'
          className='input-field'
          placeholder=''
          min='1'
          required
        />
      </div>
      <div className='btn-container mb-15'>
        <button className='btn-block btn-primary'>Calculate</button>
      </div>
      <DisplayResult>
        <p className='resultFigure'>$2 == ₦830</p>
        <p className='resultRate mt-5'>Rate: ₦415</p>
      </DisplayResult>
    </>
  );
};

export default CurrencyConverter;
