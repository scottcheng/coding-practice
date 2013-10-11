package lib;

public class TreeNode {
	public int data;
	public TreeNode left;
	public TreeNode right;

	TreeNode(int data) {
		this.data = data;
	}

	public String toString() {
		return String.valueOf(this.data);
	}

	public void printTree() {
		System.out.println(this + " " + this.left + " " + this.right);
		if (this.left != null) {
			this.left.printTree();
		}
		if (this.right != null) {
			this.right.printTree();
		}
	}

	// Build (sub) BST using arr[left...right]
	private static TreeNode addToBST(int[] arr, int left, int right) {
		if (left >= right) {
			return null;
		}
		int mid = (left + right) / 2;
		TreeNode n = new TreeNode(arr[mid]);
		n.left = addToBST(arr, left, mid);
		n.right = addToBST(arr, mid + 1, right);
		return n;
	}

	// Build a BST with minimal height from a sorted array
	public static TreeNode buildBST(int[] arr) {
		return addToBST(arr, 0, arr.length);
	}
}
