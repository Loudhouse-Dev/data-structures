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

//Depth First
export const hasPath = (graph: Graph, src: string, dst: string) => {
    //if src and dst are equal we have found a path
    if (src === dst) return true;

    //
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    }

    return false;
};
