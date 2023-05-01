import { LinkedList } from './reverse-linked-list';

/*
Write a function that takes in the head of a LL and a target value.
The function should return a boolean indicating whether or not the
target is contained in the linked list.

*/

export const linkedListFind = (head: LinkedList, target: number) => {
    //set current node to head
    let current = head;

    //iterate while values are not null
    while (current !== null) {
        //check if current value is equal to target
        if (current.value === target) return true;
        //set new current to next node before next iteration
        current = current.next!;
    }
    //return output
    return false;
};
