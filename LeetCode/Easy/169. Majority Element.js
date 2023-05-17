/**
 * @param {number[]} nums
 * @return {number}
 */
// 만약 nums에 처음 나온 요소를 빈 객체에 넣고 
// 중복되아 나온 경우 객체에 ++1 

// 객체에서 벨류 값이 가장 높은 키값을 출력
var majorityElement = function(nums) {

  const obj = {};
    
  for(var i = 0; i < nums.length; i++){
      obj[nums[i]] = obj[nums[i]] + 1 || 1;
      if(obj[nums[i]] > nums.length / 2)  return nums[i];
  }
  
};


console.log([2,2,1,1,1,2,2])