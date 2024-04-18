/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 맵을 사용하여 중위 순회에서 각 값의 인덱스를 빠르게 찾을 수 있도록 함
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  // 재귀 함수를 정의하여 실제 트리 노드를 생성
  function buildTreeRecursion(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null; // 범위가 유효하지 않으면 null 반환

    // 전위 순회의 첫 번째 요소는 항상 현재 서브트리의 루트
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);

    // 중위 순회에서 루트의 인덱스 찾기
    const inRootIndex = map.get(rootVal);
    const numsLeft = inRootIndex - inStart; // 왼쪽 서브트리의 노드 수

    // 왼쪽과 오른쪽 서브트리를 재귀적으로 구성
    root.left = buildTreeRecursion(
      preStart + 1,
      preStart + numsLeft,
      inStart,
      inRootIndex - 1
    );
    root.right = buildTreeRecursion(
      preStart + numsLeft + 1,
      preEnd,
      inRootIndex + 1,
      inEnd
    );

    return root;
  }

  // 초기 호출
  return buildTreeRecursion(0, preorder.length - 1, 0, inorder.length - 1);
};
