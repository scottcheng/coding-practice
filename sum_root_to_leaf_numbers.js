// https://leetcode.com/problems/sum-root-to-leaf-numbers/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    var recur = function(root, sum) {
        // root cannot be null

        var newVal = sum * 10 + root.val;
        if (!root.left && !root.right) {
            // leaf
            return newVal;
        }
        return (root.left ? recur(root.left, newVal) : 0)
             + (root.right ? recur(root.right, newVal) : 0);
    };

    if (root === null) { return 0; }
    return recur(root, 0);
};
