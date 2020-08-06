/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var result = [];
    helper(root, sum, [], result);
    return result;
};

function helper(root, sum, path, result) {
    if(!root) {
        return;
    }
    var pathSum = arraySum(path) + root.val;
    if(pathSum === sum && !root.left && !root.right) {
        result.push([...path, root.val]);
        return;
    }
    root.left && helper(root.left, sum, [...path,root.val], result);
    root.right && helper(root.right, sum, [...path, root.val], result);
}
    
function arraySum(array) { 
    return array.length ? array.reduce(function(x,y){
        return x + y;
    }) : 0;
}
