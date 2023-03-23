def fibonnaci(n):
  cache = {}
  return _fibonnaci(n, cache)

def _fibonnaci(n, cache):
  if n == 0 or n == 1:
    return n
  
  if n in cache:
    return cache[n]
  
  cache[n] = _fibonnaci(n - 1, cache) + _fibonnaci(n - 2, cache)
  
  return cache[n]