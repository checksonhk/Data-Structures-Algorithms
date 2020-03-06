# Print left rotation of array in O(n) time and O(1) space
# input [1, 3, 5, 7, 9], 2
# output [9,7,1,3,5,7]

from collections import deque
# Deques are a generalization of stacks and queues (the name is pronounced ``deck'' and is short for ``double-ended queue''). Deques support thread-safe, memory efficient appends and pops from either side of the deque with approximately the same O(1) performance in either direction

def left_rotation(arr, rotations):
  output = deque(arr)
  for _ in range(rotations):
    popped = output.popleft()
    output.append(popped)

  return output


print(left_rotation([1, 3, 5, 7, 9], 2))
