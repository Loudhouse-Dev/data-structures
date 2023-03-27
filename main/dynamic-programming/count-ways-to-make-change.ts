/*
Problem:
Given an array of distinct positive integers representing coin denominations and a single non-negative 
integer n representing a target amount of money, write a function that returns the number of ways to 
make change for that target amount using the given coin denominations.

*You can assume that you have an infinite amount of coins.

*/
export function countWaysToMakeChange(n: number, denoms: number[]) {
    const ways: number[] = new Array(n + 1).fill(0);

    ways[0] = 1;

    for (let denom of denoms) {
        for (let amount = 1; amount < n + 1; amount++) {
            if (denom <= amount) {
                ways[amount] += ways[amount - denom];
            }
        }
    }
    return ways[n];
}
