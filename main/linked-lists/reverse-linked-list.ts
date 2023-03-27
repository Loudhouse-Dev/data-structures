/*
Write a function that takes in a singly linked list and reverses it in place.

*Each LL node has a value and a next node, both of which can be either a LL node or null.

*Assume that the input LL will always have at least one node; in other words, the head will never be null

*/

export class LinkedList {
    value: number;
    next: LinkedList | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function reverseLinkedList(head: LinkedList) {
    let previousNode: LinkedList | null = null;
    let currentNode: LinkedList | null = head;
    while (currentNode !== null) {
        const nextNode: LinkedList | null = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
}
