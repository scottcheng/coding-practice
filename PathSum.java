// http://oj.leetcode.com/problems/path-sum/

/**
 * Definition for binary tree
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

public class Solution {
	public boolean hasPathSum(TreeNode root, int sum) {
		// Note: The Solution object is instantiated only once and is reused by each test case.
		return hasPathSumHelper(root, 0, sum);
	}
	
	private boolean hasPathSumHelper(TreeNode n, int num, int sum) {
		if (n == null) {
			return false;
		}
		num += n.val;
		if (n.left == null && n.right == null && num == sum) {
			return true;
		}
		return hasPathSumHelper(n.left, num, sum) || hasPathSumHelper(n.right, num, sum);
	}
}
