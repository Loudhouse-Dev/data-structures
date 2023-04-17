/*
Write a function that takes in a string made up of brackets ((, [, {, ), ], and }) and other optional characters.
The function should return a boolean representing whether the string is balanced with regards to brackets.
*/

export function balancedBrackets(string: string) {
    const openBrackets = '([{';
    const closeBrackets = ')]}';
    const matchingBrackets: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const stack: string[] = [];

    for (const char of string) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            if (stack[stack.length - 1] === matchingBrackets[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
}
