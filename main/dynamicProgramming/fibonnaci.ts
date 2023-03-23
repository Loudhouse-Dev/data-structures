function fibonnaci(n: number, cache: number[] = []) {
    if (n === 0 || n === 1) return n;

    if (n in cache) return cache[n];

    cache[n] = fibonnaci(n - 1, cache) + fibonnaci(n - 2, cache);

    return cache[n];
}
