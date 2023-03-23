#Problem: Tribonnaci
#Write a function that takes in an integer n and returns the nth Tribonnaci number.
#The Tribonnaci sequence is the sum of the last three numbers of the sequence. The first three numbers of the sequence are 0, 0, and 1.


def tribonnaci(n):
  cache = {}
  return _tribonnaci(n, cache)

def _tribonnaci(n, cache):
  if n == 0 or n == 1:
    return 0
  
  if n == 2:
    return 1
  
  if n in cache:
    return cache[n]
  
  cache[n] = _tribonnaci(n - 1, cache) + _tribonnaci(n - 2, cache) + _tribonnaci(n - 3, cache)
  
  return cache[n]