/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const inObj = Object.entries(obj);
  const objNew = obj;

  for (const el of fields) {
    for (const element of inObj) {
      if (element[0] === el) {
        delete objNew[el];
      }
    }
  }
  return objNew;
};
