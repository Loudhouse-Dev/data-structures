/*
Write a function that takes in an array of unique integers and returns an
array of all permutations of those integers in no particular order

if the input array is empty, the function should return an empty array

*/

export const getPermutations = (array: number[]) => {
    //define array to store output
    const perms: number[][] = [];
    //recursively call helper func
    permsHelper(0, array, perms);
    //return perms array
    return perms;
};

//define helper func to recurse and find valid permutations
const permsHelper = (i: number, array: number[], perms: number[][]) => {
    //base case
    if (i === array.length - 1) {
        perms.push(array.slice());
    } else {
        for (let j = i; j < array.length; j++) {
            swap(i, j, array);
            permsHelper(i + 1, array, perms);
            swap(i, j, array);
        }
    }
};

//define helper func to swap elements in array
const swap = (i: number, j: number, array: number[]) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
