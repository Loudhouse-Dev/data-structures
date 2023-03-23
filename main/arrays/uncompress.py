#
# Write a function that takes in a string as an argument.
# The input string will be formatted into multiple groups 
# according to the following pattern:

# <num><char>
# Ex: '2c' or '3a'

# The function should retrun an uncompressed version of the string where each 'char
# of a group is repeated 'num' times consecutively. You may assume
# that the input string is well-formed according to the above pattern

# ex input ----> "2c3a1t"
# ex output ----> "ccaaat"

def uncompress(str):
  numbers = '0123456789'
  result = []
  pointA = 0
  pointB = 0
  while pointB < len(str):
    if str[pointB] in numbers:
      pointB += 1
    else:      
      num = int(str[pointA:pointB])
      result.append(str[pointB] * num)
      pointB += 1
      pointA = pointB
      
  return ''.join(result)