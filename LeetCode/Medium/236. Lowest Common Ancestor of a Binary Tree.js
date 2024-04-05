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
  const findLCA = (node, p, q) => {
    // 노드가 null이면 종료
    if (!node) return null;

    if (node === p || node === q) return node;

    const leftLCA = findLCA(node.left, p, q);
    const rightLCA = findLCA(node.right, p, q);

    // p와 q가 서로 다른 서브트리에 있는 경우 현재 노드가 LCA
    if (leftLCA && rightLCA) return node;

    // 왼쪽 서브트리에서 LCA를 찾은 경우 반환, 그렇지 않으면 오른쪽 서브트리에서 LCA를 반환
    return leftLCA ? leftLCA : rightLCA;
  };

  return findLCA(root, p, q);
};
