/* eslint-disable default-case */
import Big from 'big.js';
import Operate from './Operate';

const Calculator = (calculatorData, buttonName) => {
  const data = calculatorData;

  if (data.operation === '=') {
    data.total = null;
    data.next = null;
    data.operation = null;
  }

  let result;
  if (buttonName === '.') {
    if (!data.total) {
      data.total = '0.';
    } else if (!data.total.includes('.')) {
      data.total = `${data.total || '0'}${buttonName}`;
      // return data;
    }
  }
  switch (buttonName) {
    case 'AC':
      data.total = null;
      data.next = null;
      data.operaion = null;
      return data;
    case '+/-':
      if (data.operation && data.next) {
        result = Big(data.next || 0)
          .times(-1)
          .toString();
        data.next = result;
        return data;
      }
      result = Big(data.total || 0)
        .times(-1)
        .toString();
      data.total = result;
      return data;
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      if (data.next) {
        result = Operate(data.total, data.next, data.operaion);
        data.total = result;
        data.next = null;
        data.operaion = buttonName;
        return data;
      }
      data.operation = buttonName;
      return data;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (data.operation) {
        data.next = `${data.next || ''}${buttonName}`;
        return data;
      }
      data.total = `${data.total || ''}${buttonName}`;
      return data;
    case '=':
      if (data.operation && data.next) {
        result = Operate(data.total, data.next, data.operation);
        data.total = result;
        data.next = null;
        data.operation = buttonName;
        return data;
      }
      data.operation = buttonName;
      return data;
  }
  return {};
};

export default Calculator;
