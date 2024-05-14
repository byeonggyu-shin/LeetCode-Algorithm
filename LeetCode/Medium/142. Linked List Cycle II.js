/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  // 사이클을 판별하기 위한 포인터들 설정
  let slow = head;
  let fast = head;

  // 사이클이 존재하는지 판별
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // 두 포인터가 만나면 사이클이 존재한다고 판단
    if (slow === fast) {
      // 사이클이 시작되는 노드 찾기
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr; // 사이클이 시작되는 노드 반환
    }
  }

  // 사이클이 없는 경우
  return null;
};
