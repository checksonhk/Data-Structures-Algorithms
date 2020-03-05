class Node(object):
  def __init__(self,value):
    self.value = value
    self.left = None
    self.right = None

class BinaryTree(object):
  def __init__(self, root):
    self.root = Node(root)
  
  def search(self, find_val):
    # returns true if value is in the tree else false
    return self.preorder_search(tree.root, find_val)
  
  def print_tree(self):
    return self.preorder_print(tree.root, "")[:-1]

  def preorder_search(self, start, find_val):
    # check if start exist
    if start:
      # check if start matches the value
      if start.value == find_val:
        return True
      else:
        # first tries to search left_sub_tree, if left_tree is false, search right_sub_tree
        return self.preorder_search(start.left, find_val) or self.preorder_search(start.rigth, find_val)

    # if value isn't found return false
    return False

  def preorder_print(self, start, traversal):
    if start:
      traversal += (str(start.value) + "-")
      traversal = self.preorder_print(start.left, traversal)
      traversal = self.preorder_print(start.right, traversal)
    return traversal

# Set up tree
tree = BinaryTree(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)

# Test search - should be true
print tree.search(4)

# Print Tree
print tree.print_tree()