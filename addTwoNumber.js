// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 배열에서 꺼내 합을 구하고 다시 배열에 unshift하는 방법 <= 런타임 오류 발생
  let num1 = l1.reverse();
  let num2 = l2.reverse();

  let sum = Number(num1.join('')) + Number(num2.join(''))

  let result = [];

  for (let i = 0; i < String(sum).length; i++) {
    result.unshift(Number(String(sum)[i]))
  }

  return result;



};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))

