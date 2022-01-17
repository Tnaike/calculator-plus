import React, { useState } from 'react';
import '../assets/style.css';
import styled from 'styled-components';

const CalcButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: 'Inconsolata', monospace;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 3px;
  box-shadow: 0px 5px 10px #000;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
`;

const CalculatorDisplay = () => {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0');

  //handle key click
  const handleClick = (e) => {
    setOperation(operation.concat(e.target?.name));
  };

  //clear
  const clear = () => {
    setOperation('');
    setResult('');
  };

  //backspace DEL
  const backspace = () => {
    setOperation(operation.slice(0, -1));
  };

    console.log(operation);
  return (
    <>
      <div className='calculator-display'>
        <p className='display-operation'>{operation}</p>
        <p className='display-result'>{result}</p>
      </div>
      <div className='calculator-pad'>
        <CalcButton onClick={clear} className='keyPad keyPad-ac'>
          AC
        </CalcButton>
        <CalcButton onClick={backspace} className='keyPad keyPad-del'>DEL</CalcButton>
        <CalcButton
          name='%'
          onClick={handleClick}
          className='keyPad keyPad-percent o-key'
        >
          %
        </CalcButton>
        <CalcButton
          name='/'
          onClick={handleClick}
          className='keyPad keyPad-CalcButtonide o-key'
        >
          &divide;
        </CalcButton>
        <CalcButton name='7' onClick={handleClick} className='keyPad keyPad-7'>
          7
        </CalcButton>
        <CalcButton name='8' onClick={handleClick} className='keyPad keyPad-8'>
          8
        </CalcButton>
        <CalcButton name='9' onClick={handleClick} className='keyPad'>
          9
        </CalcButton>
        <CalcButton
          name='*'
          onClick={handleClick}
          className='keyPad keyPad-multiply o-key'
        >
          x
        </CalcButton>
        <CalcButton name='4' onClick={handleClick} className='keyPad keyPad-4'>
          4
        </CalcButton>
        <CalcButton name='5' onClick={handleClick} className='keyPad keyPad-5'>
          5
        </CalcButton>
        <CalcButton name='6' onClick={handleClick} className='keyPad keyPad-6'>
          6
        </CalcButton>
        <CalcButton
          name='-'
          onClick={handleClick}
          className='keyPad keyPad-minus o-key'
        >
          -
        </CalcButton>
        <CalcButton name='1' onClick={handleClick} className='keyPad keyPad-1'>
          1
        </CalcButton>
        <CalcButton name='2' onClick={handleClick} className='keyPad keyPad-2'>
          2
        </CalcButton>
        <CalcButton name='3' onClick={handleClick} className='keyPad keyPad-3'>
          3
        </CalcButton>
        <CalcButton
          name='+'
          onClick={handleClick}
          className='keyPad keyPad-add o-key'
        >
          +
        </CalcButton>
        <CalcButton
          name='.'
          onClick={handleClick}
          className='keyPad keyPad-dot'
        >
          .
        </CalcButton>
        <CalcButton name='0' onClick={handleClick} className='keyPad keyPad-0'>
          0
        </CalcButton>
        <CalcButton className='keyPad keyPad-equal'>=</CalcButton>
      </div>
    </>
  );
};

export default CalculatorDisplay;
