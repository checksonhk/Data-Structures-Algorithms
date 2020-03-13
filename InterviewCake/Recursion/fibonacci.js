/*
Write a function fib() that takes an integer nn and returns the nnth Fibonacci number.
*/

// time complexity of O(n) , space complexity of O(n)
function calculateFibonnaci(n) {
  const memo = {};
  // fib(n > 3) = 1
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 1;
  return fibonacci(n, memo);
}

function fibonacci(n, memo) {
  if (memo[n]) return memo[n];
  memo[n] = memo[n - 2] + memo[n - 1];
  return fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
}

// better solution which only memos the required values
// bottom up approach
// Time complexity of O(n), space complexity of O(1)
function fib(n) {
  // Edge cases:
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    return n;
  }

  // We'll be building the fibonacci series from the bottom up
  // So we'll need to track the previous 2 numbers at each step
  let prevPrev = 0; // 0th fibonacci
  let prev = 1; // 1st fibonacci
  let current; // Declare current

  for (let i = 1; i < n; i++) {
    // Iteration 1: current = 2nd fibonacci
    // Iteration 2: current = 3rd fibonacci
    // Iteration 3: current = 4th fibonacci
    // To get nth fibonacci ... do n-1 iterations.
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

console.log(calculateFibonnaci(4));
