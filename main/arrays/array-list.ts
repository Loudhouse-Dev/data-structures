/*
This is an attempt to implement an ArrayList in TypeScript.
Implement an array only using objects. Arrays should not be
used in this implementation. 

Create a class called ArrayList. It should have the following methods:

length - integer - # of elements in the array
push - function - accepts a value and adds it to the end of the list
pop - function - removes the last item in the list and returns it
get - function - accepts an index and returns the value at that index
delete - function - accepts an index and removes the value at that index

*/

class ArrayList {
    length: number;
    data: { [index: number]: unknown };

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(value: unknown) {
        //add value to the end of the array
        this.data[this.length] = value;
        //increment length
        this.length++;
    }

    pop() {
        if (this.length === 0) return undefined;

        //assign last item to a variable
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    get(index: number) {
        return this.data[index];
    }

    delete(index: number) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

export { ArrayList };
