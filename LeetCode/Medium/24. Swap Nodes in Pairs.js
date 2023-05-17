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
var swapPairs = function (head) {
  if (head == null || head.next == null) return head;

  let node = new ListNode(0, head.next);
  node.next = head;
  let cur = node;

  while (cur.next !== null && cur.next.next != null) {
    let n1 = cur.next;
    let n2 = cur.next.next;
    cur.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    cur = cur.next.next;
  }
  return node.next;
};
