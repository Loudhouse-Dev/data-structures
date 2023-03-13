/* 
  Problem: 
      Given an array of positive integers, find the maximum sum of non-adjacent elements in the array. 
      If a sum can't be generated, return 0. 
  */
export function maxSubsetSumNoAdjacent(array: number[]) {
    //Base Cases
    //if array length is 0, return 0
    if (!array.length) return 0;
    //if array length is 1, return the first element
    if (array.length === 1) return array[0];
    //if array length is 2, return the max of the two elements
    const maxSums = array.slice();
    maxSums[1] = Math.max(array[0], array[1]);

    //loop through the array starting at index 2 for all other cases
    for (let i = 2; i < array.length; i++) {
        //maxSums[i] is the max of the previous maxSums[i - 1] or the maxSums[i - 2] + current element
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    }
    return maxSums[maxSums.length - 1];
}

//Big O
//Time: O(n)
//Space: O(n)
