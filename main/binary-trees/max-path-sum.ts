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

console.log(maxPathSum(a)); //----> expect 16

const a2 = new Node(5);
const b2 = new Node(11);
const c2 = new Node(54);
const d2 = new Node(20);
const e2 = new Node(15);
const f2 = new Node(1);
const g2 = new Node(3);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
e2.left = f2;
e2.right = g2;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

console.log(maxPathSum(a2)); //---> expect 59
