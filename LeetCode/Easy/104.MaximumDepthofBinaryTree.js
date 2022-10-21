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
 const maxDepth = function(root) {

  if (root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 재귀를 통해서 깊이따라 탐색하면 변수 count에 +1을 통해서 깊이 탐색

// 재귀 반복 횟수 구하기 
// 문제1 함수2개의 재귀이므로 단순하게 count에 +1 한다면 중복되어 카운트됨

// 무조건 같은 깊이로 null 을 추가하면서 재귀해서 추가되는 모든 el이 null이 되면 count/2
// [3,9,20,null,null,15,7]