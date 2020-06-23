/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var max = Math.floor(Math.sqrt( c ));
    var left = 0, right = max;
    while (left <= right) {
        var sum = left * left + right * right;
        if (sum === c) {
            return true;
        } else {
            if (sum < c) {
                left++;
            } else {
                right--;
            }
        }
    }
    return false;
};