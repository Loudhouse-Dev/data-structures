/*
Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. 
In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. 
The function should return a number representing the length of the shortest path from the starting positionition to a carrot.
You may move up, down, left, or right, but cannot pass through walls (X). 
If there is no positionsible path to a carrot, then return -1.

EX:

const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

closestCarrot(grid, 1, 2); // -> 4

*/

export const closestCarrot = (
    grid: string[][],
    rowStart: number,
    colStart: number
) => {
    //keep track of visited nodes
    const visited = new Set();
    //we're using breadth-first search, so we need a queue
    const queue = [[rowStart, colStart, 0]];

    //while the queue is not empty we iterate through it
    while (queue.length > 0) {
        //destructure the queue
        const [row, col, distance] = queue.shift()!;
        //if we've already visited this node, we don't want to traverse it again
        //we represent the node as a string so we don't get tripped up on referential value
        const position = row + ',' + col;
        //if we've seen this node before, we don't want to traverse it again
        if (visited.has(position)) continue;
        //add the node to the visited set
        visited.add(position);
        //if there is no carrot, return the distance
        if (grid[row][col] === 'C') return distance;
        //use a helper function to traverse through node neighbors
        const neighbors = getNeighbors(grid, row, col);
        for (const neighbor of neighbors) {
            //add the neighbors to the queue
            queue.push([neighbor[0], neighbor[1], distance + 1]);
        }
    }
    return -1;
};
//helper function to get the neighbors of a node
const getNeighbors = (grid: string[][], row: number, col: number) => {
    const neighbors = [];
    //check if the neighbor is in bounds and not a wall
    if (row > 0 && grid[row - 1][col] !== 'X') neighbors.push([row - 1, col]);
    if (row < grid.length - 1 && grid[row + 1][col] !== 'X')
        neighbors.push([row + 1, col]);
    if (col > 0 && grid[row][col - 1] !== 'X') neighbors.push([row, col - 1]);
    if (col < grid[0].length - 1 && grid[row][col + 1] !== 'X')
        neighbors.push([row, col + 1]);
    return neighbors;
};
