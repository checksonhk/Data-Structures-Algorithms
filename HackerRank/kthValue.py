# Given an array and a number k where k is smaller/larger than the size of the array, we need to find the kth smallest/largest
# element in the given # array. It is given that all array elements are distinct.
import random
import heapq

# Naive approach
def kValue(arr, k):
  # depending on how python implements sort
  # this is at best O(n*log(n))
  arr.sort()
  return arr[len(arr) - k]


print(kValue([3, 2, 1, 5, 6, 4], 2))

# Use Heap

# Whenever 'largest' of 'smallest' is in the question always think of heaps
# In the case of largest, use a min heap as we don't care about the smallest items (because min items will be on top meaning constant time removal )
# In the case of smallest, use a max heap as we don't care about the smallest items
# create a heap of size k, and go through each item and add it to the heap, if the heap is full, remove the smallest item

# This approach has a time complexity of of O(n*log(k))
def kValue2(arr, k):
  heap = []
  # O(n) for iterating through the arr
  for i in arr:
    # log(k) for pushing into the heap
    heapq.heappush(heap, i)
    if (len(heap) > k):
      heapq.heappop(heap)
  return heapq.heappop(heap)


print(kValue2([3, 2, 1, 5, 6, 4], 2))

# we can further improve the above solution using by partition the array similarly to a quick sort
# this solution will have a time compelexity of O(n)
def quickSelect(arr, k):
  n = len(arr)
  left = 0
  right = n - 1

  while (left < right):
    # every iteration the time complexity of the loop becomes half, as the partition() minimize the range at which we need to seach through values where n = len(arr)

    # eg. first iteration O((n/2) + n/2 - 1)
    # eg. second iteration O((n/4) + n/4 - 1)

    # the time complexity is upper bounded to O(n)

    pivot = random.randint(0, right)

    # Execute the actual partitioning and get back the final positition of the pivot we choose after partitioning is over
    # should return the pivot in its sorted idx
    finalIndexOfChoosenPivot = partition(arr, left, right, pivot)

    if finalIndexOfChoosenPivot == n - k:
      # then we have found the kth element
      return arr[finalIndexOfChoosenPivot]
    # if the idx of the chosen pivot > (n-k) we have overshot, then we should partition the array up the that index
    elif finalIndexOfChoosenPivot > (n-k):
      right = finalIndexOfChoosenPivot-1
    else:
      # likewise if pivot < (n-k), we have undershot, hence we should only check for values above the pivot
      left = finalIndexOfChoosenPivot + 1
  # not found
  return -1


# the time complexity of parition here is (len(arr) - 1)
def partition(arr, left, right, pivot):
  value = arr[pivot]
  # we need to move all items that are smaller than the pivot the start of the arr
  lessertailIdx = left

  # move the pivot out of the way, by swapping it with the tail idx
  arr[pivot], arr[right] = arr[right], arr[pivot]

  # check all values from the left bound to the right bound
  for i in range(left, right):
    # if item is less than pivot move it value the start of the array
    if (arr[i] < value):
      arr[i], arr[lessertailIdx] = arr[lessertailIdx], arr[i]
      lessertailIdx += 1
  # now that the partioning is done, swap back the pivot with the tail idx
  arr[right], arr[lessertailIdx] = arr[lessertailIdx], arr[right]

  # Return the index of where we just put the pivot so that the caller knows its
  # final idx (so that the caller can make the decisions it needs)
  return lessertailIdx


print(quickSelect([3, 2, 1, 5, 6, 4], 2))
