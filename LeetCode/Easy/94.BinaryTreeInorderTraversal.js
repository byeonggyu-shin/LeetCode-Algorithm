/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const output = [];

  if (root === null) {
    return output;
  }

  /**
     * The goal is to maintain a stack of nodes to visit as we traverse 
     * down the tree. As we traverse down, We go left and push all the 
     * left nodes first in the stack. Once we reach to the bottom, we 
     * store the node value and traverse right.
     *           1
     *         /   \
     *        2     3    preorder traversal: 4 -> 2 -> 5 -> 1 -> 6 -> 3
     *       / \   /     (left -> root -> right)
     *      4   5 6
     */

  const stack = [];
  let curr = root;

  while (curr !== null || stack.length !== 0) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      output.push(curr.val);
      curr = curr.right;
    }
  }

  return output;

};