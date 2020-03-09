/*
Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
*/

// Overall time complexity of O(2n) with space complexity of O(n)
function recommendMovie(movieLengths, flightLength) {
  // time complexity of O(n)
  const movies = movieLengths.reduce((obj, movie) => {
    // does not account for duplicates
    obj[movie] = true;
    return obj;
  }, {});

  // time complexity of O(n)
  for (const movie of movieLengths) {
    movies[movie] = false;
    if (movies[flightLength - movie]) return true;
    movies[movie] = true;
  }
  return false;
}

// implementation using sets

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (const movie of movieLengths) {
    const firstMovieLength = movie;

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}

const flights = [2, 4];
console.log(recommendMovie(flights, 6));
