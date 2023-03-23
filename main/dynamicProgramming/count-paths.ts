/*
Problem: countPaths
Write a function, countPaths, that takes in a grid as an argument. 
In the grid, 'X' represents walls and 'O' represents open spaces. 
You may only move down or to the right and cannot pass through walls. 
The function should return the number of ways possible to travel from 
the top-left corner of the grid to the bottom-right corner.

*/
export const countPaths = (
    grid: string[][],
    row: number = 0,
    col: number = 0,
    cache: { [key: string]: number | null }
) => {
    const position = row + ',' + col;
    console.log(position);
    if (position in cache) return cache[position];
    //Base Cases:
    //if we are out of bounds or a wall, this is not a valid path, return 0
    if (row === grid.length || col === grid[0].length || grid[row][col] === 'X')
        return 0;
    //if we are in the last row and col, we are done, return 1 (accumulate the count)
    if (row === grid.length - 1 && col === grid[0].length - 1) return 1;

    //recursive case: if we're able to move down
    const moveDownCount = countPaths(grid, row + 1, col, cache);
    //recursive case: if we're able to move path to the right
    const moveRightCount = countPaths(grid, row, col + 1, cache);

    if (moveDownCount !== null && moveRightCount !== null)
        cache[position] = moveDownCount + moveRightCount;

    return cache[position];
};
const grid = [
    ['O', 'O', 'O'],
    ['O', 'O', 'X'],
    ['O', 'O', 'O'],
];
const row = 0;
const col = 0;
const cache = {};
console.log(countPaths(grid, row, col, cache));
