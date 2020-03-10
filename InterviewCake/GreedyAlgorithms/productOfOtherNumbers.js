/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
You can't use division in your solution!
*/

// Brute Force solution time complexity of O(n^2) space complexity of O(n)
function getProductsOfAllIntsExceptAtIndex1(nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        sum *= nums[j];
      }
    }
    output.push(sum);
  }

  return output;
}

function getProductsOfAllIntsExceptAtIndex(nums) {
  if (nums.length < 2) throw Error;
  const output = [];

  // For each integer, find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = productSoFar;
    productSoFar *= nums[i];
  }

  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers

  productSoFar = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= productSoFar;
    productSoFar *= nums[i];
  }

  // console.log(productsOfAllIntsBeforeIndex);
  // console.log(productsOfAllIntsAfterIndex);

  return output;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
