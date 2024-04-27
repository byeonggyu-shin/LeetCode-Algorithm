/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head;

  const dummy = new ListNode(0, head);
  let prev = dummy; // left의 이전 노드를 추적

  // left 노드로 이동
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // 노드 반전
  let curr = prev.next;
  let next;

  for (let i = left; i < right; i++) {
    next = curr.next; // 다음 노드를 저장
    curr.next = next.next; // 현재 노드의 다음을 다음 노드의 다음으로 설정
    next.next = prev.next; // 다음 노드를 반전된 부분의 첫 노드로 설정
    prev.next = next; // prev를 갱신
  }

  return dummy.next;
};
