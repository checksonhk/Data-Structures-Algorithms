# Given an integer N and a lowercase string. The string is repeated infinitely. The task is to find the No. of occurrences of a given character x in first N letters.

# Input : N = 10 str = "abcac"
# Output : 4
# Explanation: "abcacabcac" is the substring from the infinitely repeated string. In first 10 letters 'a' occurs 4  times.

def repeated_string(str, n):
  str, n = input().strip(), int(input().strip())
  # use built in count to count number of a in string
  # n // len will give you the numberof occuerences of that string
  # need to acount for all remainder of the string
  return (str.count("a") * (n // len(str)) + str[:n % len(str)].count("a"))
