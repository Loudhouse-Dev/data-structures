/*
Write a function to find the longest common prefix string amongst an array of strings.
if there is no common prefix, return an empty string "".
*/

export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return '';
    }

    //initiate variable to the first string in the array
    let prefix = strs[0];

    //iterate through the array of strings
    for (let i = 1; i < strs.length; i++) {
        //while the current string does not start with the prefix, remove the last character from the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            //remove the last character from the prefix
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }

    return prefix;
}
