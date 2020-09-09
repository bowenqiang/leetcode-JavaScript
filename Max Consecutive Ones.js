/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0,current = 0;
    for(var i = 0; i < nums.length; ++i) {
        if (i === 0) {
            if (nums[i] === 1) {
                current = 1;
            }
            continue;
        }
        if (nums[i] === 1) {
            if (nums[i] === nums[i - 1]) {
                current++;
            } else {
                current = 1;
            }
            continue;
        }
        if (nums[i] === 0) {
            max = max > current ? max : current;
        }
    }
    return max > current ? max : current;
};