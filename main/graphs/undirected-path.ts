//Write a function, that takes in an array of edges for an undirected graph and two nodes
//(nodeA, nodeB). The function should return a boolean indicating
// whether or not there exists a path between nodeA and nodeB.

/*
Strategy:
 - Create and adjacency list
 - Check if graph has a cycle so we don't get stuck in infinite loop
 - Traverse graph and mark nodes as visited (Use a set?)
 - Traverse through neighbors, check if node has been visited
 - If we run into nodeB, return true
 - If we run out of neighbors before visiting nodeB return false
*/

export const undirectedPath = (
    edges: string[][],
    nodeA: string,
    nodeB: string
) => {
    //this function will build the adjacency list
    const graph = buildGraph(edges);
    return pathExists(graph, nodeA, nodeB, new Set());
};

const pathExists = (
    graph: Graph,
    src: string,
    dst: string,
    visited: Set<string>
) => {
    if (src === dst) return true;
    //keep moving if we have visited this node before
    if (visited.has(src)) return false;

    //mark node as visited
    visited.add(src);

    for (let neighbor of graph[src]) {
        if (pathExists(graph, neighbor, dst, visited) === true) {
            return true;
        }
    }

    return false;
};

const buildGraph = (edges: string[][]) => {
    const graph: Graph = {};

    //iterate through edge array
    for (let edge of edges) {
        //define a variable to hold edge array
        const [a, b] = edge;
        //if a or b are not in graph array, set it to an empty array
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        //if they are there, push them to graph
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

console.log(buildGraph(edges));
/* 
Complexity:
  n = #nodes
  e = #edges
  Time: O(e)
  Space: O(n)
*/
