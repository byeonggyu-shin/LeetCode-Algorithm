/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let number = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    number *= 26;
    number += columnTitle.charCodeAt(i) - 64;
  }
  return number;
};

