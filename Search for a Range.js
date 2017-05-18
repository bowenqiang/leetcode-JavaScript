/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = -1, end = -1;
    for(let x in nums){
        if(nums[x]===target && start ===-1){
            start = x;
            end = x;
        }
        if(nums[x]===target && start !==-1){
            end =x;
        }
    }
    return [parseInt(start),parseInt(end)];
    
};
