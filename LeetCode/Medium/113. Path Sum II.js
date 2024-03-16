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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const ans = [];

  const dfs = (node, path) => {
    if (!node) return;

    path.push(node.val); // 현재 노드 값을 경로에 추가

    if (!node.left && !node.right) {
      // 리프 노드인 경우
      const sum = path.reduce((acc, cur) => acc + cur); // 현재 경로의 합 계산
      if (sum === targetSum) {
        // 합이 목표 합과 같은지 확인
        ans.push([...path]); // 경로를 결과에 추가
      }
    }

    dfs(node.left, path.slice()); // 왼쪽 자식 노드로 재귀 호출 (현재 경로 복사하여 전달)
    dfs(node.right, path.slice()); // 오른쪽 자식 노드로 재귀 호출 (현재 경로 복사하여 전달)
  };

  dfs(root, []);

  return ans;
};
