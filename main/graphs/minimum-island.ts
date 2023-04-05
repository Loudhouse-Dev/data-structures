/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

*/

export const minimumIsland = (grid: string[][]) => {
    const visited = new Set();

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 'L') {
                return exploreIsland(grid, row, col, new Set());
            }
        }
    }
};

const exploreIsland = (
    grid: string[][],
    row: number,
    col: number,
    visited: Set<string>
) => {
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
};
