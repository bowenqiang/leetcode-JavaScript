/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var map = {};
    var result = [];
    nums1.map(function(item, index) {
        map[item] = 1;
    });
    nums2.map(function(item, index){
        if (map[item]) {
            result.push(item);
            map[item] = 0;
        }
    });
    return result;
};