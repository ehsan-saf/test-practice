import analyzeArray from "../scripts/analyzeArray";

test("Returns an object", () => {
  expect(typeof analyzeArray([])).toBe("object");
});

test("Throws a TypeError for non-array input", () => {
  expect(() => analyzeArray("Not an array !")).toThrow(TypeError);
});

test("Analyzes positive and negative decimals", () => {
  const actual = analyzeArray([1, -2.5, 3.7, -6.2, 1]);
  const expected = {
    average: -0.6,
    min: -6.2,
    max: 3.7,
    length: 5,
  };
  expect(actual).toMatchObject(expected);
});

test("Handles non numeric values", () => {
  const actual = analyzeArray([1, "12", 3.7, "hello", 5]);
  const expected = "contains non-numeric";
  expect(actual).toBe(expected);
});
