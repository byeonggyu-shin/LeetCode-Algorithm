/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {

  let curr = root;
  let stack = [curr.left, curr.right];
  let num = 0; 
  let case = true;

  while (case) {
    let length = stack.length;

    for (let i = 0; i < length / 2; i++) {
      if (stack[i] !== stack[length - i]) {
        return false
      }
    }

    for (let i = 0; i < length; i++) {
      stack.push(stack[i].left);
      stack.push(stack[i].right);
    }

    stack.splice(0, length)

    num = 0
    for (let i of stack) {
      if (i === null) {
        num++
      }
      if (num === stack.length) {
        case = !case
      }
    }
  }

return true
};

console.log(isSymmetric())

node 1   
node 2 2   
node 34 43
567 765
  
길이 절반으로 나누고 맨앞과 맨뒤를 비교

