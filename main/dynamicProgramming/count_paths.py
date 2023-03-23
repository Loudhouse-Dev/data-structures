
#Problem: count_paths
#Write a function, countPaths, that takes in a grid as an argument. 
#In the grid, 'X' represents walls and 'O' represents open spaces. 
#You may only move down or to the right and cannot pass through walls. 
#The function should return the number of ways possible to travel from 
#the top-left corner of the grid to the bottom-right corner.

def count_Paths(grid):
  return _count_paths(grid, 0, 0, {})

#Helper function to recurse
def _count_paths(grid, row, col, cache):
  #tuple for r/c
  position = (row, col)
  #if position is memoized, move along
  if position in cache:
    return cache[position]
  
  #if off grid or we hit a wall ('X') return 0
  if row == len(grid) or col == len(grid[0]) or grid[row][col == 'X']:
    return 0
  
  #if we are the last col in the last row, we are done
  if row == len(grid) - 1 and col == len(grid[0]) - 1:
    return 1
  
  #move down one row and run again
  down_count = _count_paths(grid, row + 1, col, cache)
  #move right one col and run again
  right_count = _count_paths(grid, row, col + 1, cache)
  
  cache[position] = down_count + right_count
  return cache[position]