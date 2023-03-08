import { hasSingleCycle, getNextIndex } from '../../graphs/single-cycle-check';

describe('hasSingleCycle', () => {
    test('returns true when given a single cycle array', () => {
        expect(hasSingleCycle([2, 2, -1])).toBe(true);
        expect(hasSingleCycle([2, 3, 1, -4, -4, 2])).toBe(true);
        expect(hasSingleCycle([2, 2, 2])).toBe(true);
    });

    test('returns false when given a non-single cycle array', () => {
        expect(hasSingleCycle([2, 2, 2, -2])).toBe(false);
        expect(hasSingleCycle([1, 1, -2, -2])).toBe(false);
        expect(hasSingleCycle([1, 1, 0, 1, 1])).toBe(false);
    });

    test('returns false when given an empty array', () => {
        expect(hasSingleCycle([])).toBe(false);
    });

    test('returns true when given an array with only one element', () => {
        expect(hasSingleCycle([0])).toBe(true);
    });
});
