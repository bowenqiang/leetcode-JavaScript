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
var diameterOfBinaryTree = function(root) {
    if (!root) {
        return 0;
    }
    var left = diameterOfBinaryTree(root.left);
    var right = diameterOfBinaryTree(root.right);
    var center = diameterHelper(root.left) + diameterHelper(root.right);
    return Math.max(left, right, center);
};

var diameterHelper = function(root) {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(diameterHelper(root.left), diameterHelper(root.right));
}