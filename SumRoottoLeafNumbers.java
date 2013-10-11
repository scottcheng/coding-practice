// http://oj.leetcode.com/problems/sum-root-to-leaf-numbers/

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
	private int res;
	public int sumNumbers(TreeNode root) {
		res = 0;
		sumNumbersHelper(root, 0);
		return res;
	}
	
	private void sumNumbersHelper(TreeNode n, int num) {
		if (n == null) {
			return;
		}
		num += n.val;
		if (n.left == null && n.right == null) {
			res += num;
		}
		sumNumbersHelper(n.left, num * 10);
		sumNumbersHelper(n.right, num * 10);
	}
}
