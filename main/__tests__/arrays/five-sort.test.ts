import { fiveSort } from '../../arrays/five-sort';

describe('fiveSort', () => {
    it('returns the array, in place, as is, if there are no 5s', () => {
        const arr1 = [1, 2, 3, 4, 8, 10];
        expect(fiveSort(arr1)).toEqual(arr1);
    });

    it('returns the proper array if there are negative numbers', () => {
        const arr2 = [-1, -2, -3, 4, 8, 10];
        expect(fiveSort(arr2)).toEqual([-1, -2, -3, 4, 8, 10]);
    });

    it('returns the proper array if there are only 5s', () => {
        expect(fiveSort([5, 5, 5])).toEqual([5, 5, 5]);
    });

    it('returns the same array with all of the 5s moved to the end', () => {
        expect(fiveSort([5, 4, 1, 5, 5, 6])).toEqual([6, 4, 1, 5, 5, 5]);
    });
});
