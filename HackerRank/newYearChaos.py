# There are people queued up, and each person wears a sticker indicating their initial position in the queue (i.e.: with the first number denoting the front-most position). eg. initial  index = 1

# Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, # they still wear the same sticker denoting their original place in line. One person can bribe at most two other persons.
# That is to say, if n = 8, and Person 5 bribes Person 4, the queue will look like this: 1,2,3,5,4,6,7,8.

# starting queue is always [1,2,3,4,5]
# example:  input [2, 1, 5, 3, 4] output 3
# input [2,5,1,3,4] output 'too chaotic'

# time complexity on O(n^2)
def minimum_brides(q):
  swaps = 0
  for pos, val in enumerate(q):
    if (val-1) - pos > 2:
      return "Too chaotic"
    # check how many swaps its required to move back to initial position
    for j in range(max(0, val-2), pos):
      if q[j] > val:
        swaps += 1
  return swaps


print(minimum_brides([2, 1, 5, 3, 4]))
print(minimum_brides([2, 5, 1, 3, 4]))
