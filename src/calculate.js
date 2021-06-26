import operate from './operate';

export default function calculate(data, buttonName) {
  const cleardata = () => ({
    total: null,
    next: null,
    operation: null,
  });

  const logicForNegate = () => {
    if (data.next) {
      return { next: (-1 * data.next) };
    }
    if (data.total) {
      return { total: (-1 * data.next) };
    }
    return {};
  };

  const logicForDot = () => {
    if (data.next) {
      return data.next.includes('.') ? {} : { next: `${data.next}.` };
    }

    if (data.operation) {
      return { next: '0.' };
    }

    if (data.total) {
      return data.total.includes('.') ? {} : { total: `${data.total}.` };
    }

    return { total: '0.' };
  };

  const logicForEqual = () => (data.next && data.operation
    ? {
      total: operate(data.total, data.next, data.operation),
      next: null,
      operation: null,
    }
    : {});

  const logicForNumbers = () => {
    if (buttonName === '0' && data.next === '0') {
      return {};
    }

    if (data.operation) {
      return data.next ? { next: data.next + buttonName } : { next: buttonName };
    }

    if (data.next) {
      return { next: data.next + buttonName, total: null };
    }

    return { next: buttonName, total: null };
  };

  const operationExists = () => ({
    total: operate(data.total, data.next, data.operation),
    next: null,
    operation: buttonName,
  });

  const buttonMap = {
    AC: cleardata,
    '.': logicForDot,
    '=': logicForEqual,
    '-/+': logicForNegate,
    number: logicForNumbers,
  };

  if (buttonName.match(/[0-9])+/)) {
    return buttonMap.number();
  }

  if (data.operation) {
    return operationExists();
  }

  return buttonMap[buttonName]();
}
