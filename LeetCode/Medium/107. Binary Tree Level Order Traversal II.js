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
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const ans = [];

  while (queue.length > 0) {
    const lvSize = queue.length;
    const currLv = [];

    for (let i = 0; i < lvSize; i++) {
      const node = queue.shift(); // 큐에서 노드를 꺼냄

      currLv.push(node.val); // 현재 노드 값을 레벨 배열에 추가

      if (node.left) {
        queue.push(node.left); // 왼쪽 자식 노드 큐에 추가
      }

      if (node.right) {
        queue.push(node.right); // 오른쪽 자식 노드 큐에 추가
      }
    }

    ans.unshift(currLv);
  }

  return ans;
};
