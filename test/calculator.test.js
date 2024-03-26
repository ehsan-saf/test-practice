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
