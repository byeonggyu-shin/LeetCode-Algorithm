/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
  // 이중반복문으로 A,B 비교 
  // A.slice(n,A.length) === B 
  let a = headA, b = headB
  while (a !== b) {
    // 비교 반복 
      a = !a ? headB : a.next
      // b와 a의 다음 비교
      b = !b ? headA : b.next
  }
  return a
};