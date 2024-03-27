export default function caesarCipher(text, key) {
  let result = "";
  let trimmedText = text.trim();
  for (let i = 0; i < trimmedText.length; i++) {
    let char = trimmedText[i];
    if (char === " " || !char.match(/[a-z]/i)) {
      result += char;
    } else if (char === char.toUpperCase(char)) {
      let ch = shift(char, key, true);
      result += ch;
    } else {
      let ch = shift(char, key, false);
      result += ch;
    }
  }
  return result;
}

function shift(char, key, isUpper) {
  let start = isUpper ? 65 : 97;
  return String.fromCharCode(((char.charCodeAt(0) + key - start) % 26) + start);
}
