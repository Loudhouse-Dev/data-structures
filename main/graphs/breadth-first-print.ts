const graph2 = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

const graph3 = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

//breadth-first traversal
const breadthFirstPrint = (graph: Graph, source: string) => {
    //we use a queue for breadth-first traversal
    const queue = [source];

    //while queue is not empty
    while (queue.length > 0) {
        //remove the first element from the queue
        //use non-null assertion operator to tell TS that we know the queue is not empty
        const current = queue.shift()!;
        console.log(current);
        //iterate over the neighbors of the current node
        for (let neighbor of graph[current]) {
            //add neighbors to the end of the queue
            queue.push(neighbor);
        }
    }
};

breadthFirstPrint(graph2, 'a'); //a, b, c, d, e, f
breadthFirstPrint(graph3, 'a'); //a, c, b, e, d, f
