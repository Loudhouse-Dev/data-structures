/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

*/

export const minimumIsland = (grid: string[][]) => {
    const visited = new Set();
    let minSize = Infinity;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const islandSize = exploreIslandSize(grid, row, col, new Set());
            if (islandSize > 0 && islandSize < minSize) {
                minSize = islandSize;
            }
        }
    }

    return minSize;
};

const exploreIslandSize = (
    grid: string[][],
    row: number,
    col: number,
    visited: Set<string>
): number => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid.length;

    //base case: escape if we're out of bounds in either direction
    if (!rowInbounds || !colInbounds) return 0;
    //base case: we only want to traverse through land, no water
    if (grid[row][col] === 'W') return 0;

    //visited logic
    //represent array as string so we don't get tripped up on referential value
    const pos = row + ',' + col;
    //if we've seen this node before, we don't want to traverse it again
    if (visited.has(pos)) return 0;
    //add the node to the visited set
    visited.add(pos);

    let islandSize: number = 1;
    //traverse upwards
    islandSize += exploreIslandSize(grid, row - 1, col, visited);
    //traverse downwards
    islandSize += exploreIslandSize(grid, row + 1, col, visited);
    //traverse left
    islandSize += exploreIslandSize(grid, row, col - 1, visited);
    //traverse right
    islandSize += exploreIslandSize(grid, row, col + 1, visited);

    return islandSize;
};
