/**
 * @param {string} s
 * @return {number}
 */
var str = 'ccbbacdcabbaa';

var palindromeHelper = function(str, index) {
    var left = index - 1, right = index + 1;
    while(left >=0 && right < str.length) {
        if (str[left] !== str[right]) {
            break;
        }
        left--;
        right++;
    }
    return str.slice(left + 1, right);
}

var longestPalindrome = function(s) {
    var strCopy = s;
    var strNew = "#" + strCopy.split('').join("#") + "#";
    maxLength = 1;
    for (var i = 1; i < strNew.length - 1; i++) {
        var palindrome = palindromeHelper(strNew, i).split('#').join('') || '';
        maxLength = Math.max(maxLength, palindrome.length);
    }
    return maxLength
};

console.log(longestPalindrome(str));