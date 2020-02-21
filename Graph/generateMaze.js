// create a function that accepts two paraments: an empty maze and a starting coordinate
// the maze will be an array of arrays of objects. the objects will look like:
// {
//   "n": true,
//   "e": true,
//   "s": true,
//   "w": true,
//   "visited": false
// }
//
// the outer array (that contains arrays) represents the y axis. the inner arrays (that contains
// objects) are represent the x axis. maze[y][x]
//
// the starting coordinates will be a pair, an array of two numbers, [x, y]. the first
// number will be the x position and the second will be the y position
//
// generateMaze will return the same maze (you can operate on the parameter itself)

// it will also attempt to draw your maze as you write your algorithm. you'll see two lines for each
// cell since neighbors each has its own walls. writeMaze assumes your data is well formatted . if you
// have unvisted cells, they'll be highlighted in red
//
// if you'd like to see the utlities functions, they're kept in this CodePen:
// https://codepen.io/btholt/pen/bLEryO?editors=0010

const getModifier = key => {
  if (key === 'n') return [0, 1];
  if (key === 's') return [0, -1];
  if (key === 'e') return [1, 0];
  if (key === 'w') return [-1, 0];
};

const getOpposite = key => {
  if (key === 'n') return 's';
  if (key === 's') return 'n';
  if (key === 'e') return 'w';
  if (key === 'w') return 'e';
};

const nextNode = (maze, x, y) => {
  const node = maze[y][x];
  node.visited = true;
  randomizeDirection().forEach(direction => {
    const [xMod, yMod] = getModifier(direction);

    if (maze[y + yMod] && maze[y + yMod][x + xMod] && !maze[y + yMod][x + xMod].visited) {
      node[direction] = false;
      maze[y + yMod][x + xMod][getOpposite(direction)] = false;
      nextNode(maze, x + xMod, y + yMod);
    }
  });
  return;
};

const generateMaze = (maze, [xStart, yStart]) => {
  // code goes here
  nextNode(maze, xStart, yStart);
  return maze;
};
