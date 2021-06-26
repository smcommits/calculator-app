import Big from 'big.js';

export default function operate(one, two, operator) {
  const firstNumber = Big(one);
  const secondNumber = Big(two);

  const operatorMap = {
    '+': firstNumber.plus(secondNumber),
    '-': firstNumber.minus(secondNumber),
    x: firstNumber.times(secondNumber),
    '/': firstNumber.div(secondNumber),
    '%': firstNumber.mod(secondNumber),
  };

  return operatorMap[operator]();
}
