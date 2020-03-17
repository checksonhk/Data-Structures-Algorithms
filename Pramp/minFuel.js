/*
Given an array route of 3D points, implement a function calcDroneMinEnergy that computes and returns the minimal amount of energy the drone would need to complete its route. Assume that the drone starts its flight at the first point in route. That is, no energy was expended to place the drone at the starting point.
input:  route = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]

output: 5 # less than 5 kWh and the drone would crash before the finish
          # line. More than `5` kWh and it’d end up with excess energy
*/

function calcDroneMinEnergy(route) {
  // your code goes here
  // space O(1)
  let fuel = 0;
  let minimumFuel = 0;
  // time complexity of O(n)
  for (let i = 0; i < route.length - 1; i++) {
    const deltaZ = route[i][2] - route[i + 1][2];
    fuel += deltaZ;

    if (fuel < 0) minimumFuel = Math.min(minimumFuel, fuel);
  }

  return Math.abs(minimumFuel);
}

function calcDroneMinEnergy(route) {
  const startingZ = route[0][2];
  let maxZ = startingZ;
  for (const coord of route) {
    if (coord[2] > maxZ) maxZ = coord[2];
  }

  return maxZ - startingZ;
}
