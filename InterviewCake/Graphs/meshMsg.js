/*
Given information about active users on the network, find the shortest route for a message from one user (the sender) to another (the recipient). Return an array of users that make up this route.

  const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
  ...
};
*/

class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

function reconstructPath(howWeReachedNodes, startNode, endNode) {
  const reversedShortestPath = [];

  // Start from the end of the path and work backwards
  let currentNode = endNode;

  while (currentNode !== null) {
    reversedShortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }

  // Reverse our path to get the right order
  return reversedShortestPath.reverse(); // No longer reversed
}

// Time complexity of O(n + m) n is the number of nodes, m is the number of neighbors
// Space complexity of O(n)
function getPath(graph, startNode, endNode) {
  if (!graph.hasOwnProperty(startNode)) {
    throw 'Start node not in graph!';
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw 'End node not in graph!';
  }

  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  // Keep track of how we got to each node
  // We'll use this to reconstruct the shortest path at the end
  // We'll ALSO use this to keep track of which nodes we've
  // already visited
  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  // worse case O(n)
  while (nodesToVisit.size > 0) {
    const currentNode = nodesToVisit.dequeue();

    // Stop when we reach the end node
    if (currentNode === endNode) {
      // O(n)
      return reconstructPath(howWeReachedNodes, startNode, endNode);
    }

    // O(m)
    graph[currentNode].forEach(neighbor => {
      if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
        nodesToVisit.enqueue(neighbor);
        howWeReachedNodes[neighbor] = currentNode;
      }
    });
  }

  // If we get here, then we never found the end node
  // so there's NO path from startNode to endNode
  return null;
}

const network = {
  Min: ['William', 'Jayden', 'Omar'],
  William: ['Min', 'Noam'],
  Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
  Ren: ['Jayden', 'Omar'],
  Amelia: ['Jayden', 'Adam', 'Miguel'],
  Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
  Noam: ['Nathan', 'Jayden', 'William'],
  Omar: ['Ren', 'Min', 'Scott'],
};

console.log(getPath(network, 'Ren', 'Min'));
