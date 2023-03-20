/* 
Problem:
  write a function that takes in a non-empty array of integers that are sorted in ascending order 
  and returns a new array of the same length with the squares of the original integers also sorted
  in ascending order 
*/

export function sortedSquaredArray(array: number[]) {
    //initialize 2 pointers, one from start, one from end
    let pointerA: number = 0;
    let pointerB: number = array.length - 1;

    //initialized the output array
    let sortedSquaredArray: number[] = [];

    //as long as input array length doesnt equal output array length
    //compare the absolute value of the integer at each pointer
    //square the larger integer and add it to the front of the output array
    while (array.length !== sortedSquaredArray.length) {
        //if pointerA is larger, square it, add to output array and increment the index forward
        if (Math.abs(array[pointerA]) > Math.abs(array[pointerB])) {
            sortedSquaredArray.unshift(Math.pow(array[pointerA], 2));
            pointerA++;
        } else {
            //if pointerB is larger, square it, add to output array and decrement pointerB
            sortedSquaredArray.unshift(Math.pow(array[pointerB], 2));
            pointerB--;
        }
    }
    return sortedSquaredArray;
}
