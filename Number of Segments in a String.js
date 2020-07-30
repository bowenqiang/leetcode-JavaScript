/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0, flag = false;
    for(var i = 0; i < s.length; ++i) {
        if(s[i] !== ' ') {
            flag = true;
        } else {
            if(flag) {
                count++;
                flag = false;
            }
        }
    }
    return flag ? count + 1 : count;
};