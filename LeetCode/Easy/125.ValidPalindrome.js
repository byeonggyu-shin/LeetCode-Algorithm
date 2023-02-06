/**
 * @param {string} s
 * @return {boolean}
 */
// const isPalindrome = function (s) {
//   if (s == "") {
//     return true;
//   } else {
//     const reg = /[A-Za-z0-9]+/g;
//     const sr = s.match(reg).join("").toLocaleLowerCase();
//     const stre = sr.split("").reverse().join("");
//     if (sr === stre) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };


var isPalindrome = function(s) {
    
	s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
	s = s.toLowerCase();
	var l = 0, r = s.length - 1;
	console.log(s);

	while(l<r) {
			if(s.charAt(l) != s.charAt(r)) {
					return false;
			}
			l++;
			r--;
	}
	return true;
};

