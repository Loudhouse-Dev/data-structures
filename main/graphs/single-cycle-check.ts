/*
- You are given an array of integers where each integer represents a jump of its value in the array.
  (the ingteger 2 represents a jump of 2 indices forward in the array and -2 would represent a jump backwards
  of 2 spots in the array)

- If a jump moves past the bounds of the array it wraps to the other side of the array

- Write a function that returns a boolean representing whether the jumps in the array form a single cycle.
  A single cycle means you can start anywhere in the array and after following the jumps, every element in 
  the array is visited EXACTLY once before landing back on the index you started at.
*/

/*
- check if we're visiting 'n' elements where n = array.length
- if at any point we visit 'n' elements and we're back at our starting index
- if n = array.length and we haven't landed on the starting index, we are false

*/

export function hasSingleCycle(array: number[]): boolean {
    if (array.length === 0) return false;
    let elVisited = 0;
    let currIndex = 0;

    while (elVisited < array.length) {
        if (elVisited > 0 && currIndex === 0) return false;
        elVisited++;
        currIndex = getNextIndex(currIndex, array);
    }
    return currIndex === 0;
}

export function getNextIndex(currIndex: number, array: number[]) {
    const jump = array[currIndex];
    //current + jump does not give us next index since the number could potentially be very large
    const nextIndex = (currIndex + jump) % array.length;

    return nextIndex >= 0 ? nextIndex : nextIndex + array.length;
}
