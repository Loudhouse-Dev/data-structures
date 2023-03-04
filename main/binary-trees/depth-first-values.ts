/*
depthFirstValues: write a function that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.
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

//overall strategy: use recursion to traverse the tree, pushing each node's value into an array as we go
export function depthFirstValues(root: Node | null): number[] {
    if (root === null) return [];

    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);

    return [root.val, ...leftValues, ...rightValues];
}
