function shortestWordEditPath(source, target, words) {
  /**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/
  // your code goes here
  // if target not in words return
  if (!words.includes(target)) return -1;
  // if source = target
  if (source === target) return 0;

  const nextWords = [[source, 0]];
  const seenWords = new Set();
  seenWords.add(source);
  // while nextWords has words
  while (nextWords.length) {
    const [currentWord, depth] = nextWords.shift();
    // target found
    if (currentWord === target) return depth;

    const similarWords = findClosestWords(currentWord, depth, words, seenWords);
    nextWords.push(...similarWords);
  }
  // path not found
  return -1;
}

// returns array of words
function findClosestWords(currentWord, depth, words, seenWords) {
  const similarWords = [];

  for (const word of words) {
    if (word.length !== currentWord.length) continue;

    let noOfDifferentLetters = 0;
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] !== word[i]) {
        noOfDifferentLetters++;
      }
    }

    if (noOfDifferentLetters === 1 && !seenWords.has(word)) {
      similarWords.push([word, depth + 1]);
      seenWords.add(word);
    }
  }
  return similarWords;
}

const source = 'bit';
const target = 'dog';
const words = ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot'];

console.log(shortestWordEditPath(source, target, words));
