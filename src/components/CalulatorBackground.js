import React from 'react';
import CalculatorDisplay from '../components/CalculatorDisplay';
import CalculatorPad from './CalculatorPad';

const CalulatorBackground = () => {
  return (
    <div className='appWrapper'>
      <div className='calculator'>
        <CalculatorDisplay />
        <CalculatorPad />
      </div>
    </div>
  );
};

export default CalulatorBackground;
