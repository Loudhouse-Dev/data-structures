import { maxSubsetSumNoAdjacent } from '../../dynamic-programming/max-subset-sum-no-adjacent';

describe('maxSubsetSumNoAdjacent', () => {
    it('should return 0 if the array is empty', () => {
        const result = maxSubsetSumNoAdjacent([]);
        expect(result).toBe(0);
    });

    it('should return the lone element if the consists of only one element', () => {
        const result = maxSubsetSumNoAdjacent([5]);
        expect(result).toBe(5);
    });

    it('should return the max of the two elements if the array consists of two elements', () => {
        const result = maxSubsetSumNoAdjacent([5, 10]);
        expect(result).toBe(10);
    });

    it('should return the max subset sum of non-adjacent elements from input array', () => {
        const result1 = maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]);
        expect(result1).toBe(330);

        const result2 = maxSubsetSumNoAdjacent([5, 1, 1, 1, 5, 5]); // [5, 1, 6, 6, 11, 11]
        expect(result2).toBe(11);

        const result3 = maxSubsetSumNoAdjacent([3, 4, 5, 7, 10]); // [3, 4, 8, 11, 18]
        expect(result3).toBe(18);
    });
});
