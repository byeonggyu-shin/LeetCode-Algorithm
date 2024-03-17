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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;

  let prev = null;

  const dfs = (node) => {
    // 오른쪽 서브트리를 먼저 처리
    dfs(node.right);
    dfs(node.left);

    // 현재 노드의 오른쪽 자식을 이전 노드로 설정
    node.right = prev;
    node.left = null; // 왼쪽 자식은 null로 설정

    // 이전 노드를 현재 노드로 갱신
    prev = node;
  };

  dfs(root);
};
