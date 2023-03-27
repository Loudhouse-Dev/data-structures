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
    let islandCount = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 'L') {
                islandCount++;
                sinkIsland(grid, row, col);
            }
        }
    }
    return islandCount;
}

function sinkIsland(grid: string[][], row: number, col: number) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
        return;
    if (grid[row][col] !== 'L') return;
    grid[row][col] = 'D';
    sinkIsland(grid, row - 1, col);
    sinkIsland(grid, row + 1, col);
    sinkIsland(grid, row, col - 1);
    sinkIsland(grid, row, col + 1);
}
