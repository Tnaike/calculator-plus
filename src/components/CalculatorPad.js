import React from 'react';
import styled from 'styled-components';

const CalcButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 3px;
  box-shadow: 0px 5px 10px #000;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  user-select: none;
`;

const CalculatorPad = () => {
  return (
    <div className='calculator-pad'>
      <CalcButton className='keyPad keyPad-ac'>AC</CalcButton>
      <CalcButton className='keyPad keyPad-del'>DEL</CalcButton>
      <CalcButton className='keyPad keyPad-percent o-key'>%</CalcButton>
      <CalcButton className='keyPad keyPad-CalcButtonide o-key'>÷</CalcButton>
      <CalcButton className='keyPad keyPad-7'>7</CalcButton>
      <CalcButton className='keyPad keyPad-8'>8</CalcButton>
      <CalcButton className='keyPad keyPad-9'>9</CalcButton>
      <CalcButton className='keyPad keyPad-multiply o-key'>x</CalcButton>
      <CalcButton className='keyPad keyPad-4'>4</CalcButton>
      <CalcButton className='keyPad keyPad-5'>5</CalcButton>
      <CalcButton className='keyPad keyPad-6'>6</CalcButton>
      <CalcButton className='keyPad keyPad-minus o-key'>-</CalcButton>
      <CalcButton className='keyPad keyPad-1'>1</CalcButton>
      <CalcButton className='keyPad keyPad-2'>2</CalcButton>
      <CalcButton className='keyPad keyPad-3'>3</CalcButton>
      <CalcButton className='keyPad keyPad-add o-key'>+</CalcButton>
      <CalcButton className='keyPad keyPad-dot'>.</CalcButton>
      <CalcButton className='keyPad keyPad-0'>0</CalcButton>
      <CalcButton className='keyPad keyPad-equal'>=</CalcButton>
    </div>
  );
};

export default CalculatorPad;
