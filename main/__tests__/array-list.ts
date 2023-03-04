import { ArrayList } from '../arrays/array-list';

describe('ArrayList', () => {
    let arrayList: ArrayList;

    beforeEach(() => {
        arrayList = new ArrayList();
    });

    it('pushes values onto the array', () => {
        arrayList.push('a');
        arrayList.push('b');
        expect(arrayList.length).toEqual(2);
    });

    it('pops values off the array in the correct order', () => {
        arrayList.push('a');
        arrayList.push('b');
        expect(arrayList.pop()).toEqual('b');
        expect(arrayList.pop()).toEqual('a');
    });

    it('returns undefined when popping from an empty array', () => {
        expect(arrayList.pop()).toEqual(undefined);
    });
});
