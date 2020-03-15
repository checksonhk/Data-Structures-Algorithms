# You are given an array and you need to find number of tripets of indices (i,j,k) such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.

# For example, arr=[1,4,16,64]. If r = 4, we have [1,4,16] and [4,16,64] at indices (0,1,2) and (1,2,3) .
# Example
# input = [1 3 9 9 27 81]
# output = 6 ([0,1,2],[0,1,3],[1,2,4],[1,3,4],[2,4,5],[3,4,5])

# time complexity of O(n^3)
# space complexity of O(n)
from collections import defaultdict
def countingTriplet1(array, ratio):
  n = len(array)
  triplets = []
  for i in range(n):
    for j in range(i, n):
      for k in range(j, n):
        if (array[k] / ratio == array[j] and array[j] / ratio == array[i]):
          triplets.append([i, j, k])
  # print(triplets)
  return len(triplets)


def countTriplets(arr, r):
    # stores number of tuples with two elements that can be formed if we find the key
  potential_two_tuples = defaultdict(int)
  # stores number of tuples with three elements that can be formed if we find the key
  potential_three_tuples = defaultdict(int)
  count = 0
  for k in arr:
      # k completes the three tuples given we have already found k/(r^2) and k/r
    count += potential_three_tuples[k]
    # For any element of array we can form three element tuples if we find k*r given k / r is already found. Also k forms the second element.
    potential_three_tuples[k*r] += potential_two_tuples[k]
    # For any element of array we can form two element tuples if we find k*r. Also k forms the first element.
    potential_two_tuples[k*r] += 1
  return count


# print(countingTriplets([1, 4, 16, 64], 4))  # 2
# print(countingTriplets([1, 5, 5, 25, 125], 5))  # 6
print(countingTriplets([1, 3, 9, 9, 27, 81], 3))  # 4
