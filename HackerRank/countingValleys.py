# A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

# Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

# For example, if Gary's path is s=[DDUUUUDD], he first enters a valley 2 units deep. Then he climbs out and up into a mountain 2 units high. Finally, he returns to sea level and ends the hike

# Approach - keep track of current position relative to sea level, at every iteration first check if it is below sealevel, then follow the path, and then check again if it now at/above sea level

# Overall time complexity O(n)
def counting_valleys(string):
  map = {'D': -1, 'U': 1}
  current_pos = 0
  valleys = 0
  for path in string:
    in_valley = False
    if current_pos < 0:
      in_valley = True
    current_pos += map[path]
    if in_valley and current_pos >= 0:
      valleys += 1
  return valleys

# can be optimized by understanding 0 is falsey in python
def countingValleys(n, s):
  UD = {'U': 1, 'D': -1}
  sea_level = 0
  valley = 0
  for step in s:
    sea_level = sea_level + UD[step]
    if not sea_level and step == 'U':
      valley += 1
  return valley


print(counting_valleys('DDUUDDUDUUUD'))
