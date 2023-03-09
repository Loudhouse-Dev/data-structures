import { BinarySearchTree, bstReverse } from '../../binary-trees/bst-reverse';

describe('bstReverse', () => {
    it('handles empty binary search tree', () => {
        expect(bstReverse(null)).toBeNull();
    });

    it('reverses binary search tree in place', () => {
        const root = new BinarySearchTree(4);
        root.left = new BinarySearchTree(2);
        root.left.left = new BinarySearchTree(1);
        root.left.right = new BinarySearchTree(3);
        root.right = new BinarySearchTree(7);
        root.right.right = new BinarySearchTree(9);
        root.right.right.left = new BinarySearchTree(8);

        bstReverse(root);

        expect(root?.value).toBe(4);
        expect(root?.left?.value).toBe(7);
        expect(root?.left?.right?.value).toBe(3);
        expect(root?.left?.right?.left?.value).toBe(1);
        expect(root?.right?.value).toBe(2);
        expect(root?.right?.left?.value).toBe(9);
        expect(root?.right?.left?.right?.value).toBe(8);
    });
});
