# john works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

# For example, there are n=7 socks with colors [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

# Approach - use dictionary to keep track of pairs
# overall complexity of O(n)


from collections import Counter


def sockMerchant(n, arr):
    socks = {}
    # time completexity of O(n)
    for sock in arr:
        if (sock in socks):
            socks[sock] += 1
        else:
            socks[sock] = 1

    pairs = 0
    # time complexity of O(len(socks))
    for _, v in socks.items():
        if (v/2):
            pairs += v//2
    return pairs


# solution using Counters from counter library

def sockMerchant2(n, arr):
    sock_count = Counter()
    pairs = 0

    for sock in arr:
        if sock not in sock_count:
            sock_count[sock] += 1
        else:
            pairs += 1
            del sock_count[sock]

    return pairs


print(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))
print(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))
