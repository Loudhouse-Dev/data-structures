/*
Write a function that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree
*/

export class Node {
    val: number;
    left: Node | null;
    right: Node | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Depth First:
export const treeSum = (root: Node | null): number => {
    //base case
    if (root === null) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
};

/* 
Complexity: 
n = # of nodes
Time: O(n)
Space: O(n)
*/
