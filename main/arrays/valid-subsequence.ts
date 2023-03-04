/*
You are given two non-empty arrays of integers. Write a function that 
determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily 
adjacent in the array but that are in the same order as they appear in
the array. For instance, the numbers [1, 3, 4] form a subsequence of the
array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single
number in an array and the array itself are both valid subsequences of
the array.

*/
export function validSubsequence(array: number[], sequence: number[]) {
    // Assign the first index of the array to a variable
    let arrayIndex = 0;
    // Assign the first index of the sequence to a variable
    let sequenceIndex = 0;

    //Iterate through the array and the sequence
    while (arrayIndex < array.length && sequenceIndex < sequence.length) {
        // If the current value of the array is equal to the current value of the sequence
        // Increment the sequence index and the array index
        if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
        arrayIndex++;
    }
    // Return true if the sequence index is equal to the length of the sequence
    return sequenceIndex === sequence.length;
}
