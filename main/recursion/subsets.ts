/*
Write a function that takes in an array as an argument. The function should return a 2D
array containing all of the subsets of the array. The 2D array should contain the empty
set, the array itself, and all of the non-empty subsets of the array.

* The elements wihtin the subsets and the subsets themselves can be in any order.
* You may assume that there will be no duplicate elements in the array.
*/

export const subsets = (array: number[]): number[][] => {
    //base case: if array is empty, return [[]]
    if (array.length === 0) return [[]];
    //recursive case
    //set first to array's first element
    const first = array[0];
    //set rest to array's remaining elements
    const rest = array.slice(1);
    //set subsets to subsets of rest
    const subArrays = subsets(rest);
    //set newSubsets to subsets
    const newArrays = subArrays.map((subArray) => [first, ...subArray]);
    //return subsets concat newSubsets
    return subArrays.concat(newArrays);
};
