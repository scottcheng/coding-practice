// Problem: build a BST with minimal height from a sorted array

import lib.TreeNode;

public class BuildBST {

  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    TreeNode root = TreeNode.buildBST(arr);
    root.printTree();
  }

}
