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

// 이진 배열 탈출
// 뒤로 탈출 시에 빈 배열안에 root값을 주는 방식으로 진행

// 빈배열을 만들고 이진트리 끝까지 들어가야함
// while 문으로 root 종단까지 들어감
// 탈출 하먄서 빈배열안에 현재 root.val 을 push 하는 방식
// 재귀 실행후 push하는 방식  => 재귀로 root 안에 들어간 후에 일단 끝까지 들어감

// const postorderTraversalHelper = function(root, arr) {
//   if (root) {
//       postorderTraversalHelper(root.left,arr);
//       postorderTraversalHelper(root.right,arr);
//       postorderTraversalHelper(null,arr.push(root.val));
//   }
// };
// const postorderTraversal = function(root) {
//   const arr=[];
//   postorderTraversalHelper(root,arr);
//   return arr;
// };

// 재귀로 해결

var postorderTraversal = function (root) {
  return root
    ? [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val,
      ]
    : [];
};
