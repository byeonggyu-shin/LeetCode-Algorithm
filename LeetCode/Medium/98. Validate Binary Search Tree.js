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
 * @return {boolean}
 */
var isValidBST = function (root) {
  //노드의 값이 특정 범위에 속하는지 확인
  function validate(node, min, max) {
    if (!node) {
      return true; // 노드가 null인 경우, 유효함
    }

    if (node.val <= min || node.val >= max) {
      return false; // 노드의 값이 범위를 벗어나면 유효하지 않음
    }

    return (
      validate(node.left, min, node.val) && // 왼쪽 서브트리의 값은 현재 노드의 값보다 작아야 함
      validate(node.right, node.val, max) // 오른쪽 서브트리의 값은 현재 노드의 값보다 커야 함
    );
  }

  return validate(root, -Infinity, +Infinity);
};
