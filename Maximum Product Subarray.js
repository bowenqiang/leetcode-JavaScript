/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var result = nums[0]
    if (nums.length === 1) {
        return result;
    }
    var maxProducts = [result], minProducts = [result];
    for (var i = 1; i < nums.length; ++i) {
        if (nums[i] > 0) {
            maxProducts[i] = Math.max(maxProducts[i - 1] * nums[i], nums[i]);
            minProducts[i] = Math.min(minProducts[i - 1] * nums[i], nums[i]);
        } else {
            maxProducts[i] = Math.max(minProducts[i - 1] * nums[i], nums[i]);
            minProducts[i] = Math.min(maxProducts[i - 1] * nums[i], nums[i]);
        }
        result = Math.max(result, maxProducts[i]);
    }
    return result;
};