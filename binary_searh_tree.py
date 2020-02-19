class Node(object):
  def __init__(self,value):
    self.value = value
    self.left = None
    self.right = None

class BST(object):
  def __init__(self, root):
    self.root = Node(root)

  def insert(self, new_val):
    self.insert_helper(self.root, new_val);

  def insert_helper(self, current, new_val):
    if current.value < new_val:
      # if current.right already exist
      if current.right:
        # check again to see wheter to put it left / right of the node
        self.insert_helper(current.right, new_val)
      else:
        current.right = Node(new_val)
    else:
      if current.left:
        self.insert_helper(current.left, new_val)
      else:
        current.left = Node(new_val)

  def search(self, find_val):
    # returns true if value is in the tree else false
    return self.search_helper(tree.root, find_val)
  
  def search_helper(self, current, find_val):
    # check if current exist
    if current:
      # check if current matches the value
      if current.value == find_val:
        return True
      elif find_val < current.value:
        return self.search_helper(current.left, find_val)          
      else: 
        return self.search_helper(current.right, find_val)
    return False

tree = BST(4)
tree.insert(2)
tree.insert(3)
tree.insert(5)
tree.insert(1)

print tree.search(4)

print tree.search(6)