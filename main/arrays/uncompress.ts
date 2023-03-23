/* Problem
Write a function that takes in a string as an argument.
The input string will be formatted into multiple groups 
according to the following pattern:

<num><char>
Ex: '2c' or '3a'

The function should retrun an uncompressed version of the string where each 'char
of a group is repeated 'num' times consecutively. You may assume
that the inpust string is well-formed according to the above pattern

ex input ----> "2c3a1t"
ex output ----> "ccaaat"
*/

export const uncompressed = (str: string) => {
    //define variable for output array (we'll convert to string later)
    const output: string[] = [];
    //store numbers to give pointer a reference to check against
    const possNums = '0123456789';
    //we're gonna use two pointers
    let pointerOne = 0;
    let pointerTwo = 0;

    //while our second pointer is still withing str length
    while (pointerTwo < str.length) {
        //if current value at pointer two is a number, move it along the str
        //if not, store the current value by slicing the array between the pointers
        if (possNums.includes(str[pointerTwo])) {
            pointerTwo += 1;
        } else {
            const num: number = Number(str.slice(pointerOne, pointerTwo));
            //iterate over the value of num, push the value at pointer 2 num times
            for (let count = 0; count < num; count += 1) {
                output.push(str[pointerTwo]);
            }
            //move pointerTwo to the next value before we loop again
            pointerTwo += 1;
            //move pointerOne to the value of pointerTwo before we loop again
            pointerOne = pointerTwo;
        }
    }
    //use join() to convert output array back to a string and return
    return output.join('');
};
