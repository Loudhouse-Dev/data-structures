/*
Problem: sumPossible
Given an array of integers and a target sum, determine if any two integers in the array sum to the target sum.
The function should return a boolean indicating whether or not two integers sum to the target sum.
  *You may use the same element more than once.
  *You may assume the target sum is always a positive integer.

  ----------------
    Example:
    Input: [3, 5, -4, 8, 11, 1, -1, 6], 10
    Output: true
    Explanation: 11 + -1 = 10
  ----------------
*/
function sumPossible(
    amount: number,
    numbers: number[],
    cache: { [key: number]: boolean } = {}
) {
    if (amount in cache) return cache[amount];
    if (amount < 0) return false;
    if (amount === 0) return true;

    for (let num of numbers) {
        if (sumPossible(amount - num, numbers) === true) {
            cache[amount] = true;
            return true;
        }
    }
    cache[amount] = false;
    return false;
}
