/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    //뒤에 큰수가 있으면 -, 없으면 +
    //배열로 만들고 값 할당 => 4번째 뒤까지 비교하고 제일큰수라면 +
    //아니면 -
    //모든 배열 인덱스의 합
    const symbolObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 <= s.length && symbolObj[s[i]] < symbolObj[s[i + 1]]) {
            result -= symbolObj[s[i]];
        } else {
            result += symbolObj[s[i]];
        }
    }
    return result;

};