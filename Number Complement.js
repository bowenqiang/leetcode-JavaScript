/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let ans=0;
    let count=0
    let savenum=num;
    while(num!==0){
        if((num & 1)===0)
        {
            let temp=Math.pow(2,count);
            if(temp>savenum)
                return ans;
            else
                ans+=temp;
        }
        num=num>>1;
        count++;
            
        
    }
    return ans;
};
