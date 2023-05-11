/*
Write a function that takes in the root of a binary tree and a target value. 
The function should return a boolean indicating whether or not the value is contained in the tree.

*/

import { Node } from './depth-first-values';

const treeIncludes = (root: Node | null, target: Node | null): boolean => {
    //base case
    if (root === null) return false;
    if (target !== null) if (root.val === target.val) return true;

    //recurse on left and right
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};
