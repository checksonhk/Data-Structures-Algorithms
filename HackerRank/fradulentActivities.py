# HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to 2X the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

# Given the number of trailing days  and a client's total daily expenditures for a period of  days, find and print the number of times the client will receive a notification over all  days.

from collections import deque
import sys
import re
import random
import os
import math
def median(array):
  sortedArray = sorted(array)
  n = len(array)
  if n % 2 == 1:
    return sortedArray[n / 2]
  else:
    return (sortedArray[(n / 2) - 1] + sortedArray[n / 2])/2

def activityNotifications(expenditure, d):
  notifications = 0
  for i in range(len(expenditure)):
    if i >= d and expenditure[i] >= median(expenditure[i-d:i]) * 2:
      notifications += 1
  return notifications


class RunningMedian(object):

  def __init__(self, maxLen):
    self.d = [0] * 201
    self.queue = deque()
    self.maxLen = maxLen

  def add(self, v: int) -> None:
    self.queue.append(v)
    self.d[v] += 1
    if len(self.queue) > self.maxLen:
      val = self.queue.popleft()
      self.d[val] -= 1

  def median(self) -> int:
    a = int(self.maxLen / 2)
    b = a + 1
    mid1 = None
    mid2 = None
    rs = 0

    for idx, v in enumerate(self.d):
      rs += v
      if rs >= a and mid1 is None:
        mid1 = idx
      if rs >= b:
        mid2 = idx
        break

    if self.maxLen % 2 == 0:
      return (mid1 + mid2) / 2.0
    else:
      return mid2


# Complete the activityNotifications function below.
def activityNotifications(expenditure, d):
  notifications = 0
  r = RunningMedian(d)
  for v in expenditure[:d]:
    r.add(v)

  for idx, v in enumerate(expenditure[d:]):
    median = r.median()
    # print(median, expenditure[idx: idx+d])
    if v >= (2*median):
      notifications += 1
    r.add(v)

  return notifications


test = [2, 3, 4, 2, 3, 6, 8, 4, 5]
print activityNotifications(test, 5)
test2 = [10, 20, 30, 40, 50]
print activityNotifications(test2, 3)
