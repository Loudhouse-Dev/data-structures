/*
Write a function, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). 
The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.


const list = {
  f: [g, i],
  g: [h],
  h: [],
  i: [g, k],
  j: [i],
  k: []
}

  | f | ----> | g | -----> | h |
    |
    |
  | i | ----> | j |


  | k |

*/

export const hasPathBFS = (graph: Graph, src: string, dst: string) => {
    //instantiate queue to help traverse
    const queue = [src];

    //while queue is not empty
    while (queue.length > 0) {
        //remove first element from queue
        const current = queue.shift()!;
        //if the current node is target node, return true
        if (current === dst) return true;
        //iterate over neighbors of the current node
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
};
