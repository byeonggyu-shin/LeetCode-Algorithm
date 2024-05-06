/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let first = null;
  let second = null;
  let prev = null; // 이전 노드

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);
    if (prev && node.val < prev.val) {
      // 이전 노드보다 현재 노드의 값이 작다면, 잘못된 위치
      if (!first) {
        first = prev;
      }
      second = node;
    }

    prev = node;

    inorder(node.right);
  }

  inorder(root);

  if (first && second) {
    const temp = first.val;
    first.val = second.val;
    second.val = temp;
  }
};
