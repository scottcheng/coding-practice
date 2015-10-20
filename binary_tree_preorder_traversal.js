// https://leetcode.com/problems/binary-tree-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var ret = [];
    var stack = [root];
    while (stack.length > 0) {
        var n = stack.pop();
        if (!n) { continue; }
        ret.push(n.val);
        stack.push(n.right);
        stack.push(n.left);
    }
    return ret;
};
