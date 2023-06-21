/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if(!numerator) return '0';
  
  let str = '';
  
  if(Math.sign(numerator) !== Math.sign(denominator)) str += '-';
  
  const numer = Math.abs(numerator)
  const denom = Math.abs(denominator)
  
  str += Math.floor(numer/denom);
  let rem = numer%denom;
  if(!rem) return str;
  str += '.'
  
  const map = new Map();
  
  // 반복 찾기
  while(rem !== 0) {
      map.set(rem, str.length);
      
      rem *= 10;
      str += Math.floor(rem/denom);
      rem %= denom
      
      if(map.has(rem)) {
          const idx = map.get(rem);
          return str.slice(0, idx) + `(${str.slice(idx)})`; 
      }
  }
  return str;
};


// var fractionToDecimal = function(numerator, denominator) {
    
//   if (denominator === 0) {
//      throw new Error("Division by zero error");
//    }
 
//    let result = Math.floor(Math.abs(numerator) / Math.abs(denominator));
//    let remainder = Math.abs(numerator) % Math.abs(denominator);
 
//    if (remainder === 0) {
//      return (numerator * denominator < 0 ? "-" : "") + result.toString();
//    }
 
//    let decimal = [];
//    let seenRemainders = new Map();
 
//    while (remainder !== 0) {
//      if (seenRemainders.has(remainder)) {
//        let index = seenRemainders.get(remainder);
//        decimal.splice(index, 0, "(");
//        decimal.push(")");
//        break;
//      }
 
//      seenRemainders.set(remainder, decimal.length);
//      remainder *= 10;
//      let quotient = Math.floor(remainder / Math.abs(denominator));
//      decimal.push(quotient.toString());
//      remainder %= Math.abs(denominator);
//    }
 
//    let decimalPart = decimal.join("");
//    if (numerator * denominator < 0) {
//      return "-" + result.toString() + "." + decimalPart;
//    } else {
//      return result.toString() + "." + decimalPart;
//    }
 
//  };