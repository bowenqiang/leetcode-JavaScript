/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.origin = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var result = [...this.origin];
    for (var i = 0; i < result.length; ++i) {
        var rnd = Math.floor(Math.random() * result.length);
        var temp = result[i];
        result[i] = result[rnd];
        result[rnd] = temp;
    }
    return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */