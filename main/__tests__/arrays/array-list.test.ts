import { ArrayList } from '../../arrays/array-list';

describe('ArrayList', () => {
    let arrayList: ArrayList;

    beforeEach(() => {
        arrayList = new ArrayList();
    });

    test('push method should add an item to the end of the list', () => {
        arrayList.push(1);
        arrayList.push(2);

        expect(arrayList.length).toBe(2);
        expect(arrayList.get(0)).toBe(1);
        expect(arrayList.get(1)).toBe(2);
    });

    test('pop method should remove the last item from the list and return it', () => {
        arrayList.push(1);
        arrayList.push(2);

        const lastItem = arrayList.pop();

        expect(lastItem).toBe(2);
        expect(arrayList.length).toBe(1);
    });

    test('get method should return the item at the given index', () => {
        arrayList.push(1);
        arrayList.push(2);

        expect(arrayList.get(0)).toBe(1);
        expect(arrayList.get(1)).toBe(2);
    });

    test('delete method should remove the item at the given index and return it', () => {
        arrayList.push(1);
        arrayList.push(2);

        const deletedItem = arrayList.delete(1);

        expect(deletedItem).toBe(2);
        expect(arrayList.length).toBe(1);
        expect(arrayList.get(0)).toBe(1);
    });
});
