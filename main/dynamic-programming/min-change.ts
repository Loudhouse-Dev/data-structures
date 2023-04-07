/*
Problem: minChange
Given an array of coins and a target amount, return the minimum number of coins needed to make the target amount.
If it is not possible to make the target amount, return -1. You may assume that there is an infinite supply of each coin.

Example:
minChange([1, 2, 5], 11) // 3 (5 + 5 + 1)
minChange([1, 4, 5], 8) // 2 (4 + 4)
*/

export const minChange = (amount: number, coins: number[]) => {
    const answer = minChangeHelper(amount, coins, {});
    if (answer === Infinity) return -1;
    return answer;
};

export const minChangeHelper = (
    amount: number,
    coins: number[],
    cache: { [key: number]: number }
) => {
    if (amount < 0) return Infinity;
    //Base Case
    if (amount in cache) return cache[amount];
    if (amount === 0) return 0;

    //Recursive Case
    let minCoins: number = Infinity;
    //for each coin, we want to find the minimum number of coins needed to make the target amount
    for (let coin of coins) {
        //we want to find the minimum number of coins needed to make the target amount
        const numCoins: number =
            1 + minChangeHelper(amount - coin, coins, cache);
        minCoins = Math.min(minCoins, numCoins);
    }
    cache[amount] = minCoins;
    return minCoins;
};
