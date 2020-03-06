# Given two strings, determine if they share a common substring. A substring may be as small as one character.

# For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.

# Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

from collections import Counter

def two_strings(string_1, string_2):
  return not Counter(string_1) - Counter(string_2) == Counter(string_1)


def twoStrings(s1, s2):
  # use chars exist in both sets
  return 'YES' if set(s1) & set(s2) else 'NO'


print(two_strings('hello', 'world'))
print(two_strings('hi', 'world'))
