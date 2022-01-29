import React from 'react';
import CurrencyConverter from './CurrencyConverter';

function CurrencyConverterBackground() {
  return (
    <div className='appWrapper'>
      <div>
        <h4 className='titleStyle box-shade'>Currency Converter</h4>
        <div className='calculator-2'>
          <div className='productName mb-2'>
            Calculator <span className='altText'>Plus</span>
            <sup>&trade;</sup>
          </div>
          <CurrencyConverter/>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverterBackground;
