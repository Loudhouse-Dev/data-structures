/*
Wrtie a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

                      1
                  /       \
                 2         3
              /    \    /    \
             4      5  6      7
           /  \ 
          8   9

  This could be solved with a BFS using a queue, but the recursive solution has a better space compplexity of O(d) where d is the depth of the tree. 
  The recursive solution has a time complexity of O(n) where n is the number of nodes in the tree.
*/

export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function invertBinaryTree(tree: BinaryTree | null) {
    //Base Case: if root node is null return
    if (tree === null) return;
    //Swap left and right nodes
    swapLeftAndRightNodes(tree);
    //Recursively call invertBinaryTree on left and right subtrees
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

//Define helper function to recursively swap tree nodes
function swapLeftAndRightNodes(tree: BinaryTree) {
    //define variable to temporarily hold value before swapping
    const left = tree.left;
    //swap left and right nodes
    tree.left = tree.right;
    tree.right = left;
}
