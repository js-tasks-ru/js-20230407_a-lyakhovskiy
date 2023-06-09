/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const directions = {
    asc: 1,
    desc: -1
  };

  const direction = directions[param];

  if (typeof direction === 'undefined') {
    console.error(`unexpected param: ${param} can not sort strings`);
  }

  return arr.slice().sort(function (a, b) {
    return direction * a.localeCompare(b,
      ["ru", "en"],
      {caseFirst: "upper"});
  });
}
