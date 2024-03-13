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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const result = [];
  if (!root) return result;

  const dfs = (node, lv) => {
    if (result.length === lv) result.push([]);
    result[lv].push(node.val);
    if (node.left) {
      dfs(node.left, lv + 1);
    }
    if (node.right) {
      dfs(node.right, lv + 1);
    }
  };
  dfs(root, 0);
  return result;
};

// const levelOrder = function (root) {
//   // 층별로 순회하여 각 레벨에 배열에 해당 노드의 value를 추가하는 방식으로 구현
//   // bfs룰 queue로 푸는것이 o(n) 의 시간복잡도를 가진다.

//   let q = [root],
//     ans = [];
//   while (q[0]) {
//     let qlen = q.length,
//       row = [];
//     for (let i = 0; i < qlen; i++) {
//       let curr = q.shift();
//       row.push(curr.val);
//       if (curr.left) q.push(curr.left);
//       if (curr.right) q.push(curr.right);
//     }
//     ans.push(row);
//   }
//   return ans;
// };
