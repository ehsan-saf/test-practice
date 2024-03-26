let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => {
    if (b === 0 && a !== 0) {
      return NaN;
    } else {
      return a / b;
    }
  },
  multiply: (a, b) => {
    if (a === 0 || b === 0) {
      return 0;
    } else {
      return a * b;
    }
  },
};
export default calculator;
