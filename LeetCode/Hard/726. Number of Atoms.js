/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let stack = [];
  let i = 0;
  let n = formula.length;
  while (i < n) {
    if (formula[i] === "(") {
      stack.push(formula[i]);
      i++;
    } else if (formula[i] === ")") {
      let count = 0;
      while (i < n && formula[i] >= "0" && formula[i] <= "9") {
        count = count * 10 + (formula[i] - "0");
        i++;
      }
      if (count === 0) count = 1;
      let top = stack.pop();
      if (top === "(") {
        stack.push("(");
      } else {
        let countStr = count > 1 ? count.toString() : "";
        let pre = stack.pop();
        while (pre !== "(") {
          stack.push(pre + countStr);
          pre = stack.pop();
        }
      }
    } else {
      let count = 0;
      while (i < n && formula[i] >= "0" && formula[i] <= "9") {
        count = count * 10 + (formula[i] - "0");
        i++;
      }
      if (count === 0) count = 1;
      let atom = "";
      while (i < n && formula[i] >= "a" && formula[i] <= "z") {
        atom += formula[i];
        i++;
      }
      stack.push(atom + count.toString());
    }
  }
};

//
