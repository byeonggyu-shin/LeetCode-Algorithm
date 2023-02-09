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
for(let i=0 ; i<headA.length; i++){
  let newA = headA.slice(i ,headA.length-1)
  
  for(let j=0; j< headB.length; j++){
    if(headB[i] === newA[0]){
      if(headB[i+1] === newA[1]){
        return headB[i]
      }
    }
  }
}
};