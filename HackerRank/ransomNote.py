# Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

# For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is No.

from collections import Counter

def random_note(magazine, note):
  characters = Counter()
  for char in magazine:
    characters[char] += 1

  for char in note:
    if char not in characters:
      return False
    elif characters[char] <= 0:
      return False
    else:
      characters[char] -= 1
  return True


def ransom_note(magazine, ransom):
  # we can subtract counters from each other, so if all the words are present from ransom are in magazine you'll get an empty dict
  return (Counter(ransom) - Counter(magazine)) == {}


print(ransom_note('give me one grand today night', 'give one grand today'))
print(ransom_note('two times three is not four', 'two times two is four'))
print(ransom_note('ive got a lovely bunch of coconuts', 'ive got some coconuts'))
