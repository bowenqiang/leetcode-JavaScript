/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(!t1 && !t2) {
        return null;
    }
    var newT = new TreeNode();
    mergeTreesHelper(t1, t2, newT);
    return newT;
};

var mergeTreesHelper = function(t1, t2, newT) {
    if (t1 || t2) {
        var t1Val = t1 && t1.val,t2Val = t2 && t2.val;
        newT.val = t1Val + t2Val;
    }
    var t1Left = t1 && t1.left, t2Left = t2 && t2.left;
    if (t1Left || t2Left) {
        newT.left = new TreeNode();
        mergeTreesHelper(t1Left, t2Left, newT.left)
    }
    var t1Right = t1 && t1.right, t2Right = t2 && t2.right;
    if (t1Right || t2Right) {
        newT.right = new TreeNode();
        mergeTreesHelper(t1Right, t2Right, newT.right)
    }
}