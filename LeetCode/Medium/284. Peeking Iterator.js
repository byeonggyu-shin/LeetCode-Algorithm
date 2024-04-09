/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.nextValue = iterator.next(); // 다음 값을 미리 읽어들임
  this.hasNextFlag = true; // 다음 값이 있는지 여부를 저장하는 플래그
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.nextValue; // 다음 값을 반환
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  const result = this.nextValue; // 현재 값을 저장
  this.nextValue = this.iterator.hasNext() ? this.iterator.next() : null; // 다음 값을 읽어들임
  this.hasNextFlag = this.nextValue !== null; // 다음 값이 있는지 여부 업데이트
  return result;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.hasNextFlag; // 다음 값이 있는지 여부 반환
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
