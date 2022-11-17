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

const calculator = {
  sumValue: (a, b) => a + b,
}

const CalculatorDisplay = () => {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  //handle key click
  const handleClick = (e) => {
    setOperation(operation?.concat(e.target?.name));
  };

  //clear
  const clear = () => {
    setOperation('');
    setResult('');
  };

  //backspace DEL
  const backspace = () => {
    setOperation(operation?.slice(0, -1)); // Or (0, operation?.length -1)
  };

  //calculate
  const calculate = () => {
    try {
      setResult(
        // eslint-disable-next-line no-eval
        Math.round(eval(operation).toString() * 100) / 100
      );
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <>
      <div className='calculator-display'>
        <p className='display-operation'>{operation}</p>
        <p className='display-result'>{result}</p>
      </div>
      <div className='calculator-pad'>
        <CalcButton
          onClick={clear}
          onKeyDown={clear}
          className='keyPad keyPad-ac'
        >
          AC
        </CalcButton>
        <CalcButton onClick={backspace} className='keyPad'>
          DEL
        </CalcButton>
        <CalcButton name='%' onClick={handleClick} className='keyPad o-key'>
          %
        </CalcButton>
        <CalcButton name='/' onClick={handleClick} className='keyPad o-key'>
          &divide;
        </CalcButton>
        <CalcButton name='7' onClick={handleClick} className='keyPad'>
          7
        </CalcButton>
        <CalcButton name='8' onClick={handleClick} className='keyPad'>
          8
        </CalcButton>
        <CalcButton name='9' onClick={handleClick} className='keyPad'>
          9
        </CalcButton>
        <CalcButton name='*' onClick={handleClick} className='keyPad o-key'>
          x
        </CalcButton>
        <CalcButton name='4' onClick={handleClick} className='keyPad'>
          4
        </CalcButton>
        <CalcButton name='5' onClick={handleClick} className='keyPad'>
          5
        </CalcButton>
        <CalcButton name='6' onClick={handleClick} className='keyPad'>
          6
        </CalcButton>
        <CalcButton name='-' onClick={handleClick} className='keyPad o-key'>
          -
        </CalcButton>
        <CalcButton name='1' onClick={handleClick} className='keyPad'>
          1
        </CalcButton>
        <CalcButton name='2' onClick={handleClick} className='keyPad'>
          2
        </CalcButton>
        <CalcButton name='3' onClick={handleClick} className='keyPad'>
          3
        </CalcButton>
        <CalcButton name='+' onClick={handleClick} className='keyPad o-key'>
          +
        </CalcButton>
        <CalcButton name='.' onClick={handleClick} className='keyPad'>
          .
        </CalcButton>
        <CalcButton name='0' onClick={handleClick} className='keyPad'>
          0
        </CalcButton>
        <CalcButton onClick={calculate} className='keyPad keyPad-equal'>
          =
        </CalcButton>
      </div>
    </>
  );
};

module.exports = calculator;

export default CalculatorDisplay;
