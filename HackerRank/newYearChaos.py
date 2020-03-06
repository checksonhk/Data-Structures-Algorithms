# There are people queued up, and each person wears a sticker indicating their initial position in the queue (i.e.: with the first number denoting the front-most position). eg. initial  index = 1

# Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, # they still wear the same sticker denoting their original place in line. One person can bribe at most two other persons.
# That is to say, if n = 8, and Person 5 bribes Person 4, the queue will look like this: 1,2,3,5,4,6,7,8.

# starting queue is always [1,2,3,4,5]
# example:  input [2, 1, 5, 3, 4] output 3
# input [2,5,1,3,4] output 'too chaotic'

# time complexity on O(n^2)
def minimum_brides(Q):

  # initialize the number of moves
  moves = 0

  # decrease Q by 1 to make index-matching more intuitive
  # so that our values go from 0 to N-1, just like our
  # indices.  (Not necessary but makes it easier to
  # understand.)
  Q = [P-1 for P in Q]

  # Loop through each person (P) in the queue (Q)
  for i, P in enumerate(Q):
    # i is the current position of P, while P is the
    # original position of P.

    # First check if any P is more than two ahead of
    # its original position
    if P - i > 2:
      print("Too chaotic")
      return
    # From here on out, we don't care if P has moved
    # forwards, it is better to count how many times
    # P has RECEIVED a bribe, by looking at who is
    # ahead of P.  P's original position is the value
    # of P.
    # Anyone who bribed P cannot get to higher than
    # one position in front if P's original position,
    # so we need to look from one position in front
    # of P's original position to one in front of P's
    # current position, and see how many of those
    # positions in Q contain a number large than P.
    # In other words we will look from P-1 to i-1,
    # which in Python is range(P-1,i-1+1), or simply
    # range(P-1,i).  To make sure we don't try an
    # index less than zero, replace P-1 with
    # max(P-1,0)
    for j in range(max(P-1, 0), i):
      if Q[j] > P:
        moves += 1


print(minimum_brides([2, 1, 5, 3, 4]))
print(minimum_brides([2, 5, 1, 3, 4]))
