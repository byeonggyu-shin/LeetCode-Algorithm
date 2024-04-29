/**
 * Definition for a singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head; // 리스트가 비어 있거나 노드가 하나뿐이라면 그대로 반환
  }

  let length = 1;
  let current = head;

  while (current.next) {
    current = current.next;
    length++;
  }

  // 리스트의 끝을 리스트의 시작으로 연결하여 원형 리스트 생성
  current.next = head;

  // 회전 횟수 조정
  k = k % length;

  // 새로운 리스트의 시작 지점 찾기
  let stepsToNewHead = length - k;
  let newTail = head;

  // 새로운 리스트의 꼬리 위치로 이동
  for (let i = 1; i < stepsToNewHead; i++) {
    newTail = newTail.next;
  }

  // 새로운 리스트의 머리 위치
  let newHead = newTail.next;

  // 원형 리스트를 끊어서 새로운 리스트 생성
  newTail.next = null;

  return newHead;
};
