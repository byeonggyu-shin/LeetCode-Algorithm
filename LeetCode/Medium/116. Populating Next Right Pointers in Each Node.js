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
  if (!root) return null;
  // q로 해결

  let levelStart = root;

  while (levelStart) {
    let curr = levelStart;
    while (curr) {
      if (curr.left) {
        // 왼쪽이 있으면 왼쪽 다음은 오른쪽
        curr.left.next = curr.right;
      }
      if (curr.right && curr.next) {
        // 오른쪽도 있고 다음도 있을때 => 형제 노드의 자식을 연결
        curr.right.next = curr.next.left;
      }
      // 연결완료, 다음 노드 진행
      curr = curr.next;
    }
    // 루트 노드 다음은 없음 , 반복 종료
    levelStart = levelStart.left;
  }

  return root;
};
