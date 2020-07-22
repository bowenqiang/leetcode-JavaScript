/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var first = Number.MIN_SAFE_INTEGER, second = Number.MIN_SAFE_INTEGER, third = Number.MIN_SAFE_INTEGER;
    for(var i = 0; i < nums.length; ++i) {
        if(nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
            continue;
        }
        if(nums[i] === first) {
            continue;
        }
        if(nums[i] > second) {
            third = second;
            second = nums[i];
            continue;
        }
        if(nums[i] === second) {
            continue;
        }
        if(nums[i] > third) {
            third = nums[i];
            continue;
        }
    }
    return third === Number.MIN_SAFE_INTEGER ? first : third;
};