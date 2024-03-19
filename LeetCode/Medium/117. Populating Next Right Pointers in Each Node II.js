/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  let levelStart = root;

  while (levelStart) {
    let curr = levelStart;
    let prev = null;

    while (curr) {
      // 왼쪽 자식이 있을 때, 왼쪽 자식의 next를 오른쪽 자식으로 설정
      if (curr.left) {
        if (prev) {
          prev.next = curr.left;
        }
        prev = curr.left;
      }

      // 오른쪽 자식이 있을 때, 왼쪽 자식의 next를 오른쪽 자식으로 설정
      if (curr.right) {
        if (prev) {
          prev.next = curr.right;
        }
        prev = curr.right;
      }

      // 다음 노드로 이동
      curr = curr.next;
    }

    // 다음 레벨의 시작 노드로 이동
    while (levelStart && !levelStart.left && !levelStart.right) {
      levelStart = levelStart.next;
    }

    if (levelStart) {
      levelStart = levelStart.left ? levelStart.left : levelStart.right;
    }
  }

  return root;
};
