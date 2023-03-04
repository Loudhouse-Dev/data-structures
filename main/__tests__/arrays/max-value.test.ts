import { maxValue } from '../../arrays/max-value';

describe('maxValue', () => {
    it('returns the maximum value in an array of positive numbers', () => {
        expect(maxValue([1, 2, 3, 4])).toEqual(4);
    });

    it('returns the maximum value in an array of negative numbers', () => {
        expect(maxValue([-1, -2, -3, -4])).toEqual(-1);
    });

    it('returns the maximum value in an array of mixed positive and negative numbers', () => {
        expect(maxValue([-10, 0, 10, -20, 20])).toEqual(20);
    });

    it('returns the maximum value in an array of repeated numbers', () => {
        expect(maxValue([3, 3, 3, 3])).toEqual(3);
    });
});
