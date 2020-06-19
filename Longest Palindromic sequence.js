/**
 * @param {string} s
 * @return {number}
 */
var str = 'ccbbacdcabbaa';

var longestPalindromeSubseq = function(s) {
    var n = s.length;
    var dp = new Array(n);
    for (var i = 0; i < n; i++) {
        dp[i] = new Array(n);
    }
    for (var i = n - 1; i >=0 ; i--) {
        dp[i][i] = 1;
        for (var j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = (dp[i + 1][j - 1] || 0) + 2;
            }  else {
                dp[i][j] = Math.max((dp[i][j - 1] || 0), (dp[i + 1][j] || 0));
            }
        }
    }
    return dp[0][n - 1];
};

console.log(longestPalindromeSubseq(str));