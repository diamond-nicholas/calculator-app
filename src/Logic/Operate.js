/* eslint-disable default-case */
import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const a = Big(numberOne);
  const b = Big(numberTwo);
  switch (operation) {
    case '+':
      return a.plus(b).toString;
    case '-':
      return a.minus(b).toString;
    case 'x':
      return a.times(b).toString;
    case '%':
      return a.times(b.div(100)).toString;
    case '÷':
      if (b.eq('0')) {
        return 'Error';
      }
      return a.div(b).toString;
  }
  return {};
};

export default Operate;
