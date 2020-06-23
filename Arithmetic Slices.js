/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    var size = A.length;
    var dp = [0, 0];
    var sum = 0;
    for (var i = 2;i < size; ++i) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            dp[i] = dp[i - 1] + 1
        } else {
            dp[i] = 0;
        }
        sum += dp[i];
    }
    return sum;
};