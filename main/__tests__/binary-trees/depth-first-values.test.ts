import { depthFirstValues, Node } from '../../binary-trees/depth-first-values';

describe('depthFirstValues', () => {
    test('returns empty array for null root', () => {
        expect(depthFirstValues(null)).toEqual([]);
    });

    test('returns single element array for single node tree', () => {
        const root = new Node(1);
        expect(depthFirstValues(root)).toEqual([1]);
    });

    test('returns values in depth-first order for multi-node tree', () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.left.right = new Node(4);
        root.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7);
        expect(depthFirstValues(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
