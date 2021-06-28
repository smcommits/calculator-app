import Big from 'big.js';

export default function operate(one, two, operator) {
  if (one === '0' && two === '0') {
    return {};
  }
  const firstNumber = Big(one);
  const secondNumber = Big(two);

  const operatorMap = {
    '+': Big.prototype.plus,
    '-': Big.prototype.minus,
    x: Big.prototype.times,
    '*': Big.prototype.times,
    '/': Big.prototype.div,
    '%': Big.prototype.mod,
  };

  return operatorMap[operator].call(firstNumber, secondNumber).toString();
}
