/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var newNum1=num1.split("").reverse();
    var newNum2=num2.split("").reverse();
    var length;
    var result=[];
    newNum1.length>newNum2.length?length=newNum1.length:length=newNum2.length;
    var carry=0;
    for(var i=0;i<length;i++){
        let a,b,c,sum;
        i+1>newNum1.length?a=0:a=parseInt(newNum1[i]);
        i+1>newNum2.length?b=0:b=parseInt(newNum2[i]);
        sum=a+b+carry;
        carry=Math.floor(sum/10);
        c=sum%10;
        result.push(c.toString());
    }
    if(carry!==0)
        result.push(carry.toString());
    return result.reverse().join("");
};
