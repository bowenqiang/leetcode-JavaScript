/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var helper = function(head, root) {
    if (!head) {
        return true;
    }
    if (!root) {
        return false;
    }
    if (head.val !== root.val) {
        return false;
    }
    return helper(head.next, root.left) || helper(head.next, root.right);

};
var isSubPath = function(head, root) {
    if (!head) {
        return true;
    }
    if (!root) {
        return false;
    }
    if (helper(head, root)) {
        return true;
    }
    return isSubPath(head, root.left) || isSubPath(head, root.right);
};