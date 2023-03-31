/*
Write a function that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph.

*/

export const connectedComponentsCount = (graph: Graph) => {
    //keep track of visited nodes so we don't run into inifinite loop if graph is cyclic
    const visited = new Set();
    //variable to keep track of connected components
    let count = 0;

    //Begin iterative traversal at every potential node
    for (let node in graph) {
        console.log(visited);
        //if we returned true, we are moving to a new connected node, so we increment count
        if (exploreNodes(graph, node, visited) === true) {
            count += 1;
        }
    }

    return count;
};

const exploreNodes = (
    graph: Graph,
    current: string,
    visited: Set<string | unknown>
) => {
    //if current node is in visited Set, we don't want to continue traversal
    if (visited.has(String(current))) return false;

    //add current node to visited Set
    visited.add(String(current));

    //iterate of adjacency list of our graph
    for (let neighbor of graph[current]) {
        exploreNodes(graph, neighbor, visited);
    }

    //return true when we move to explore a new node
    //this means the current component has no more neighbors
    return true;
};

console.log(
    connectedComponentsCount({
        0: ['8', '1', '5'],
        1: ['0'],
        5: ['0', '8'],
        8: ['0', '5'],
        2: ['3', '4'],
        3: ['2', '4'],
        4: ['3', '2'],
    })
); // expected: ----> 2
