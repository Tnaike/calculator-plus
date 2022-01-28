import React, { useState } from 'react';
import './bmiStyle.css';
import styled from 'styled-components';

const DisplayResult = styled.p`
  display: block;
  font-size: 14px;
  color: var(--white);
  text-align: center;
  background: #1f2128;
  padding: 0.4rem;
  border: 1px solid;
`;

const BMIDisplay = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [resultStatus, setResultStatus] = useState('');
  const [statusColor, setStatusColor] = useState('#FFF');
  const [weightStatus, setWeightStatus] = useState('');

  const HandleSubmit = (e) => {
    const calBmi = (weight / ((height * height) / 10000)).toFixed(2);
    setResultStatus(calBmi);

    if (resultStatus < 18.5) {
      setStatusColor('#F00');
      setWeightStatus('Underweight');
    } else if (resultStatus >= 18.5 && resultStatus <= 24.9) {
      setStatusColor('#318dff');
      setWeightStatus('Healthy weight');
    } else if (resultStatus >= 25 && resultStatus <= 29.9) {
      setStatusColor('#F00');
      setWeightStatus('Overweight');
    } else {
      setStatusColor('#F00');
      setWeightStatus('Your BMI falls within the obese range');
    }

    e.preventDefault();
  };

  return (
    <>
      <form className='cal-form'>
        <div className='wrap-input'>
          <input
            type='number'
            name='height'
            className='input-field'
            defaultValue={height}
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
            name='Weight'
            className='input-field'
            defaultValue={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder='Weight (KG)'
            max='272'
            required
          />
        </div>
        <div className='btn-container mb-15'>
          <input
            type='submit'
            value='Calculate BMI'
            className='btn-block btn-primary'
            onClick={HandleSubmit}
          />
        </div>
        {resultStatus && (
          <DisplayResult>
            <span className='resultFigure' style={{ color: statusColor }}>
              {resultStatus}
            </span>{' '}
            {weightStatus}
          </DisplayResult>
        )}
      </form>
    </>
  );
};

export default BMIDisplay;
