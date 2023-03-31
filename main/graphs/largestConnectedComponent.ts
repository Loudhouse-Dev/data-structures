/*
Write a function that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.
*/

/*
Strategy:
  - Iterate over potential nodes
  - Mark nodes as visited as we traverse through them
  - while we are inside a connected component, increment count for each new node
  - ?pass the count to an array that stores count for each connected component
  - compare counts and return the largest number

*/

const largestConnectedComponent = (graph: Graph) => {
    //we need to track visited node to break out of a cyclic graph
    const visited = new Set();
    //variable to track larges connected portion
    let largest = 0;

    //iterate over graph nodes
    for (let node in graph) {
        //helper function to count the number of unique nodes we traverse
        //closure allows us to persist size between calls
        const size = findSize(graph, node, visited);
        //if size is greater than 0 swap it with largest so we can return it after traversing
        if (size > largest) largest = size;
    }

    return largest;
};

const findSize = (
    graph: Graph,
    node: string,
    visited: Set<string | unknown>
) => {
    if (visited.has(String(node))) return 0;

    visited.add(String(node));

    let size = 1;
    //iterate over neighbors of nodes
    for (let neighbor of graph[node]) {
        //if we find a new neighbor, increment size recursively
        //until we run out of neighbors
        size += findSize(graph, neighbor, visited);
    }
    //return size, this will pass up to main function
    return size;
};

const list = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2'],
};

console.log(largestConnectedComponent(list));

const list2 = {
    1: ['2'],
    2: ['1', '8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2'],
};

console.log(largestConnectedComponent(list2));
