/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  let n = nums.length;

  nums.sort((a, b) => a - b);

  let a = [];
  let vis = new Set(); // 중복 없이 정렬
  for (let i = 0; i < n; i++) {
    let t = -nums[i]; // target;
    for (let L = i + 1, R = n - 1; L < R; ) {
      // 이진 탐색
      let sum = nums[L] + nums[R];
      if (sum === t) {
        let key = `${nums[i]} ${nums[L]} ${nums[R]}`;
        if (!vis.has(key)) {
          //
          vis.add(key);
          a.push([nums[i], nums[L], nums[R]]);
        }
        L++;
      } else if (sum < t) {
        L++;
      } else {
        R--;
      }
    }
  }
  return a;
};

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//   nums.sort((a,b)=>a-b)
//   let result=[]
//   for(let x=0;x<nums.length;x++){
//       let low=x+1,high=nums.length-1,total=0
//       if(x>0 && nums[x]===nums[x-1])continue
//       while(low<high){
//           total=nums[low]+nums[high]+nums[x]
//           if(total===0){
//               result.push([nums[x],nums[low],nums[high]])
//               while(nums[low+1]===nums[low])low++
//               while(nums[high-1]===nums[high])high--
//               low++
//               high--
//           }else if(total<0){
//               low++
//           }else{
//               high--
//           }
//       }
//   }
//   return result
// };
