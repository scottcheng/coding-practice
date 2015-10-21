// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var recur = function(root, lower, upper) {
        if (!root) { return true; }
        return ((lower === null || root.val > lower)
             && (upper === null || root.val < upper)
             && recur(root.left, lower, root.val)
             && recur(root.right, root.val, upper));
    };

    return recur(root, null, null);
};
