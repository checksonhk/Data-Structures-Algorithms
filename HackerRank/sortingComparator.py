# Declare a Checker class that implements the comparator method as described. It should sort first descending by score, then ascending by name. The code stub reads the input, creates a list of Player objects, uses your method to sort the data, and prints it out properly.

class Player:
  def __init__(self, name, score):
    self.name = name
    self.score = score

  def __repr__(self):
    return repr((self.name, self.score))

  def comparator(a, b):
    if a.score != b.score:
      return b.score - a.score
    return (a.name > b.name)-(a.name < b.name)
