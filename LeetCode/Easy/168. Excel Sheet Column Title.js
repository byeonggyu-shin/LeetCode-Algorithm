/**
 * @param {number} columnNumber
 * @return {string}
 */

// a->z 까지 ++1 할당
// 자릿수가 커질경우 +26 ,
var convertToTitle = function (columnNumber) {
  let str = "";

  while (columnNumber > 0) {
    columnNumber--;
    str += String.fromCharCode((columnNumber % 26) + 65);
    columnNumber = Math.floor(columnNumber / 26);
  }

  // Reverse the string.
  str = str.split("").reverse().join("");
  return str;
};

// 26 으로 나누고 나머지를 체크하면서 맨 튓자리 부터 체크 후
// 힌 자리 씩 앞으로 진행 
// 모두 26으로 나눈후 결과값을 리버스해서 출력 

// var convertToTitle = function(n) {
//   if (n == 0) return null;
//   let result = '';
//   while (n > 0) {
//       let r = n % 26;
//       let d = parseInt(n / 26);
//       if (r == 0) {
//           r = 26;
//           d = d - 1;
//       }
//       result += String.fromCharCode (64 + r);
//       n = d;
//   }
//   return result.split('').reverse().join("");
// };
