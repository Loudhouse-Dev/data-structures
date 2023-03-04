import { validSubsequence } from '../../arrays/valid-subsequence';

describe('validSubequence', () => {
    it('returns true if the second array is a subsequence of the first array', () => {
        expect(
            validSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
        ).toEqual(true);
    });

    it('returns false if the second array is not a subsequence of the first array', () => {
        expect(
            validSubsequence(
                [5, 1, 22, 25, 6, -1, 8, 10],
                [5, 1, 22, 25, 6, -1, 8, 10, 12]
            )
        ).toEqual(false);
    });
});
