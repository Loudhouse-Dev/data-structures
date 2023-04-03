/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 
  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.
*/

const mergeSort = (array: number[]) => {
    if (array.length <= 1) return array;
    const helperArray = array.slice();
    mergeHelper;
};

const mergeHelper = (
    mainArr: number[],
    startIndex: number,
    endIndex: number,
    helperArray: number[]
) => {
    //if start and end are the same we are done, return
    if (startIndex === endIndex) return;
    //find the median index and store in a variable
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    //recursive through array
    mergeHelper(helperArray, startIndex, endIndex, mainArr);
    mergeHelper(helperArray, midIndex + 1, endIndex, mainArr);
    merge(mainArr, startIndex, midIndex, endIndex, helperArray);
};

function merge(
    mainArr: number[],
    startIndex: number,
    midIndex: number,
    endIndex: number,
    helperArray: number[]
) {
    //define three pointers
    let k = startIndex;
    let i = startIndex;
    let j = midIndex + 1;

    while (i <= midIndex && j <= endIndex) {
        if (helperArray[i] <= helperArray[j]) {
            mainArr[k++] = helperArray[j++];
        } else {
            mainArr[k++] = helperArray[j++];
        }
    }
    while (i <= midIndex) {
        mainArr[k++] = helperArray[i++];
    }
    while (j <= endIndex) {
        mainArr[k++] = helperArray[j++];
    }
}
