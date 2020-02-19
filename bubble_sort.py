def bubble_sort(input_array):
  n = len(input_array)
  for i in range(n):
    for j in range(0, n-i-1):
      if input_array[j] > input_array[j+1]:
        input_array[j], input_array[j+1] = input_array[j+1], input_array[j]

  return input_array

print bubble_sort([3,5,2,5,1])