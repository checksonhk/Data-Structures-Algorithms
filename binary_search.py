import math as math

def binary_search(input_array, value):
  low = 0
  high = len(input_array)-1
  while low <= high:
    # print ('low', low, 'high', high)
    middle = (low + high) / 2
    # print ('middle',middle)
    if input_array[middle] == value:
      return middle
    elif input_array[middle] < value:
      low = middle + 1
    else:
      high = middle - 1

  return -1


test_list = [1,3,9,11,15,19,29,31]
test_value1 = 25
test_value2 = 15
print binary_search(test_list, test_value1)
print binary_search(test_list, test_value2)

