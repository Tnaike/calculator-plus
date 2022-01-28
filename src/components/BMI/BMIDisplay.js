import React, { useState } from 'react';
import './bmiStyle.css';
import styled from 'styled-components';

const DisplayResult = styled.div`
  display: block;
  font-size: 14px;
  color: var(--white);
  text-align: center;
  background: #1f2128;
  padding: 0.4rem;
  border: 1px solid;
  border-color: ${({borderColor}) => borderColor || '#FFF'};
`;

const BMIDisplay = () => {
  const [statusColor, setStatusColor] = useState('#FFF');
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmiStatus, setBmiStatus] = useState();
  const [weightStatus, setWeightStatus] = useState();

  const HandleSubmit = () => {
    const bmiVal = (weight / ((height * height) / 10000)).toFixed(2);
    setBmiStatus(bmiVal);

    if (bmiVal < 18.5) {
      setWeightStatus('Underweight');
      setStatusColor('#dfab5c');
    } else if (bmiVal >= 18.5 && bmiVal <= 24.9) {
      setWeightStatus('Healthy weight');
      setStatusColor('#318dff');
    } else if (bmiVal >= 25 && bmiVal <= 29.9) {
      setWeightStatus('Overweight');
      setStatusColor('#F00');
    } else {
      setWeightStatus('Your BMI falls within the obese range');
      setStatusColor('#F00');
    }
  };

  return (
    <>
      <div className='wrap-input'>
        <input
          type='number'
          className='input-field'
          onChange={(e) => setHeight(e.target.value)}
          placeholder='Height (CM)'
          min='1'
          max='635'
          required
        />
      </div>
      <div className='wrap-input'>
        <input
          type='number'
          className='input-field'
          onChange={(e) => setWeight(e.target.value)}
          placeholder='Weight (KG)'
          max='272'
          required
        />
      </div>
      <div className='btn-container mb-15'>
        <button className='btn-block btn-primary' onClick={HandleSubmit}>
          Calculate BMI
        </button>
      </div>
      {bmiStatus && (
        <DisplayResult borderColor={statusColor}>
          <span className='resultFigure' style={{ color: statusColor }}>
            {bmiStatus}
          </span>{' '}
          <p>{weightStatus}</p>
        </DisplayResult>
      )}
    </>
  );
};

export default BMIDisplay;
