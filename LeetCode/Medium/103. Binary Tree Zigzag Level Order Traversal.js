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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const lvSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < lvSize; i++) {
      const node = queue.shift();

      if (leftToRight) {
        currentLevel.push(node.val); // 왼쪽에서 오른쪽으로 추가
      } else {
        currentLevel.unshift(node.val); // 오른쪽에서 왼쪽으로 추가
      }

      if (node.left) {
        queue.push(node.left); // 왼쪽 자식 노드 큐에 추가
      }

      if (node.right) {
        queue.push(node.right); // 오른쪽 자식 노드 큐에 추가
      }
    }

    result.push(currentLevel);
    leftToRight = !leftToRight; // 지그재그 방향 전환
  }

  return result;
};
