/*
Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.
*/

function wordMap(words) {
  const wordMap = new Map();
  words.split(' ').forEach(word => {
    if (wordMap.has(word.toLowerCase())) {
      wordMap.set(word.toLowerCase(), wordMap.get(word) + 1);
    } else {
      wordMap.set(word.toLowerCase(), 1);
    }
  });
  return wordMap;
}

console.log(wordMap('Add milk and eggs, then add flour and sugar.'));
console.log(wordMap('After beating the eggs, Dana read the next step:'));
