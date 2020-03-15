# Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy?
# Example
# prices = [1,2,3,4], 7
# [1,2,3] or [3,4]
# output = 3 (1,2,3)

def maximumToys(prices, k):
  prices.sort()
  i = 0
  while k > 0 and i < len(prices):
    k -= prices[i]
    i += 1

  return i - 1


test = [1, 12, 5, 111, 200, 1000, 10]
k = 50
print(maximumToys1([1, 2, 3, 4], 7))
# print(maximumToys(test, k))
# expect 4 [1,12,5,10]
