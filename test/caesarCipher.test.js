import caesarCipher from "../scripts/caesarCipher";

test("caesar cipher function is defined", () => {
  expect(caesarCipher).not.toBeUndefined();
});

test("Encrypts a simple word", () => {
  const actual = caesarCipher("hello", 2);
  const expected = "jgnnq";
  expect(actual).toBe(expected);
});

test("Encrypts upper and lower case characters correctly", () => {
  const actual = caesarCipher("hElLo", 2);
  const expected = "jGnNq";
  expect(actual).toBe(expected);
});

test("Encrypts a long string with spaces", () => {
  const actual = caesarCipher(
    "   chanGing the ordEr Of the letters of the alphabet   ",
    9
  );
  const expected = "lqjwPrwp cqn xamNa Xo cqn unccnab xo cqn juyqjknc";
  expect(actual).toBe(expected);
});

test("Handles punctuation", () => {
  const actual = caesarCipher("%hE#lL@o", 2);
  const expected = "%jG#nN@q";
  expect(actual).toBe(expected);
});
