var TwoSum = function () {
  this.nums = new Set();
  this.sums = new Set();
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.nums.forEach((n) => {
    this.sums.add(number + n);
  });
  this.nums.add(number);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  if (this.sums.has(value)) return true;
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
