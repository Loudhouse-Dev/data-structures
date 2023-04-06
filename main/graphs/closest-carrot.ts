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
    //need to initialize with the starting node
    const visited = new Set([rowStart + ',' + colStart]);
    //we're using breadth-first search, so we need a queue
    const queue = [[rowStart, colStart, 0]];

    //while the queue is not empty we iterate through it
    while (queue.length > 0) {
        //destructure the queue
        const [row, col, distance] = queue.shift()!;

        //if there is a carrot, return the distance
        if (grid[row][col] === 'C') return distance;
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        for (let direction of directions) {
            const [rowDir, colDir] = direction;
            const rowNext = row + rowDir;
            const colNext = col + colDir;
            const rowInbounds = 0 <= rowNext && rowNext < grid.length;
            const colInbounds = 0 <= colNext && colNext < grid[0].length;
            //if we've already visited this node, we don't want to traverse it again
            //we represent the node as a string so we don't get tripped up on referential value
            const position = rowNext + ',' + colNext;
            //if we've seen this node before, we don't want to traverse it again
            if (visited.has(position)) continue;
            //add the node to the visited set
            visited.add(position);
            //if we're out of bounds in either direction, we don't want to traverse it
            if (!rowInbounds || !colInbounds) continue;
            //if we're on a wall, we don't want to traverse it
            if (grid[rowNext][colNext] === 'X') continue;
            //add the node to the queue
            if (!visited.has(rowNext + ',' + colNext)) {
                queue.push([rowNext, colNext, distance + 1]);
                visited.add(position);
            }
        }
    }
    //if we've traversed the entire grid and there is no carrot, return -1
    return -1;
};
