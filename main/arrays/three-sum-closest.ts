/*
Given an array (num) of length (n) and an integer (target), find three integers in the array such that the sum is closest to the target.

-- Return the sum of the three integers.
-- You may assume that each input would have exactly one solution.

*/

export const threeSumClosest = (nums: number[], target: number): number => {
    //sort the array
    nums.sort((a, b) => a - b);

    //set up a variable to keep track of the closest sum
    let closestSum = nums[0] + nums[1] + nums[2];

    //iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        //set up 2 pointers
        //we have a total of three pointers now...i, left(i + 1), and right(nums.length - 1
        let left = i + 1;
        let right = nums.length - 1;

        //iterate while the left pointer is less than the right pointer
        while (left < right) {
            //keep track of the current sum
            const currentSum = nums[i] + nums[left] + nums[right];

            //if the current sum is less than the target, we need to increment the left pointer
            if (currentSum < target) {
                left++;
                //if the current sum is greater than the target, we need to decrement the right pointer
            } else if (currentSum > target) {
                right--;
                //if the current sum is 0, we need to add the triplet to the triplets array
            } else {
                return currentSum;
            }

            //if the current sum is closer to the target than the closest sum, we need to update the closest sum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
        }
    }

    return closestSum;
};
