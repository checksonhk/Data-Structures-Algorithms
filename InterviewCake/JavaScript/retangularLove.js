/*
Write a function to find the rectangular intersection of two given love rectangles. - eg the rectangle created via the intersection

  const myRectangle = {

  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3,
};
*/

function findRectangularOverlap(rect1, rect2) {
  // Calculate the overlap between the two rectangles
  // check intersection
  if (
    rect2.leftX < rect1.leftX + rect1.width &&
    rect2.bottomY > rect1.bottomY &&
    rect2.bottomY + rect2.height > rect1.bottomY + rect1.height
  ) {
    return {
      leftX: rect2.leftX,
      bottomY: rect2.bottomY,
      width: rect1.leftX + rect1.width - rect2.leftX,
      height: rect1.bottomY + rect1.height - rect2.bottomY,
    };
  }

  return { leftX: null, bottomY: null, width: null, height: null };
}

const myRectangle = {
  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3,
};

const myRectangle2 = {
  // Coordinates of bottom-left corner
  leftX: 5,
  bottomY: 2,

  // Width and height
  width: 6,
  height: 3,
};

console.log(findRectangularOverlap(myRectangle, myRectangle2));

// optimal solution
function findRangeOverlap(point1, length1, point2, length2) {
  // Find the highest start point and lowest end point.
  // The highest ("rightmost" or "upmost") start point is
  // the start point of the overlap.
  // The lowest end point is the end point of the overlap.
  const highestStartPoint = Math.max(point1, point2);
  const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  // Return null overlap if there is no overlap
  if (highestStartPoint >= lowestEndPoint) {
    return { startPoint: null, overlapLength: null };
  }

  // Compute the overlap length
  const overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength: overlapLength };
}

function findRectangularOverlap(rect1, rect2) {
  // Get the x and y overlap points and lengths
  const xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  // Return null rectangle if there is no overlap
  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength,
  };
}
