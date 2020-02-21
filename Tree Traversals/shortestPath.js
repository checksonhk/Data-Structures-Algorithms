const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

const findShortestPathLength = function(maze, [xA, yA], [xB, yB]) {
  const visited = maze.map((row, y) => {
    return row.map((point, x) => {
      return {
        closed: point === 1,
        length: 0,
        openedBy: NO_ONE,
        x,
        y,
      };
    });
  });

  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;

  const queueA = [visited[yA][xA]];
  const queueB = [visited[yB][xB]];

  let iteration = 0;

  while (queueA.length && queueB.length) {
    iteration++;
    const neighborsA = queueA.reduce((acc, neighbor) => acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)), []);
    queueA.length = 0;
    for (let i = 0; i < neighborsA.length; i++) {
      const neighbor = neighborsA[i];
      if (neighbor.openedBy === BY_B) {
        return neighbor.length + iteration;
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_A;
        queueA.push(neighbor);
      }
    }

    const neighborsB = queueB.reduce((acc, neighbor) => acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)), []);
    queueB.length = 0;
    for (let i = 0; i < neighborsB.length; i++) {
      const neighbor = neighborsB[i];
      if (neighbor.openedBy === BY_A) {
        return neighbor.length + iteration;
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_B;
        queueB.push(neighbor);
      }
    }
    // logMaze(visited);
  }
  return -1;
};

const getNeighbors = function(visited, x, y) {
  const neighbors = [];
  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    // left
    neighbors.push(visited[y - 1][x]);
  }
  if (y + 1 < visited[0].length && !visited[y + 1][x].closed) {
    // right
    neighbors.push(visited[y + 1][x]);
  }
  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    // up
    neighbors.push(visited[y][x - 1]);
  }
  if (x + 1 < visited.length && !visited[y][x + 1].closed) {
    // down
    neighbors.push(visited[y][x + 1]);
  }
  return neighbors;
};

function logMaze(maze) {
  console.log('================');
  let header = 'XX | ';
  let subheader = '-----';
  for (let i = 0; i < maze[0].length; i++) {
    const num = i >= 10 ? i : '0' + i;
    header += `${num} `;
    subheader += '---';
  }
  console.log(header);
  console.log(subheader);
  maze.forEach((row, i) => {
    const num = i >= 10 ? i : '0' + i;
    let buffer = `${num} | `;

    row.forEach(item => {
      if (item.closed) {
        buffer += 'XX ';
      } else if (item.openedBy === NO_ONE) {
        buffer += '•• ';
      } else {
        buffer += (item.length >= 10 ? item.length : '0' + item.length) + ' ';
      }
    });

    console.log(buffer);
  });
}

const fourByFour = [
  [2, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 2],
];

console.log(findShortestPathLength(fourByFour, [0, 0], [3, 3]));

const eightByEight = [
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 2, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 2],
];
console.log(findShortestPathLength(eightByEight, [1, 7], [7, 7]));

const fifteenByFifteen = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8]));
