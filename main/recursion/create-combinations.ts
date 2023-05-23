/*
Write a function, that takes in an array and a length as arguments. 
The function should return a 2D array representing all of the combinations of the specifized length.
The items within the combinations and the combinations themselves may be returned in any order.
You may assume that the input array contains unique elements and 1 <= k <= items.length.
*/

export const createCombinations = (items: number[], k: number): number[][] => {
    //base case 1
    if (k === 0) return [[]];

    //base case 2
    if (items.length < k) return [];

    const first = items[0];
    const partials = createCombinations(items.slice(1), k - 1);
    const partialsWithFirst = [];

    for (let partial of partials) {
        partialsWithFirst.push([first, ...partial]);
    }

    const partialsWithoutFirst = createCombinations(items.slice(1), k);

    return [...partialsWithFirst, ...partialsWithoutFirst];
};
