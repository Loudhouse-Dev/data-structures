/*
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Heap Sort algorithm to sort the array.
*/

export function heapSort(array: number[]) {
    //build the heap
    buildHeap(array);
    //sort the heap
    sortHeap(array);
    return array;
}

//helper function to build the heap
function buildHeap(array: number[]) {
    //start at the first parent node
    let firstParentIdx = Math.floor((array.length - 2) / 2);
    //loop through the array
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        siftDown(currentIdx, array.length - 1, array);
    }
}

//helper function to sort the heap
function sortHeap(array: number[]) {
    //start at the end of the array
    let endIdx = array.length - 1;
    //loop through the array
    while (endIdx > 0) {
        //swap the first and last elements
        swap(0, endIdx, array);
        //decrement endIdx
        endIdx--;
        //sift down the first element
        siftDown(0, endIdx, array);
    }
}

//helper function to sift down
function siftDown(currentIdx: number, endIdx: number, heap: number[]) {
    //get the first child index
    let childOneIdx = currentIdx * 2 + 1;
    //loop through the array
    while (childOneIdx <= endIdx) {
        //get the second child index
        let childTwoIdx =
            currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        //get the index of the smaller child
        let idxToSwap: number;
        if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
            idxToSwap = childTwoIdx;
        } else {
            idxToSwap = childOneIdx;
        }
        //check if we need to swap
        if (heap[idxToSwap] < heap[currentIdx]) {
            swap(currentIdx, idxToSwap, heap);
            currentIdx = idxToSwap;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }
    }
}

//helper function to swap numbers
function swap(i: number, j: number, array: number[]) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

/*
Big O:
Time: O(nlog(n))
Space: O(1)
*/
