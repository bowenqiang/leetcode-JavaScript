/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    })
    var min = nums[0], result = 0;
    for (var i = 1; i < nums.length; ++i) {
        result += nums[i] - min;
    }
    return result;
};