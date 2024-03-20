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
var rightSideView = function (root) {
  if (!root) return root;

  const ans = [];
  // bfs, q로 해결
  let q = [root];
  while (q.length > 0) {
    const qLength = q.length;
    let rightVal = null;

    // 가장 오른쪽까지 반복 후 value 값 재할당함
    for (let i = 0; i < qLength; i++) {
      const node = q.shift();
      rightVal = node.val;

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    ans.push(rightVal);
  }

  return ans;
};
