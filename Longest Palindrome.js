/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var set = {}, result = 0, oddNum = 0;
    for(var i = 0; i < s.length; ++i) {
        if(set[s[i]]) {
            set[s[i]]++;
        } else {
            set[s[i]] = 1;
        }
        if(!(set[s[i]] % 2)) {
            result += 2;
            oddNum--;
        } else {
            oddNum++;
        }
    }
    return oddNum ? result + 1 : result;
};