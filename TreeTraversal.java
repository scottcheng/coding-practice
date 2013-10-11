import java.util.*;
import lib.TreeNode;

public class TreeTraversal {
	public static void bfs(TreeNode n) {
		LinkedList<TreeNode> q = new LinkedList<TreeNode>();
		q.offer(n);
		while (!q.isEmpty()) {
			n = q.poll();
			System.out.println(n);
			if (n.left != null) {
				q.offer(n.left);
			}
			if (n.right != null) {
				q.offer(n.right);
			}
		}
	}

	public static void iterativePreorder(TreeNode n) {
		Stack<TreeNode> s = new Stack<TreeNode>();
		while (!s.isEmpty() || n != null) {
			if (n != null) {
				System.out.println(n);
				s.push(n.right);
				n = n.left;
			} else {
				n = s.pop();
			}
		}
	}

	public static void iterativeInorder(TreeNode n) {
		Stack<TreeNode> s = new Stack<TreeNode>();
		while (!s.isEmpty() || n != null) {
			if (n != null) {
				s.push(n);
				n = n.left;
			} else {
				n = s.pop();
				System.out.println(n);
				n = n.right;
			}
		}
	}
}
