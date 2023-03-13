/*
Problem: Tribonnaci
Write a function that takes in an integer n and returns the nth Tribonnaci number.
The Tribonnaci sequence is the sum of the last three numbers of the sequence. The first three numbers of the sequence are 0, 0, and 1.
*/

function tribonnaci(n: number, cache: number[] = []): number {
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;

    if (n in cache) return cache[n];

    cache[n] =
        tribonnaci(n - 1, cache) +
        tribonnaci(n - 2, cache) +
        tribonnaci(n - 3, cache);

    return cache[n];
}
