import reverseString from "../scripts/reverseString";

test("define reverse string function", () => {
  expect(reverseString).not.toBeUndefined();
});

test("reverse abc to cba", () => {
  const actual = reverseString("abc");
  const expected = "cba";
  expect(actual).toBe(expected);
});

test("reverse father to rehtaf", () => {
  const actual = reverseString("father");
  const expected = "rehtaf";
  expect(actual).toBe(expected);
});

test("reverses a sentence correctly", () => {
  const actual = reverseString("my father is a teacher");
  const expected = "rehcaet a si rehtaf ym";
  expect(actual).toBe(expected);
});

test("handles an empty string", () => {
  expect("").toBe("");
});

test("handles non-alphanumeric characters", () => {
  const actual = reverseString("hello!@#$%^&*()_+");
  const expected = "+_)(*&^%$#@!olleh";
  expect(actual).toBe(expected);
});
