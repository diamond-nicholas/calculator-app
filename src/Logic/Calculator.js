/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React from 'react';
import Big from 'big.js';
import Operate from './Operate';

const Calculator = (calculatorData, buttonName) => {
  const data = calculatorData;

  if (data.Operate === '=') {
    data.total = null;
    data.next = null;
    data.operation = null;
  }
  let result;
  switch (buttonName) {
    case 'AC':
      data.total = null;
      data.next = null;
      data.operaion = null;
      return data;
    case '+/-':
      if (data.operation && data.next) {
        result = Big(data.next).times(-1).toString();
        data.next = result;
        return data;
      }
      result = Big(data.total).times(-1).toString();
      data.total = result;
      return data;
  }
};

export default Calculator;
