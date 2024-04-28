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
 * @return {number}
 */
var sumNumbers = function (root) {
  let totalSum = 0;

  function dfs(node, currentSum) {
    if (!node) {
      return;
    }

    // 현재 경로의 숫자를 누적
    currentSum = currentSum * 10 + node.val;

    if (!node.left && !node.right) {
      // 리프 노드에 도달한 경우, 현재 경로의 숫자를 총합에 추가
      totalSum += currentSum;
      return;
    }

    // 왼쪽과 오른쪽 자식 노드로 재귀 호출
    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  }

  dfs(root, 0);

  return totalSum;
};
