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
 * @return {number}
 */
 const minDepth = function(root) {
 
  //   let count = 1;

  //   const depth = (node) => {
  // if(node.left === null && node.right === null ){
  //   return count
  // } else {
  //   count++
  //  return Math.min(depth(node.left),depth(node.right))
  // }
  //   }

  //   return depth(root)


    if (!root) return 0
    let L = minDepth(root.left), R = minDepth(root.right)
    return 1 + (Math.min(L, R) || Math.max(L, R))
};

console.log(minDepth([3,9,20,null,null,15,7]))