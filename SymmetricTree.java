// http://oj.leetcode.com/problems/symmetric-tree/

/**
 * Definition for binary tree
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

import java.util.*;
 
public class Solution {
	public boolean isSymmetric(TreeNode root) {
		if (root == null) return true;
		return isSymmetricHelper(root.left, root.right);
	}
	private boolean isSymmetricHelper(TreeNode l, TreeNode r) {
		if (l == null && r == null) return true;
		if (l == null || r == null) return false;
		if (l.val != r.val) return false;
		return isSymmetricHelper(l.left, r.right) && isSymmetricHelper(l.right, r.left);
	}
}
