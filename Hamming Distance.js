/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let z=x^y;
    let count=0;
    while(z!==0){
        if(z&1)
            count++;
        z=z>>1;
    }
    return count;
    
};
