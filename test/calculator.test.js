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
