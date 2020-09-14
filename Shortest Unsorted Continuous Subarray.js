/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var nums_origin = [...nums];
    var nums_sorted = nums.sort(function(a, b) { return a - b});
    var i = 0, j = nums_origin.length - 1;
    while(i < j) {
        if(nums_sorted[i] === nums_origin[i]) {
            i++;
        }
        if(nums_sorted[j] === nums_origin[j]) {
            j--;
        }
        if (nums_sorted[i] !== nums_origin[i] && nums_sorted[j] !== nums_origin[j]) {
            break;
        }
    }
    if (i >= j) {
        return 0
    }
    return j - i + 1;
};