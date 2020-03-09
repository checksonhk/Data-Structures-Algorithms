/*
The output of the function should be an object with two items: vehicles and drivers:

{
  vehicles: { vehID1: drvID1, ... }, // Maps each vehicle ID to corresponding principal driver ID
  drivers: { drvID1: vehID1, ... }, // Maps each driver ID to corresponding principal vehicle ID
}
The input objects have the following shape:

type Vehicle = {
  id: string,
  year: number,
};

type Driver = {
  id: string,
  principalVehicleID: ?string, // This maybe null if data is not available.
  age: number,
};
*/

const vehicles_1 = [
  {
    id: '1',
    year: 2011,
  },
  {
    id: '2',
    year: 2011,
  },
  {
    id: '3',
    year: 2011,
  },
];

const drivers_1 = [
  {
    id: '101',
    principalVehicleID: '3',
    age: 35,
  },
  {
    id: '102',
    principalVehicleID: '1',
    age: 35,
  },
  {
    id: '103',
    principalVehicleID: null,
    age: 35,
  },
];
const vehicles_2 = [
  {
    id: '1',
    year: 2015,
  },
  {
    id: '2',
    year: 2001,
  },
  {
    id: '3',
    year: 2011,
  },
];

const drivers_2 = [
  {
    id: '101',
    principalVehicleID: '2',
    age: 38,
  },
  {
    id: '102',
    principalVehicleID: null,
    age: 19,
  },
  {
    id: '103',
    principalVehicleID: null,
    age: 35,
  },
];

const vehicles_3 = [
  {
    id: '1',
    year: 2011,
  },
  {
    id: '2',
    year: 2011,
  },
];

const drivers_3 = [
  {
    id: '101',
    principalVehicleID: null,
    age: 35,
  },
  {
    id: '102',
    principalVehicleID: null,
    age: 35,
  },
  {
    id: '103',
    principalVehicleID: null,
    age: 35,
  },
];

// console.log(assignVehicles(vehicles_1, drivers_1));
// console.log(assignVehicles(vehicles_2, drivers_2));
console.log(assignVehicles(vehicles_3, drivers_3));

// the function shuold map driverid to principalVehicleId; if provided. If not provided it should assign the principalVehicleId by the following rule: principalVehicleId = {youngestDriver : OldestCar}

function assignVehicles(vehicles, drivers) {
  // sort vehicles by oldest first
  let sortedVehicles = vehicles.slice().sort((v1, v2) => v1.year - v2.year || v1.id - v2.id);
  // sort drivers by youngest first
  const sortedDriver = drivers.sort((d1, d2) => d1.age > d2.age);

  const mappedDrivers = sortedDriver.reduce((obj, driver) => {
    if (vehicles.length === drivers.length) {
      sortedVehicles = sortedVehicles.filter(vehicle => !getKeyByValue(obj, vehicle.id));
    }

    // fulfill requirements that youngest driver, should be assigned oldest vehicle, if principalVehicleId is not fulfilled
    if (!driver.principalVehicleID) {
      if (vehicles.length !== drivers.length && Object.keys(obj).length == vehicles.length) {
        sortedVehicles.pop();
      }
      // assign principal Vehicle Id
      driver.principalVehicleID = sortedVehicles[sortedVehicles.length - 1].id;
    }

    obj[driver.id] = driver.principalVehicleID;
    return obj;
  }, {});

  const mappedVehicles = vehicles.reduce((obj, vehicle) => {
    obj[vehicle.id] = getKeyByValue(mappedDrivers, vehicle.id);
    return obj;
  }, {});

  return { vehicles: mappedVehicles, drivers: mappedDrivers };
}
function objectFlip(obj) {
  return Object.keys(obj).reduce((ret, key) => {
    ret[obj[key]] = key;
    return ret;
  }, {});
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] == value);
}

module.exports = { assignVehicles };
