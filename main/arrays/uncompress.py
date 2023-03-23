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
  result = ''
  pointA = 0
  pointB = 0
  #loop while second pointer is a valid index
  while pointB < len(str):
    #check if pointerB is in the numbers string
    #when pointerB is no longer a number, it must be a letter so we can move along
    if str[pointB] in numbers:
      #if it is, incrememnt it
      pointB += 1
    else:      
      #slice the string at pointerA and convert to number
      num = int(str[pointA:pointB])
      #append to out array 'num' times
      result.append(str[pointB] * num)
      #update pointers before looping again
      pointB += 1
      pointA = pointB
      
  return result