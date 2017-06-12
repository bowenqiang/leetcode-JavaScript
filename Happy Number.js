/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow=helper(n);
    let fast=helper(helper(n));
    while(slow!==fast){
        slow=helper(slow);
        fast=helper(helper(fast));
    }
    return slow===1;

};

function helper(n){
    let ans=0;
    do{
        let temp=n%10;
        n=parseInt(n/10);
        ans+=temp*temp;
    }while(n!==0)
    return ans;
}
