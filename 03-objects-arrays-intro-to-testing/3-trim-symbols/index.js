/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return '';
  } else if (size === undefined) {
    return string;
  }

  let result = '';
  let count = 0;
  let lastChar = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char !== lastChar) {
      count = 1;
      lastChar = char;
      result += char;
    } else if (count < size) {
      count++;
      result += char;
    }
  }

  return result;
}
