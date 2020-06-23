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
 * @param {number} limit
 * @return {TreeNode}
 */
var helper = function(root, limit, sum) {
    if (!root) {
        return false;
    }
    var left = helper(root.left, limit, sum + root.val) ? root.left : null;
    var right = helper(root.right, limit, sum + root.val) ? root.right : null;
    if (!left && !right && (root.left || root.right)) {
        return false;
    } else if ((root.val + sum) < limit && !left && !right) {
        return false;
    } else {
        root.right = right;
        root.left = left;
        return true;
    }
}
var sufficientSubset = function(root, limit) {
    if (helper(root, limit, 0)){
        return root;
    } else {
        return null;
    }
};