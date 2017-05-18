/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let container={};
    let temp=[];
    let ans='';
    for(let x of s){
        if(container[x] === undefined){
            container[x] = 1;
        }else{
            container[x]++;
        }
    }
    console.log(container);
    for(let key in container){
        if(temp[container[key]] === undefined){
            temp[container[key]]=key.repeat(container[key]);
        }else{
        temp[container[key]]+=key.repeat(container[key]);
        }
    }
    console.log(temp);
    for(let x of temp){
        if(x === undefined)
            continue;
        else{
            ans=x+ans;
        }
    }
    return ans;
    
    
    
};
