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
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head; 
  }

  let dummy = new ListNode(0); // 더미 노드를 생성하여 결과 리스트의 시작 부분을 참조
  dummy.next = head;

  let prev = dummy; // 이전 노드를 추적하는 포인터, 초기에는 더미 노드를 가리킴

  while (head) {
    // 중복된 노드가 있는지 검사
    if (head.next && head.val === head.next.val) {
      // 현재 노드와 다음 노드의 값이 같다면, 중복된 값을 모두 건너뜀
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      // 중복된 값의 마지막 노드를 건너뛰어 삭제
      prev.next = head.next;
    } else {
      // 중복 없는 경우에는 이전 노드를 갱신
      prev = prev.next;
    }
    head = head.next; 
  }

  return dummy.next; 
