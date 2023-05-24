/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
  let result = [];

  function dfs(candidates, target, path, start) {
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] === target) {
        result.push([...path, candidates[i]]);
      } else if (candidates[i] < target) {
        dfs(candidates, target - candidates[i], [...path, candidates[i]], i);
      }
    }
  }

  dfs(candidates, target, [], 0);
  return result;
};