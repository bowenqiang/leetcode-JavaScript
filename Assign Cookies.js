/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function(a, b) {
        return a - b;
    });
    s.sort(function(a, b) {
        return a - b;
    });
    var result = 0;
    for(var i = 0, j = 0; i < g.length && j < s.length; i++) {
        for(; j < s.length;j++) {
            if(s[j] >= g[i]) {
                result++;
                j++;
                break;
            }
        }
    }
    return result;
};