import { treeSumBFS, Node } from '../../binary-trees/tree-sum-bfs';

describe('treeSum', () => {
    test('returns 0 when root is null', () => {
        expect(treeSumBFS(null)).toEqual(0);
    });

    test('returns total sum for all nodes in tree, with only 1 node', () => {
        const root = new Node(3);
        expect(treeSumBFS(root)).toEqual(5);
    });

    test('returns total sum of all nodes on tree', () => {
        const root = new Node(2);
        root.left = new Node(4);
        root.left.left = new Node(5);
        root.left.right = new Node(11);
        root.right = new Node(8);
        expect(treeSumBFS(root)).toEqual(30);
    });
});
