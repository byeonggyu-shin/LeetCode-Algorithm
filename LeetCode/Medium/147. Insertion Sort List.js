/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const dummy = new ListNode();
  dummy.next = head;

  let prev = dummy; // 정렬된 부분의 마지막 노드를 추적하기 위한 포인터

  while (prev.next) {
    let curr = prev.next; // 현재 노드
    if (curr.next && curr.next.val < curr.val) {
      // 삽입해야 할 노드가 존재하고, 다음 노드의 값이 현재 노드보다 작은 경우
      while (prev.next && prev.next.val < curr.next.val) {
        // 정렬된 부분에서 올바른 위치를 찾을 때까지 이동
        prev = prev.next;
      }
      // curr.next를 prev.next 위치로 삽입
      let temp = prev.next;
      prev.next = curr.next;
      curr.next = curr.next.next;
      prev.next.next = temp;

      prev = dummy; // prev 포인터를 다시 더미 노드로 이동하여 다음 반복을 위해 준비
    } else {
      // 삽입해야 할 노드가 없거나, 다음 노드의 값이 현재 노드보다 큰 경우
      prev = prev.next; // 다음 노드로 이동
    }
  }

  return dummy.next;
};
