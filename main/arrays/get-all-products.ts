/*
Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.
Example:
getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]
getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]
Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?
*/

export const getAllProducts = (array: number[]): number[] => {
    let result: number[] = [];

    function process(array: number[], i: number): number | undefined {
        // console.log(array);
        const newArray = [...array];
        if (i == array.length) {
            return;
        }
        newArray.splice(i, 1);
        result.push(
            newArray.reduce((acc, curr) => {
                acc *= curr;
                return acc;
            }, 1)
        );
        return process(array, i + 1);
    }

    process(array, 0);
    return result;
};
