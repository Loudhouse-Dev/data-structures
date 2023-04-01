/*
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return the length of the shortest path between A and B. 
Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

Ex.

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]

*/

/*
High Level Strategy:

- Breadth first search will work better here because we are trying to find the shortest path
- define function to create adjacency list from edge array
- Initiate a queue so we get Breadth first order
- in the queue, store a ref to the current node and the starting point of our traversal, ex: (w, 0)
- check if current node is target node, if not, keep traversing
- increment distance from starting point
- track visited nodes so we don't get an infinite cycle
- if we hit target node, return it, otherwise, return -1
*/

export const shortestPath = (
    edges: string[][],
    nodeA: string,
    nodeB: string
) => {
    //build an adjacency list from the edges array
    const graph: Graph = buildAdjacencyList(edges);
    //track visited nodes
    const visited = new Set([nodeA]);
    //initiate queue with starting node and distance, we will increment distance each time we visit a new node
    const queue = [[nodeA, 0]];

    while (queue.length > 0) {
        const dequeued = queue.shift();
        if (!dequeued) continue;
        //we know our queue is going to hold a specific pair so we can destructure here
        const [node, distance] = dequeued;

        //if current node is target node, return the distance
        if (node === nodeB) return distance;
        //iterate over neighbors of current node
        for (let neighbor of graph[node]) {
            //if node hasn't been visited...
            if (!visited.has(neighbor)) {
                //add to visited Set()
                visited.add(neighbor);
                //push node and incremented distance variable into the queue
                //typescript wants to ensure distance is a number
                queue.push([String(neighbor), Number(distance) + 1]);
            }
        }
    }
    //if we are here, we exited the while loop without finding nodeB
    return -1;
};

const buildAdjacencyList = (edges: string[][]) => {
    const graph: Graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};
