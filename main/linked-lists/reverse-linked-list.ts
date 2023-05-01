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
    //set previous node to null and current node to head
    let previousNode: LinkedList | null = null;
    let currentNode: LinkedList | null = head;

    //iterate while current node is not null
    while (currentNode !== null) {
        //set next node to current node's next node
        const nextNode: LinkedList | null = currentNode.next;
        //set current node's next node to previous node
        currentNode.next = previousNode;
        //set previous node to current node
        previousNode = currentNode;
        //set current node to next node
        currentNode = nextNode;
    }
    return previousNode;
}
