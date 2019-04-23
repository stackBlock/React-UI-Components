import React from 'react';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>

      <ActionButton />
      <NumberButton />
      <CalculatorDisplay />


    </div>
  );
};

export default App;
