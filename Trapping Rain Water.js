/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var l2r = [height[0]], r2l = [height[height.length - 1]], result = 0;
    for (var i = 1; i < height.length; ++i) {
        if (height[i] < l2r[i - 1]) {
            l2r.push(l2r[i - 1]);
        } else {
            l2r.push(height[i]);
        }
    }
    for (var i = height.length - 2; i > -1; --i) {
        if (height[i] < r2l[0]) {
            r2l.unshift(r2l[0]);
        } else {
            r2l.unshift(height[i]);
        }
    }
    for (var i = 0; i < height.length; ++i) {
        result += Math.min(l2r[i], r2l[i]) - height[i];
    }
    return result;
};