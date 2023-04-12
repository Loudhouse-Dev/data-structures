/*
Write a function, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams. 
Anagrams are strings that contain the same characters, but in any order.

*/

//with native array methods
export const anagrams = (str1: string, str2: string): boolean => {
    let string1 = str1.split('').sort().join('');
    let string2 = str2.split('').sort().join('');

    if (string1 === string2) return true;

    return false;
};

// //with hash table
// export const anagrams2 = (str1: string, str2: string): boolean => {
//   //create a hash table
//   const count = {};

//   for(let char of str1) {
//     if(!(char in count)) {
//       count[char] = 0;
//     count[char] = (count[char] || 0) + 1;
//   }
// };
