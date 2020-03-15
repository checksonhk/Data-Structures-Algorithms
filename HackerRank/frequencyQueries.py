# You are given  queries. Each query is of the form two integers described below:
# 1-x : Insert x in your data structure.
# 2-y : Delete one occurence of y from your data structure, if present.
# 3-z : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.

# queries[i][1] contains the data element. For example, you are given array
'''
Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
'''
# Output = [0,1]

from collections import defaultdict

def freqQuery(queries):
  d = defaultdict(lambda: 0)
  f = defaultdict(lambda: 0)
  output = []
  for command, key in queries:  # O(n) queries
    if command == 1:
      f[d[key]] = max(0, f[d[key]] - 1)
      d[key] += 1
      f[d[key]] += 1
    elif command == 2:
      f[d[key]] = max(0, f[d[key]] - 1)
      d[key] = max(0, d[key] - 1)
      if d[key] > 0:
        f[d[key]] += 1
    else:
      if f[key] > 0:  # O(1)
        output.append(1)
      else:
        output.append(0)
  return output


print(frequencyQueries([(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)]))
