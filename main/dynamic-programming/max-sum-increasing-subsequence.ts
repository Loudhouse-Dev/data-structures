/*
Write a function that takes in a non-empty array of integers and returns the 
greates sum that can be generated from a strictly-increasing subsequence in the 
array as well as an array of the numbers in that subsequence.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in
the array but that are in the same order as they appear in the array. For instance,
the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the
numbers [2, 4]. Note that a single number in an array and the array itself are both
valid subsequences of the array.

You can assume that there will only be one increasing subsequence with the greatest sum.
*/

export function maxSumIncreasingSubsequence(
    array: number[]
): [number, number[]] {
    const sequences: number[] = new Array(array.length);
    //we need to initialize the sums array with the values of the original array
    const sums: number[] = array.map((num) => num);
    //keep track of the index of the max sum
    let maxSumIdx = 0;
    //iterate through the array twice
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i];
        //iterate through the array again, but this time we only go up to the current index
        for (let j = 0; j < i; j++) {
            //update sums array if the current number is greater than the other number
            const otherNum = array[j];
            if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
                sums[i] = sums[j] + currentNum;
                sequences[i] = j;
            }
        }
        //update the max sum index if the current sum is greater than the max sum
        if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
    }
    //return the max sum and the sequence
    return [sums[maxSumIdx], constructSequence(array, sequences, maxSumIdx)];
}

//helper function to construct the sequence
function constructSequence(
    array: number[],
    sequences: number[],
    currIndex: number
) {
    const sequence: number[] = [];
    while (currIndex !== undefined) {
        sequence.unshift(array[currIndex]);
        currIndex = sequences[currIndex];
    }
    return sequence;
}
