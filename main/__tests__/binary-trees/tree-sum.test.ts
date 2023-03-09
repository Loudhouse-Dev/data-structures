import { treeSum, Node } from '../../binary-trees/tree-sum';

describe('treeSum', () => {
    test('returns 0 when root is null', () => {
        expect(treeSum(null)).toEqual(0);
    });

    test('returns total sum for all nodes in tree, with only 1 node', () => {
        const root = new Node(3);
        expect(treeSum(root)).toEqual(3);
    });

    test('returns total sum of all nodes on tree', () => {
        const root = new Node(1);
        root.left = new Node(4);
        root.left.left = new Node(2);
        root.left.right = new Node(1);
        root.right = new Node(5);
        root.right.left = new Node(12);
        root.right.right = new Node(1);
        expect(treeSum(root)).toEqual(26);
    });
});
