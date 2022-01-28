import React from 'react';
import CalculatorDisplay from '../components/CalculatorDisplay';
// import CalculatorPad from './CalculatorPad';

const CalulatorBackground = () => {
  return (
    <div className='appWrapper'>
      <div className='calculator'>
        <div className='productName'>
          Calculator <span className='altText'>Plus</span>
          <sup>&trade;</sup>
        </div>
        <CalculatorDisplay />
        {/* <CalculatorPad /> */}
      </div>
    </div>
  );
};

export default CalulatorBackground;
