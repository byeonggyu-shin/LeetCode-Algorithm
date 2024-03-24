/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return []; // n이 0인 경우 빈 배열 반환

  const generateTreesHelper = (start, end) => {
    const result = [];

    // 종료 조건: start가 end를 넘으면 null을 포함한 빈 배열 반환
    if (start > end) {
      result.push(null);
      return result;
    }

    // 현재 구간에서 가능한 모든 루트 노드를 시도
    for (let i = start; i <= end; i++) {
      // 왼쪽 하위 트리 생성
      const leftSubtrees = generateTreesHelper(start, i - 1);

      // 오른쪽 하위 트리 생성
      const rightSubtrees = generateTreesHelper(i + 1, end);

      // 왼쪽, 오른쪽 하위 트리의 모든 조합에 대해 루트 노드로 i를 갖는 트리 생성
      for (const leftSubtree of leftSubtrees) {
        for (const rightSubtree of rightSubtrees) {
          const root = new TreeNode(i);
          root.left = leftSubtree;
          root.right = rightSubtree;
          result.push(root);
        }
      }
    }

    return result;
  };
  return generateTreesHelper(1, n);
};
