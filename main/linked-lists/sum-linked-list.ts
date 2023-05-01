import { LinkedList } from './reverse-linked-list';

/*
Write a function, that takes in the head of a linked list as an argument.
The function should return an array containing all values of the nodes in the linked list.
*/

export const sumLinkedList = (head: LinkedList) => {
    //define variable to hold node values
    let sum = 0;
    //set current node to head
    let current = head;

    //iterate while values are not null
    while (current !== null) {
        //push each value to output array
        sum += current.value;
        //set new current to next node before next iteration
        current = current.next!;
    }
    //return output
    return sum;
};
