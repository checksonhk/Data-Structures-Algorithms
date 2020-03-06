# Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

# For example s = mom, the list of all anagrammatic pairs is [m,m] and [mo,om].

# Approach
# generate a dictionary with a k,v pair which is (length of substring, substrings of the same length). Then I generate all the possible substrings and for each one I sort them and them find out if the sorted substring is already in the array of sorted substrings of the same length. If so we've found another anagram so we increment the anagram counter. After generating all the substrings we will also have the number of anagrams.

from collections import Counter

def getAllSubStrings(string):
  substrings = []
  n = len(string)
  for i in range(n):
    for j in range(i+1, n+1):
      substrings.append(string[i:j])
  return substrings

def isAnagram(s1, s2):
  return Counter(s2) - Counter(s1) == {}

def countAnagrams(subStrings):
  count = 0
  for i in range(len(subStrings)):
    for j in range(i+1, len(subStrings)):
      if isAnagram(subStrings[i], subStrings[j]):
        count += 1
  return count

def sherlock_anagrams(string):
  all_subStrings = getAllSubStrings(string)
  count = countAnagrams(all_subStrings)
  return count


# faster solution

def count_anagrams(string):
  buckets = {}
  for i in range(len(string)):
    for j in range(1, len(string) - i + 1):
      key = frozenset(Counter(string[i:i+j]).items())  # O(N) time key extract
      buckets[key] = buckets.get(key, 0) + 1
  count = 0
  for key in buckets:
    count += buckets[key] * (buckets[key]-1) // 2
  return count


print(sherlock_anagrams('cdcd'))
print(count_anagrams('cdcd'))
