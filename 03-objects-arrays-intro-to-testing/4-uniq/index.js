/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  let newArray = [];
  if (arr === undefined) {
    return newArray;
  }
  let set = new Set();
  for (const element of arr) {
    set.add(element);
  }
  newArray = [...set];
  return newArray;
}
