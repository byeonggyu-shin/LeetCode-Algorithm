/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.split(' ')

  if (arr[arr.length - 1] === '') {
    let newArr = arr.filter((el) => el.length > 0)
    return newArr[newArr.length - 1].length
  }
  return arr[arr.length - 1].length
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))

