import { LinkedList } from './reverse-linked-list';

/*
Write a function that takes in the head of two linked lists as arguments. 
The function should merge the two lists together (in place) by alternating
nodes. If one of the LLs is longer than the other, the resulting LL should
terminate with the remaining nodes.

The function should return the head of the merged LL.

**You may assume that both LLs are non-empty
*/

export const zipperLinkedLists = (headOne: LinkedList, headTwo: LinkedList) => {
    //base case 1: if both heads are null, return null
    if (headOne === null && headTwo === null) return null;
    //base case 2: if one head is null, return headTwo
    if (headOne === null) return headTwo;
    //base case 3: if headTwo is null, return headOne
    if (headTwo === null) return headOne;
    //recursive case
    //set nextOne to headOne's next node
    const nextOne = headOne.next;
    //set nextTwo to headTwo's next node
    const nextTwo = headTwo.next;
    //set headOne's next node to headTwo
    headOne.next = headTwo;
    //set headTwo's next node to nextOne
    headTwo.next = zipperLinkedLists(nextOne!, nextTwo!);
    //return headOne
    return headOne;
};
