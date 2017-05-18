/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1==='0' || num2==='0')
        return '0';
    let num1Reversed=num1.split('').reverse().join('');
    let num2Reversed=num2.split('').reverse().join('');
    let ans='';
    let bit=''
    for(let x of num1Reversed){
        ans=addHelper(ans,bit+multiplyHelper(num2Reversed,x));
        bit+='0';
    }
    
    return ans.split('').reverse().join('');
    
};

function multiplyHelper(num,ch){
    let ans="";
    let carry = 0;
    for(let x in num){
        let temp = parseInt(num[x])*parseInt(ch)+carry;
        carry= parseInt(temp / 10);
        ans+= temp % 10;
    }
    if(carry!==0){
        ans+=carry;
    }
    return ans;
}

function addHelper(num1,num2){
    let ans="";
    let carry = 0;
    let lenght = Math.max(num1.length,num2.length);
    for(let i=0;i<lenght;i++){
        let ch1= i<num1.length?parseInt(num1[i]):0;
        let ch2= i<num2.length?parseInt(num2[i]):0;
        let temp = ch1+ch2+carry;
        ans+=temp%10;
        carry=parseInt(temp/10);
    }
    if(carry!==0){
        ans+=carry;
    }
    return ans;
}
