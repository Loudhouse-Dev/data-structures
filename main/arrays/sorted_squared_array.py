#
#  Problem:
#  write a function that takes in a non-empty array of integers that are sorted in ascending order 
#  and returns a new array of the same length with the squares of the original integers also sorted
#  in ascending order 
#

# Time: O(nLogn) Space: O(n)
def sortedSquaredArray(array: list): 
    sortedSquares = [0 for _ in array]
    
    for idx in range(len(array)):
      value = array[idx]
      sortedSquares[idx] = value * value
      
      sortedSquares.sort()
      return sortedSquares
    
# Time: O(n) Space: O(n)
def sortedSquaredArray2(array):
    sortedSquares = [0 for _ in array]
    smallerValIdx = 0
    largerValIdx = len(array) - 1
    
    #loop through array in reverse
    for idx in reversed(range(len(array))):
      smallerVal = array[smallerValIdx]
      largerVal = array[largerValIdx]
      
      if abs(smallerVal) > abs(largerVal):
          sortedSquares[idx] = smallerVal * smallerVal
          smallerValIdx += 1
      else: 
        sortedSquares[idx] = largerVal * largerVal
        largerVal -= 1
        
    return sortedSquares