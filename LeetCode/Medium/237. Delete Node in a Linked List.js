/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 다음 노드를 현재 노드로 복사
  node.val = node.next.val;
  // 다다음 노드를 현재 노드의 다음 노드로 지정
  node.next = node.next.next;
};
