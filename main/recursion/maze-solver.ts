/*
We are given a two dimensional array, where the first dimension represents
columns of a grid and the second dimension represents rows.

'x' represents a blocked path

Example Maze:

    const maze = [
        'xxxxxxxxxx x',
        'xxxxxxxxxx x',
        'xxxxxxxxxx x',
        'xxxxxxxxxx x',
        'x          x',
        'x xxxxxxxxxx',
    ];

*/

export type Point = {
    x: number;
    y: number;
};

export function mazeSolver(
    maze: string[],
    wall: string,
    start: Point,
    end: Point
): Point[] {
    const visited: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        visited.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, visited, path);

    return path;
}

const dir = [
    [-1, 0], //left
    [1, 0], //right
    [0, -1], //down
    [0, 1], //up
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    visited: boolean[][],
    path: Point[]
): boolean {
    //1. Base case
    //we are no longer within the grid
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    //on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    //if we get here, we are successfully at the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    //if we've been here before, leave
    if (visited[curr.y][curr.x]) {
        return false;
    }

    //3 steps of recursion
    //pre
    //recurse
    //post

    //Pre condition
    visited[curr.y][curr.x] = true;
    path.push(curr);

    //recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                visited,
                path
            )
        ) {
            return true;
        }
    }
    //Post condition
    path.pop();

    //if we are here, we did not find an end
    return false;
}
