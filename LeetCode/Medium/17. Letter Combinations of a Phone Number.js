/**
 * @param {string} digits
 * @return {string[]}
 */

// var letterCombinations = function (digits) {
//   let a = digits.length;
//   let result = [];

//   const keypad = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };
//   if (a === 0) {
//     return result;
//   }

//   let arr =[]
//   for(let i = a; i>0; i--){
//     arr.push(digits[i])      
//   }

//   function permute(arr, m = []) {
//     if (m.length === a) {
//       result.push(m);
//       return;
//     }
//     if (arr.length === 0) return;

//     for (let i = 0; i < arr.length; i++) {
//       const curr = arr.slice();
//       const next = curr.splice(i, 1);
//       permute(curr, m.concat(next));
//     }
//   }
//   permute(arr);
//   return result;
// };

var letterCombinations = function (digits) {
  if (!digits) return [];
  const kb = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let str = [],
    res = [];
  BT();
  return res;

  function BT(idx=0) {
    if (idx === digits.length) {
      res.push(str.join(""));
      return;
    }
    let digit = digits[idx], charStr = kb[+digit];
//each layer we start from index 0.
    for (let i = 0; i < charStr.length; i++) {
      str.push(charStr[i]);
      BT(idx + 1);
      str.pop();
    }
  }
  
};