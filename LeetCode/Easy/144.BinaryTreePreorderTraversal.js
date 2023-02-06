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
 * @return {number[]}
 */

// 재귀    있다면 arr에 널고 재귀 실행
var preorderTraversal = function(root) {

  if (root === null) return [];
    
  var result = [];
  var stack = [];
  stack.push(root);
  while (stack.length > 0) {
      var curr = stack.pop();
      if (curr !== null) {
          result.push(curr.val);
          if (curr.right !== null) stack.push(curr.right);
          if (curr.left !== null) stack.push(curr.left);
      }
  }
  return result;
    
};


// 재귀  빈배열과 루트를 재귀돌려서 파라미터로 준 빈배열 안에 루트 값을 추가하는 방식 
// var preorderTraversal = function(root, res = []) {
//   return helper(root, res);
// };

// var helper = function(root, res) {
//   if (root === null) {
//       return res;
//   }

//   res.push(root.val);
//   preorderTraversal(root.left, res);
//   preorderTraversal(root.right, res);

//   return res;
// }