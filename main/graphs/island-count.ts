/*
Write a function, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

example:

[
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]

*/

export function islandCount(grid: string[][]) {
    const visited = new Set();
    let islandCount = 0;

    //loop through the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            //if we find land and haven't visited it before, we have found an island
            if (exploreIsland(grid, row, col, new Set()) === true)
                islandCount += 1;
        }
    }
    return islandCount;
}

function exploreIsland(
    grid: string[][],
    row: number,
    col: number,
    visited: Set<string>
) {
    //check if we're in bounds
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid.length;

    //escape if we're out of bounds
    if (!rowInbounds || !colInbounds) return;
    //we only want to traverse through land, no water
    if (grid[row][col] === 'W') return;

    const pos = row + ',' + col;
    //if we've seen this node before, we don't want to traverse it again
    if (visited.has(pos)) return false;
    //add the node to the visited set
    visited.add(pos);

    //move up
    exploreIsland(grid, row - 1, col, visited);
    //move down
    exploreIsland(grid, row + 1, col, visited);
    //move left
    exploreIsland(grid, row, col - 1, visited);
    //mover right
    exploreIsland(grid, row, col + 1, visited);

    return true;
}
