/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // beforeQueue는 x보다 작은 노드들을 저장
  let beforeQ = new ListNode(0);
  let beforeHead = beforeQ; // 시작 노드

  // afterQueue는 x 이상의 노드들을 저장
  let afterQ = new ListNode(0);
  let afterHead = afterQ; // 시작 노드

  // 연결 리스트를 순회하면서 각 노드를 적절한 큐에 삽입
  while (head !== null) {
    if (head.val < x) {
      // x보다 작으면 beforeQ에 추가
      beforeQ.next = head;
      beforeQ = beforeQ.next;
    } else {
      // x 이상이면 afterQ에 추가
      afterQ.next = head;
      afterQ = afterQ.next;
    }
    head = head.next;
  }

  // 마지막 노드의 next를 null로 설정하여 연결리스트의 끝을 표시
  afterQ.next = null;
  // beforeQueue의 끝과 afterQueue의 시작을 연결
  beforeQ.next = afterHead.next;

  // beforeHead의 다음 노드를 반환하여 첫 번째 노드를 건너뛰기
  return beforeHead.next;
};
