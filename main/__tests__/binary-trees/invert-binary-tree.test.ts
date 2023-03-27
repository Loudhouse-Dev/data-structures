import {
    BinaryTree,
    invertBinaryTree,
} from '../../binary-trees/invert-binary-tree';

describe('invertBinaryTree', () => {
    it('handles empty binary search tree', () => {
        expect(invertBinaryTree(null)).toBeNull();
    });

    it('inverts binary search tree in place', () => {
        const root = new BinaryTree(4);
        root.left = new BinaryTree(2);
        root.left.left = new BinaryTree(1);
        root.left.right = new BinaryTree(3);
        root.right = new BinaryTree(7);
        root.right.right = new BinaryTree(9);
        root.right.right.left = new BinaryTree(8);

        invertBinaryTree(root);

        expect(root?.value).toBe(4);
        expect(root?.left?.value).toBe(7);
        expect(root?.left?.right?.value).toBe(3);
        expect(root?.left?.right?.left?.value).toBe(1);
        expect(root?.right?.value).toBe(2);
        expect(root?.right?.left?.value).toBe(9);
        expect(root?.right?.left?.right?.value).toBe(8);
    });
});
