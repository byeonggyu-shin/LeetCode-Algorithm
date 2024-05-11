/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function (head) {
  if (!head) return null;

  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  function dfs(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    return new TreeNode(values[mid], dfs(left, mid - 1), dfs(mid + 1, right));
  }

  return dfs(0, values.length - 1);
};
