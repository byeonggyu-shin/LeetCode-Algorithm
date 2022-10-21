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
const isSymmetric = function (root) {
  if (!root) { // Sanity check
    return true;
}

// Check if tree s & t are mirroring each other
function isMirror(s, t) {
    if (!s && !t) {
        return true; // Both nodes are null, ok
    }
    if (!s || !t || s.val !== t.val) {
        return false; // Found a mismatch
    }
    // Compare the left subtree of `s` with the right subtree of `t`
    // and the right subtree of `s` with the left subtree of `t`
    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
}

return isMirror(root.left, root.right);
};

console.log(isSymmetric())


