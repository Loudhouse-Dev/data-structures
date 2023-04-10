/*
Write a function, fiveSort, that takes in an array of numbers as an argument. 
The function should rearrange elements of the array such that all 5s appear at the end. 
Your function should perform this operation in-place by mutating the original array. 
The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array


Strategy:
- Create a pointer to keep track of the last index of the array
- Iterate through the array
- If the current element is a 5, swap it with the last index
- Decrement the last index
- If the current element is not a 5, increment the pointer
- Return the array

*/

export const fiveSort = (nums: number[]) => {
    //create 2 pointers, one at the beginning and one at the end
    let lastIdx = nums.length - 1;
    let pointer = 0;
    //iterate through the array
    while (pointer <= lastIdx) {
        //if the current element is a 5, swap it with the last index
        if (nums[pointer] === 5) {
            [nums[pointer], nums[lastIdx]] = [nums[lastIdx], nums[pointer]];
            //decrement the last index
            lastIdx--;
        } else {
            //if the current element is not a 5, increment the pointer
            pointer++;
        }
    }
    return nums;
};

//Big O: O(n) time, O(1) space
