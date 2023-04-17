/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

  const inObj = Object.entries(obj);
  const objNew = {};

  for (const el of fields) {
    for (const element of inObj) {
      if (element[0] === el) {
        objNew[el] = element[1];
      }
    }
  }
  return objNew;
};
