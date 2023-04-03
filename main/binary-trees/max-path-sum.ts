/*
Write a function that takes in the root of a binary tree that contains number values. 
The function should return the maximum sum of any root to leaf path within the tree.
You may assume that the input tree is non-empty.
*/

//import { Node } from './depth-first-values';

class Node {
    val: number;
    left: Node | null;
    right: Node | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const maxPathSum = (root: Node) => {
    //base case: we need this so we don't hit an undefined node
    if (root === null) return -Infinity;

    //base case (If we hit a leaf, i.e: no more children)
    if (root.left === null && root.right === null) return root.val;

    const maxSum = Math.max(
        Number(maxPathSum(root.left!)),
        Number(maxPathSum(root.right!))
    );

    return root.val + maxSum;
};

//Test Cases:

const a = new Node(3);
const b = new Node(9);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   9     4
//  / \      \
// 4   -2     1

console.log(maxPathSum(a)); //---->16
