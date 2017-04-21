/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newStr=s.split(" ");
    let result="";
    for(let str1 of newStr){
        result+=str1.split("").reverse().join("")+" ";
    }
    return result.slice(0,-1);
};
