/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */

  //  buf n 매개변수
  // buf 의 갯수 n으로 나눔 => 나머지 값 출략 
  // 나머지 값이 0 인 경우 문자열 길이반환 
  //  

  let internalBuf = [];

  return function(buf, n) {
      
        let readChars = 0;
        while(n>0) {
            if(internalBuf.length === 0) {
                if(read4(internalBuf) === 0) {
                    return readChars;
                }
            }
            
            buf.push(internalBuf.shift());            
            readChars++;
            n--;
        }
        return readChars;
  };
};