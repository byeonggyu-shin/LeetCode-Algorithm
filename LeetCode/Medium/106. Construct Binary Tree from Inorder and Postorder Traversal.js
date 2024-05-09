/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null; // 중위 또는 후위 순회 결과가 비어 있으면 null 반환
  }

  const rootVal = postorder.pop(); // 후위 순회의 마지막 요소는 루트 노드
  const root = new TreeNode(rootVal); // 루트 노드 생성

  // 중위 순회에서 루트 노드의 위치 찾기
  const rootIndex = inorder.indexOf(rootVal);

  // 좌우 서브트리를 재귀적으로 재구성
  const leftInorder = inorder.slice(0, rootIndex); // 중위 순회의 왼쪽 부분
  const rightInorder = inorder.slice(rootIndex + 1); // 중위 순회의 오른쪽 부분

  root.left = buildTree(leftInorder, postorder.slice(0, leftInorder.length)); // 좌측 서브트리 재구성
  root.right = buildTree(rightInorder, postorder.slice(leftInorder.length)); // 우측 서브트리 재구성

  return root; // 재구성된 트리의 루트 반환
};

var buildTree = function (inorder, postorder) {
  if (inorder.length !== postorder.length) return null;

  const map = {};

  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }

  return build(
    map,
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};

function build(map, inorder, is, ie, postorder, ps, pe) {
  if (is > ie || ps > pe) return null;

  let root = new TreeNode(postorder[pe]);

  // 중위 순회에서 루트 노드의 인덱스
  let inRoot = map[root.val];
  let numLeft = inRoot - is;

  root.left = build(
    map,
    inorder,
    is,
    inRoot - 1,
    postorder,
    ps,
    ps + numLeft - 1
  );
  root.right = build(
    map,
    inorder,
    inRoot + 1,
    ie,
    postorder,
    ps + numLeft,
    pe - 1
  );

  return root;
}
