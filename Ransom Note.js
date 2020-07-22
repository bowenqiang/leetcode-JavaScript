/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var charSet = {};
    magazine.split('').map(function(item, idx){
        charSet[item] ? charSet[item]++ : charSet[item] = 1;
    });
    var result = true;
    ransomNote.split('').map(function(item, idx){
        charSet[item] ? charSet[item]-- : result = false;
    });
    return result;
};