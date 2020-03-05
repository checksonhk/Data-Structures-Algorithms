import random as random

# partition accepts an array, the lowest index, and highest index you want it to partition 
# the partition returns the index of the element that has been pivoted to the right position, by sorting elements to 
# be either higher or lower than the pivot value

def partition(arr, low, high):
  # select the pivot to be the highest value in the partition 
  pivot = arr[high]

  # set starting index
  i = (low - 1)

  # iterate through the parition 
  for j in range(low, high):
    # if the element is smaller than the pivot
    if arr[j] < pivot:
      i+=1
      # swap element at lowest index, with current value
      arr[i], arr[j] = arr[j], arr[i]
  # swap remaining elements with the pivot 
  arr[i+1], arr[high] = arr[high], arr[i+1]

  # the pivot element is now in place with index i+1
  return i+1


# accepts an array, starting index, and ending index
def quick_sort(input_array, low=0, high=None):
  if not high: high = len(input_array)-1

# the problem with this implementation is that we require extra space for the recursive function calls, in the worse case requires O(n) space on function call stack

# the worse case happens when the selected pivot always divides the array such that one part as 0 elements, and the other part has n-1 elements. 

  """
# while lowest index is lower than highest index
  if low < high:

    # partition the pivot vaue, arr[pi] is now in the right position 
    pi = partition(input_array, low, high)

    # apply partition to the left of the pivot
    quick_sort(input_arr, low, pi-1)
    # apply partition to the right of the pivot
    quick_sort(intput_arr, pi+1, high)
  """

# we can limit the space to O(log n), by using tail call elimination. However, in the worse case its still takes up O(n) space
  """
  while (low < high):
    pi = partition(input_array, low, high)

    # seperatetely sort elements, before and after partition index
    quick_sort(input_array, low, pi - 1)

    low = pi + 1
  """

# we can furhter optimize the implementation to only make a recursive call only for the smaller part after the partition 

  while (low < high):
    pi = partition(input_array, low, high)

    # if the left split of the partition becomes smaller than the right split, we make the recursive call on the right
    if (pi - low < high - pi):
      quick_sort(input_array, low, pi - 1)
      low = pi + 1

    # else we make the recursive call on the right split
    else:
      quick_sort(input_array, pi + 1, high)
      high = pi - 1





arr = [3,5,2,5,1,9,1,2,6,10,8,12]
n = len(arr)

print 'BEFORE QUICKSORT',arr
quick_sort(arr) 
print 'AFTER QUICKSORT',arr