import capitalize from "../scripts/capitalize";

test("Capitalize function exits", () => {
  expect(capitalize).not.toBeUndefined();
});

test("Capitalize the first char of hello world", () => {
  const actual = capitalize("hello world");
  const expected = "Hello world";
  expect(actual).toBe(expected);
});

test("Capitalize the first char of goodbye", () => {
  const actual = capitalize("goodbye");
  const expected = "Goodbye";
  expect(actual).toBe(expected);
});

test("skips space in string", () => {
  const actual = capitalize("     ehsan  ");
  const expected = "Ehsan";
  expect(actual).toBe(expected);
});

test("returns empty string for empty input", () => {
  const actual = capitalize("");
  const expected = "";
  expect(actual).toBe(expected);
});

test("returns capitalized input for one character strings", () => {
  const actual = capitalize("s");
  const expected = "S";
  expect(actual).toBe(expected);
});
