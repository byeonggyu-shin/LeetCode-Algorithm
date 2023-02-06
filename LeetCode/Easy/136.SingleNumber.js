/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
  let newArr = nums.filter(num => nums[0] !== num)
  if(nums.length-1 === newArr.length){
    return nums[0]
  } else if ( newArr.length ===1 ){
    return newArr[0]
  }

  while(newArr.length > 1){
  
      let arr = newArr.filter(num => newArr[0] !==  num)
      if(newArr.length-1 === arr.length){
        return newArr[0]
      } else if( arr.length === 1) {
        return arr[0]
      }
      else {
        newArr = arr
      }
  }
};

console.log(singleNumber([4,1,2,1,2]))
// nums 배욜에 0번 인덱스 el과 같은 el을 filter 
//if filter 했는데 길이가 1만 줄어들 경우  

//fastest
// var singleNumber = function(nums) {
//   let res = nums[0];
//   for(let i = 1; i < nums.length; i++){
//       res ^= nums[i];
//   }

//   return res;
// };