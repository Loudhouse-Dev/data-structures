type Graph = { [key: string]: string[] };

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

const depthFirstPrintIterative = (graph: Graph, source: string) => {
    //we us a stack for depth-first traversal
    const stack = [source];

    while (stack.length > 0) {
        //use non-null assertion operator to tell TS that we know the stack is not empty
        const current: string = stack.pop()!;
        console.log(current);
        //iterate over the neighbors of the current node
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};

const depthFirstPrintRecursive = (graph: Graph, source: string) => {
    //base case is implicit; if there are no neighbors, we're done
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrintRecursive(graph, neighbor);
    }
};

//
depthFirstPrintRecursive(graph, 'a'); //a, b, d, f, c, e
//Once we hit f, we're done, we can no longer traverse the graph
depthFirstPrintRecursive(graph, 'b'); //b, d, f
