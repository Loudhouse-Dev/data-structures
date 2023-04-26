/*
Given an array of integers, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
The solution set must not contain duplicate triplets.
*/

export const threeSum = (nums: number[]): number[][] => {
    const triplets: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        //skip over all duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        //set up 2 pointers
        //we have a total of three pointers now...i, left(i + 1), and right(nums.length - 1
        let left = i + 1;
        let right = nums.length - 1;

        //iterate while the left pointer is less than the right pointer
        while (left < right) {
            //keep track of the current sum
            const currentSum = nums[i] + nums[left] + nums[right];

            //since we have sorted the array, we know if the current sum is greater than 0 that we need to decrement the right pointer
            //if the current sum is less than 0, we need to increment the left pointer
            if (currentSum < 0) {
                left++;
                //if the current sum is greater than 0, we need to decrement the right pointer
            } else if (currentSum > 0) {
                right--;
                //if the current sum is 0, we need to add the triplet to the triplets array
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                //increment the left pointer and decrement the right pointer
                left++;
                right--;

                //if we have a duplicate, we need to skip over it
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }

    return triplets;
};
