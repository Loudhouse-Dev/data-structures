import { sortedSquaredArray } from '../../arrays/sorted-squared-array';

describe('sortedSquaredArray', () => {
    it('returns properly sorted array even with negative values', () => {
        expect(sortedSquaredArray([-2, 1, 6, 8])).toEqual([1, 4, 36, 64]);
    });
});
