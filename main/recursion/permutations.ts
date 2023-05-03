/* 
Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.

* You may assume that the input array contains no duplicate elements.
*/

export const permutations = (array: unknown[]): unknown[][] => {
    if (array.length === 0) return [[]];
    const first = array[0];
    const perms = permutations(array.slice(1));

    const allPermutations: unknown[][] = [];
    for (const perm of perms) {
        for (let i = 0; i <= perm.length; i++) {
            allPermutations.push([
                ...perm.slice(0, i),
                first,
                ...perm.slice(i),
            ]);
        }
    }
    return allPermutations;
};
