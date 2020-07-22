/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var set = {};
    for(var i = 0; i < s.length; ++i) {
        set[s[i]] ? set[s[i]]++ : set[s[i]] = 1;
    }
    for(var i = 0; i < t.length; ++i) {
        if (!set[t[i]]) {
            return t[i];
        } else {
            set[t[i]]--;
        }
    }
};