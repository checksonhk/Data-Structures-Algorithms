'''
Given a 2D matrix, the task is that we find maximum sum of a hour glass.
An hour glass is made of 7 cells in following form.
    A B C
      D
    E F G

Example:
Input : 1 1 1 0 0
        0 1 0 0 0
        1 1 1 0 0
        0 0 0 0 0
        0 0 0 0 0
Output : 7
'''

def sumHourglass(matrix, row, col):
  # index of hourglass is [row[i]col[i]...row[i+2]col[i]]
  #                       [null, row[i+1]col[i+1]], null]
  #                       [row[i]col[i+2]...row[i+2]col[i+2]]
  hourglass_sum = sum([matrix[row][col], matrix[row][col+1], matrix[row][col+2], matrix[row+1]
                       [col+1], matrix[row+2][col], matrix[row+2][col+1], matrix[row+2][col+2]])
  return hourglass_sum

def hourglass(matrix):
  # cant init max_sum as 0, what if the max sum is negative ?
  max_sum = float('-inf')
  # only iterate up to n-2
  for row in range(len(matrix)-2):
    for col in range(len(matrix[0]) - 2):
      current_sum = sumHourglass(matrix, row, col)
      if current_sum > max_sum:
        max_sum = current_sum
  return max_sum


grid = [[1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]]

print(hourglass(grid))
