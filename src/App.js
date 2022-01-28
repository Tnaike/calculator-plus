import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BMIBackground from './components/BMI/BMIBackground';
import CalulatorBackground from './components/CalulatorBackground';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={CalulatorBackground} />
        <Route path='/bmi-calculator' exact component={BMIBackground} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
