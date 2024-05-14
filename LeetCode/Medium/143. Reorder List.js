/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return;
  }

  // 노드를 반으로 나누기 위해 두 개의 포인터 설정
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 중간 지점 이후의 연결 리스트 역순으로 뒤집기
  let prev = null;
  let curr = slow.next;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  slow.next = null; // 첫 번째 반의 끝을 표시

  // 두 연결 리스트 번갈아가며 합치기
  let p1 = head;
  let p2 = prev;
  while (p1 && p2) {
    let next1 = p1.next;
    let next2 = p2.next;
    p1.next = p2;
    p2.next = next1;
    p1 = next1;
    p2 = next2;
  }
};
