# You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.
# Given [7,1,3,2,4,5,6]
# i   arr                         swap (indices)
# 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
# 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
# 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
# 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
# 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
# 5   [1, 2, 3, 4, 5, 6, 7]
# it took 5 swaps to sort the array

# does not print minimum swaps
def minimum_swap(arr):
  swap = 0
  # time complexity of O(n)
  for i in range(len(arr)):
    if i != arr[i] - 1:
      # find index of number
      # time complexity O(i-j)
      # eg. if i 3 sort array from [3,4,5...n]
      # sorts 1 less element
      for j in range(i, len(arr)):
        if arr[j]-1 == i:
          # swap
          print(i, j)
          swap += 1
          arr[i], arr[j] = arr[j], arr[i]
          print(arr)
  return swap

# since the values of arr[i] should reflect the value, we can keep swaping the current pointers value with to the value at acc[current pointer value]
# eg. if [2,3,4,1,5]
# at i = 0 we expect 1, but its 2 (we also know 2 should be in index 1)
# so we swap a[i], a[a[i]-1] = a[a[i]-1], a[i]
# so (2, 3) get swapped
# now the array looks like [3,2,4,1,5] (note the 2 is now in the right position)
# i is still 0
# now (3,4) get swapped
# [4,2,3,1,5]
# i is still 0
# swap (4,1)
# [1,2,3,4,5]
# the array is now sorted !


# The time complexity is O(n + k) where k is the number of swaps, in the worst case k will be equal to n so O(n + n) = O(2n).
def minimum_swaps(arr):
  numSwaps = 0
  i = 0
  while(i < len(arr)-1):
    if arr[i] != i+1:
      tmp = arr[i]
      arr[i], arr[tmp-1] = arr[tmp-1], arr[i]
      numSwaps += 1
    else:
      i += 1
  return numSwaps


print(minimum_swaps([7, 1, 3, 2, 4, 5, 6]))
print(minimum_swaps([2, 3, 4, 1, 5]))
