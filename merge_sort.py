def merge_sort(input_array):
  if len(input_array) > 1:
    
    middle = len(input_array) / 2
    
    # split array into LEFT array and RIGHT array
    L = input_array[middle:]
    R = input_array[:middle]

    # merge_sort the split arrays
    merge_sort(L)
    merge_sort(R)
    
    # set iterative index 
    i = j = k = 0

    # while the index is bigger than the len of the array 
    # this is so you only get arrays of either 1 or 2
    while i < len(L) and j < len(R):
      print('LEFT', L)
      print('RIGHT', R)
      # if element of Left array is smaller than the Right array element
      if L[i] < R[j]:
        # then the element from the left array should be placed before the element to the right
        input_array[k] = L[i]
        i+=1
      else:
        # then the element from the right array should be placed before the element to the left
        input_array[k] = R[j]
        j+=1

      k+=1

    # checking if any elements are left
    while i < len(L):
      input_array[k] = L[i]
      i+=1
      k+=1
    
    while j < len(R):
      input_array[k] = R[j]
      j+=1
      k+=1

  return input_array

print merge_sort([3,5,2,5,1,9,1,2,6,10,8,12])