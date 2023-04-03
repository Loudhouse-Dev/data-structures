/*
Write a function that takes in the root of a binary tree and a target value. 
The function should return a boolean indicating whether or not the value is contained in the tree.

*/

import { Node } from './depth-first-values';

const treeIncludesBST = (root: Node | null, target: Node | null): boolean => {
    if (root === null) return false;

    //define queue for traversal
    const queue = [root];

    //while queue is not empty
    while (queue.length > 0) {
        //dequeue node
        const node = queue.shift();

        //if node is target, return true
        if (node !== null) if (node?.val === target?.val) return true;

        //enqueue children
        if (node?.left !== null) queue.push(node!.left);
        if (node?.right !== null) queue.push(node!.right);
    }

    //if we are out of the loop and didn't return true, target doesn't exist in tree
    return false;
};
