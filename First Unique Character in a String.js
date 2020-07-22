/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var set = {};
    var sArray = s.split('');
    sArray.map(function(item, idx){
        set[item] ? set[item]++ : set[item] = 1;
    });
    for(var i = 0; i < sArray.length; ++i) {
        var item = sArray[i];
        if(set[item] === 1) {
            return i;
        }
    }
    return -1;
};