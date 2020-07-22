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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var sum = 0, nodes = [], node = root;
    while(node) {
        if(node.left) {
            if(!node.left.left && !node.left.right) {
                sum += node.left.val;
            } else {
                nodes.push(node.left);
            }
        }
        if(node.right) {
            nodes.push(node.right)
        }
        node = nodes.pop();
    }
    return sum;
};