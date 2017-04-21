/**
 * @param {string[]} words
 * @return {string[]}
 */
let keyboard=['qwertyuiop','asdfghjkl','zxcvbnm'];
 
var findWords = function(words) {
    let ans=[];
    for(let word of words){
        if(isOneRow(word,keyboard))
            ans.push(word);
    }
    return ans;
    
};

function isOneRow(word,keyboard){
    let ans=true;
    let index=0;
    word=word.toLowerCase();
    for(let rowIndex in keyboard){
        if(keyboard[rowIndex].indexOf(word[0])!=-1){
            index=rowIndex;
            break;
        }
    }
    for(let ch of word){
        if(keyboard[index].indexOf(ch)==-1)
            return false;
    }
    return ans;
}
