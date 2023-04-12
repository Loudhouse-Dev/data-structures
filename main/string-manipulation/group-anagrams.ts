/*
Write a function that takes in an array of strings and groups anagrams together.

Anagrams are strings made up of exactly the same letters, where order doesn't matter. 
For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

The function should return a list of anagram groups in no particular order.
*/

export const groupAnagrams = (words: string[]): string[][] => {
    //create a hash table
    const anagrams: { [key: string]: string[] } = {};

    //iterate through words array
    for (let word of words) {
        //sort the word
        const sortedWord = word.split('').sort().join('');
        //if the sorted word is not in the hash table, add it
        if (!(sortedWord in anagrams)) {
            anagrams[sortedWord] = [];
        }
        //push the word to the hash table
        anagrams[sortedWord].push(word);
    }

    return Object.values(anagrams);
};
