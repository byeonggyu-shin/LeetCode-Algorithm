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
 * @return {boolean}
 */
 const isBalanced = function(root) {
  const height = (node) => {
    if (node === null) {
        return -1;
    }
    return 1 + Math.max(height(node.left), height(node.right));
}
  if (root === null) {
    return true;
} else {
    let diff = Math.abs(height(root.left) - height(root.right));
    return diff < 2
        && isBalanced(root.left)
        && isBalanced(root.right);
}
};