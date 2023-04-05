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
    const sums: number[] = array.map((num) => num);
    let maxSumIdx = 0;
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i];
        for (let j = 0; j < i; j++) {
            const otherNum = array[j];
            if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
                sums[i] = sums[j] + currentNum;
                sequences[i] = j;
            }
        }
        if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
    }
    return [sums[maxSumIdx], constructSequence(array, sequences, maxSumIdx)];
}

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
