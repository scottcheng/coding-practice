// Problem: build a BST with minimal height from a sorted array

public class BuildBST {

  private static class TreeNode {
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
  }

  // Build BST using arr[left...right]
  public static TreeNode buildBST(int[] arr, int left, int right) {
    if (left >= right) {
      return null;
    }
    int mid = (left + right) / 2;
    TreeNode n = new TreeNode(arr[mid]);
    n.left = buildBST(arr, left, mid);
    n.right = buildBST(arr, mid + 1, right);
    return n;
  }

  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4, 5, 6};
    TreeNode root = buildBST(arr, 0, arr.length);
    root.printTree();
  }
}
