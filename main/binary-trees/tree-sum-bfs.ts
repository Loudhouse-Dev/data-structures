//Breadth First
/*
Write a function that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree
** Use BFS to solve this one**
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

export const treeSumBFS = (root: Node | null) => {
    if (root === null) return 0;

    //define a queue to hold our values
    const queue: Node[] | [] = [root];
    //define a var to hold our sum as we compute
    let sum = 0;

    //loop over the queue
    //remove first el off of the queue
    //add the node to the sum
    while (queue.length > 0) {
        const node: Node | undefined = queue.shift();
        if (node !== undefined) {
            sum += node.val;
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }
    return sum;
};

/* 
Complexity: 
n = # of nodes
Time: O(n)
Space: O(n)
*/
