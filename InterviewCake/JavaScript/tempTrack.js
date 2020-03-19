/*
Write a class TempTracker with these methods:

- insert()—records a new temperature
- getMax()—returns the highest temp we've seen so far
- getMin()—returns the lowest temp we've seen so far
- getMean()—returns the mean of all temps we've seen so far
- getMode()—returns a mode of all temps we've seen so far

Optimize for space and time. Favor speeding up the getter methods getMax(), getMin(), getMean(), and getMode() over speeding up the insert() method.
*/

class TempTracker {
  constructor() {
    this.temperatures = [];
    this.max = null;
    this.min = null;
    this.mean = null;
    this.mode = null;
  }

  insert(value) {
    if (this.max === null) this.max = value;
    if (this.min === null) this.min = value;
    if (this.mean === null) this.mean = value;
    if (this.mode === null) this.mode = value;
    else {
      this.temperatures.push(value);
      if (value > this.max) {
        this.max = value;
      } else if (value < this.min) {
        this.min = value;
      }
      this.mean = this._calculateMean(this.temperatures);
      this.mode = this._calculateMode(this.temperatures);
    }
  }

  _calculateMean(temperatures) {
    const sum = temperatures.reduce((acc, curr) => acc + curr);
    return sum / temperatures.length;
  }

  _calculateMode(temperatures) {
    const mid = Math.floor(temperatures.length / 2);
    return temperatures[mid] + (temperatures.length % 2 ? 0 : temperatures[mid + 1] / 2);
  }
}

const tempTrack = new TempTracker();
tempTrack.insert(5);
tempTrack.insert(2);
tempTrack.insert(4);
console.log(tempTrack);
tempTrack.insert(3);
tempTrack.insert(7);
tempTrack.insert(9);
console.log(tempTrack);

// Optimal Solution

class TempTracker {
  constructor() {
    // For mode
    this.occurrences = new Array(111).fill(0); // Array of 0s at indices 0..110
    this.maxOccurrences = 0;
    this.mode = null;

    // For mean
    this.numberOfReadings = 0;
    this.totalSum = 0;
    this.mean = null;

    // For min and max
    this.minTemp = null;
    this.maxTemp = null;
  }

  insert(temperature) {
    // For mode
    this.occurrences[temperature]++;
    if (this.occurrences[temperature] > this.maxOccurrences) {
      this.mode = temperature;
      this.maxOccurrences = this.occurrences[temperature];
    }

    // For mean
    this.numberOfReadings++;
    this.totalSum += temperature;
    this.mean = this.totalSum / this.numberOfReadings;

    // For min and max
    if (this.maxTemp === null || temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
      this.minTemp = temperature;
    }
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}
