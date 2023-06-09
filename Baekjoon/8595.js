const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n");

const n = Number(input[0]);
const word = input[1];

function calculateHiddenSum(word) {
  const d = "0123456789";
  let hidden_num = "";
  let hidden_sum = 0;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (d.includes(char)) {
      hidden_num += char;

      if (hidden_num.length > 6) {
        hidden_num = hidden_num.slice(-6);
      }
    } else {
      if (hidden_num) {
        hidden_sum += parseInt(hidden_num);
        hidden_num = "";
      }
    }
  }

  if (hidden_num) {
    hidden_sum += parseInt(hidden_num);
  }

  return hidden_sum;
}

console.log(calculateHiddenSum(word));

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let regex = new RegExp(/\d{1,6}/g);
// let found;
// let sum = 0;
// while (found = regex.exec(input[1])) {
//     sum += parseInt(found[0], 10);
// }
// console.log(sum);
