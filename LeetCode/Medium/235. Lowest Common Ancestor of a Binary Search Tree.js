/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const pArr = [];
  const qArr = [];

  const bfs = (node, n, arr) => {
    arr.push(node); // 노드 자체를 배열에 추가
    if (node === n) {
      // 노드 자체를 비교
      return;
    } else if (node.val < n.val) {
      bfs(node.right, n, arr); // 오른쪽 자식 노드 탐색
    } else {
      bfs(node.left, n, arr); // 왼쪽 자식 노드 탐색
    }
  };

  bfs(root, p, pArr);
  bfs(root, q, qArr);

  let ans = null; // LCA를 저장할 변수

  // 두 배열을 비교하여 LCA 찾기
  let length = Math.min(pArr.length, qArr.length);
  for (let i = 0; i < length; i++) {
    if (pArr[i] === qArr[i]) {
      ans = pArr[i];
    } else {
      break;
    }
  }

  return ans;
};

var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
