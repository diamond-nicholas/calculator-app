import React from 'react';
import Big from 'big.js';
import Operate from './Operate';

const Calculator = (calculatorData, buttonName) => {
  const data = calculatorData;

  if (data.Operate === '=') {
    data.total = null;
    data.next = null;
    data.Operation = null;
  }
};

export default Calculator;
