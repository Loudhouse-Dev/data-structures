/*
Write a function that takes in the head of a LL and an index.
The function should return the value of the node at the specified index.

*If there is no node at the specified index, return null.
*/

import { LinkedList } from './reverse-linked-list';

export const linkedListGetNodeValue = (head: LinkedList, index: number) => {
    //set current node to head
    let current = head;
    let counter = 0;

    //iterate while values are not null
    while (current !== null) {
        //check if current value is equal to target
        if (counter === index) return current.value;
        //set new current to next node before next iteration
        current = current.next!;
        //increment the counter
        counter++;
    }
    //return output
    return null;
};
