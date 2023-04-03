/*
Write a function, that takes in the root of a binary tree that contains number values. 
The function should return the minimum value within the tree.
You may assume that the input tree is non-empty.
*/

import { Node } from './depth-first-values';

const treeMinValue = (root: Node) => {
    if (root === null) return Infinity;
    const smallestLeft: number = treeMinValue(root.left!);
    const smallestRight: number = treeMinValue(root.right!);

    return Math.min(root.val, smallestLeft, smallestRight);
};
