/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if (!s.length) {
        return 0;
    }
    var map = new Map();
    for (var i = 0; i < s.length; ++i) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    var start = 0, result = -1;
    for (var i = 0; i < s.length; ++i) {
        if(map.get(s[i]) >= k) {
            continue;
        } else {
            if ((i - start) < k) {
                start = i + 1;
            } else {
                result = Math.max(result,longestSubstring(s.substr(start, i), k));
                start = i + 1;
            }   
        }
    }
    result = Math.max(result,longestSubstring(s.substr(start, s.length - 1), k));
    if(start === 0) {
        return s.length;
    } else {
        return Math.max(0, result);
    }
};

var s = "bbaaacbd", k = 3;
console.log(longestSubstring(s, k));