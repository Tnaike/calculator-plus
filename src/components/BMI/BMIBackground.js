import React from 'react';
import BMIDisplay from './BMIDisplay';

const BMIBackground = () => {
  return (
    <div className='appWrapper'>
      <div>
        <h4 className='titleStyle box-shade'>BMI Calculator</h4>
        <div className='calculator-2'>
          <div className='productName mb-2'>
            Calculator <span className='altText'>Plus</span>
            <sup>&trade;</sup>
          </div>
          <BMIDisplay />
        </div>
      </div>
    </div>
  );
};

export default BMIBackground;
