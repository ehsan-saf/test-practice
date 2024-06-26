import calculator from "../scripts/calculator";

test("Define calculator function", () => {
  expect(calculator).not.toBeUndefined();
});

test("Adds two positive integers", () => {
  const actual = calculator.add(1, 5);
  const expected = 6;
  expect(actual).toBe(expected);
});

test("Adds two negative integers", () => {
  const actual = calculator.add(-1, -4);
  const expected = -5;
  expect(actual).toBe(expected);
});

test("Adds two positive decimals", () => {
  const actual = calculator.add(1.4, 4.7);
  const expected = 6.1;
  expect(actual).toBe(expected);
});

test("Adds two negative decimals", () => {
  const actual = calculator.add(-1.5, -7.1);
  const expected = -8.6;
  expect(actual).toBe(expected);
});

// ---------------------------------------------------------------

test("Subtracts two positive integers", () => {
  const actual = calculator.subtract(74, 3);
  const expected = 71;
  expect(actual).toBe(expected);
});

test("Subtracts smaller integers", () => {
  const actual = calculator.subtract(10, 25);
  const expected = -15;
  expect(actual).toBe(expected);
});

test("Subtracts two decimals", () => {
  const actual = calculator.subtract(15.5, 10.7);
  const expected = 4.8;
  expect(actual).toBeCloseTo(expected);
});

test("Subtracts zero correctly", () => {
  const actual = calculator.subtract(0, 10);
  const expected = -10;
  expect(actual).toBe(expected);
});

test("Subtracts two negative numbers", () => {
  const actual = calculator.subtract(-5, -7);
  const expected = 2;
  expect(actual).toBe(expected);
});

// ----------------------------------------------------------------

test("Devides two positive integers", () => {
  const actual = calculator.divide(15, 5);
  const expected = 3;
  expect(actual).toBe(expected);
});

test("Devides two decimals", () => {
  const actual = calculator.divide(1.7, 4.7);
  const expected = 0.36;
  expect(actual).toBeCloseTo(expected);
});

test("Devides two negative integers", () => {
  const actual = calculator.divide(-50, -10);
  const expected = 5;
  expect(actual).toBe(expected);
});

test("Devides two negative decimals", () => {
  const actual = calculator.divide(-1.8, -4.75);
  const expected = 0.378;
  expect(actual).toBeCloseTo(expected);
});

test("Handles divide by zero", () => {
  const actual = calculator.divide(5, 0);
  const expected = NaN;
  expect(actual).toBe(expected);
});

// ----------------------------------------------------------------

test("Multiplies two positive integers", () => {
  const actual = calculator.multiply(5, 8);
  const expected = 40;
  expect(actual).toBe(expected);
});

test("Multiplies two negative integers", () => {
  const actual = calculator.multiply(-5, -4);
  const expected = 20;
  expect(actual).toBe(expected);
});

test("Multiplies two positive decimals", () => {
  const actual = calculator.multiply(1.4, 4.6);
  const expected = 6.44;
  expect(actual).toBeCloseTo(expected);
});

test("Multiplies one negative and one positive decimal", () => {
  const actual = calculator.multiply(-1.4, 7.2);
  const expected = -10.08;
  expect(actual).toBeCloseTo(expected);
});

test("Multiplies by zero", () => {
  const actual = calculator.multiply(-5, 0);
  const expected = 0;
  expect(actual).toBe(expected);
});

// --------------------------------------------------------------
