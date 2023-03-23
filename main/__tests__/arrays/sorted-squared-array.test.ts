import { sortedSquaredArray } from '../../arrays/sorted-squared-array';

describe('sortedSquaredArray', () => {
    it('returns properly sorted array', () => {
        expect(sortedSquaredArray([1, 2, 3, 4, 5, 6, 8, 9])).toEqual([
            1, 4, 9, 25, 36, 64, 81,
        ]);
    });
    it('returns properly sorted array with only 1 value', () => {
        expect(sortedSquaredArray([1])).toEqual([1]);
    });
    it('returns properly sorted array even with negative values', () => {
        expect(sortedSquaredArray([-2, 1, 6, 8])).toEqual([1, 4, 36, 64]);
    });
});
