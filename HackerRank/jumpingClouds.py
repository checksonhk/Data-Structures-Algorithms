# Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting position to the last cloud.

# For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

# Example
# input = [0,1,0,0,0,1,0]
# output = 3 steps 0 -> 2 -> 4  -> 6


def jumping_on_clouds(arr):
  steps = 0
  i = 0
  while (i < len(arr):
    # check out of bounds and validity of step
      if i+2 < len(arr) and arr[i+2] != 1:
          steps += 1
          i += 2
      elif i+1 < len(arr) and arr[i+1] != 1:
          steps += 1
          i += 1
      else:
          break
  return steps


print(jumping_on_clouds([0, 1, 0, 0, 0, 1, 0]))
