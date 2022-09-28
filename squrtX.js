/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

  if (x === 0) {
    return 0
  }
  let i = 1;

  while (i * i <= x) {
    i++
  }
  if (i > 1) {
    i--
  }

  return (i)
};

console.log(mySqrt(0))
console.log(mySqrt(1))
console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(15))
console.log(mySqrt(24))



// x <= n*n

// if x 가 9 - 16 이면 9리턴

