/*
Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.
Solve without using any built-in array methods.
Assume that the array is non-empty.
*/
const maxValue = (nums: number[]) => {
    let max = -99999;
    let i = 0;

    while (i <= nums.length) {
        if (nums[i] > max) {
            max = nums[i];
        }
        i++;
    }
    return max;
};

export { maxValue };
