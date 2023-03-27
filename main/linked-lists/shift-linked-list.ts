/*
Write a function that takes in the head of a singly linked list and an integer k and shifts the list in place 
by k positions, and returns its new head.

*Each LL node has a value and a next node, both of which can be either a LL node or null.

* Assume that the input LL will always have at least one node; in other words, the head will never be null

*/

export class LinkedList {
    value: number;
    next: LinkedList | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function shiftLinkedList(head: LinkedList, k: number) {
    let length = 1;
    let tail: LinkedList = head;
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    const offset = Math.abs(k) % length;
    if (offset === 0) return head;

    const newTailPosition = k > 0 ? length - offset : offset;
    let newTail: LinkedList | null = head;
    for (let i = 1; i < newTailPosition; i++) {
        newTail = newTail!.next;
    }
    const newHead = newTail!.next;
    newTail!.next = null;
    tail.next = head;
    return newHead;
}
