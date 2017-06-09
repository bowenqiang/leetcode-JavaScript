/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let primesMap={a:2,b:3,c:5,d:7,e:11,f:13,g:17,h:19,i:23,j:29,k:31,l:37,m:41,n:43,o:47,p:53,q:59,r:61,s:67,t:71,u:73,v:79,w:83,x:89,y:97,z:101};
    let ans=[];
    let map=new Map();
    for(let str of strs){
        let key=1;
        for(let ch of str){
            key*=primesMap[ch];
        }
        if(map.has(key)){
            ans[map.get(key)].push(str);
        }else{
            map.set(key,ans.length);
            ans.push([str]);
        }
    }

    return ans;
    
};
