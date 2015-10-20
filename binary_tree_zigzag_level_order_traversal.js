// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) { return []; }

    var ret = [];
    var curRow = [root];
    var nextRow = [];
    var reverse = false;
    while (curRow.length > 0) {
        var resRow = [];
        curRow.forEach(function(n, i) {
            resRow[reverse ? curRow.length - i - 1 : i] = n.val;
            if (n.left) { nextRow.push(n.left); }
            if (n.right) { nextRow.push(n.right); }
        });
        ret.push(resRow);
        curRow = nextRow;
        nextRow = [];
        reverse = !reverse;
    }
    return ret;
};
