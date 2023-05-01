export class LinkedList {
    value: number;
    next: LinkedList | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

const a = new LinkedList(1);
const b = new LinkedList(2);
const c = new LinkedList(3);
const d = new LinkedList(4);
const e = new LinkedList(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

//a -> b -> c -> d -> e

const printLinkedList = (head: LinkedList | null) => {
    let current: LinkedList | null = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
};

const printLinkedListRecursive = (head: LinkedList | null) => {
    //base case...if head is null, return
    if (head === null) return;
    //print the value of the head
    console.log(head.value);
    //call the function again with the next node
    printLinkedListRecursive(head.next);
};
