// 1. Loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 2. Function that takes an array of numbers and returns the sum
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Example test
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// 3. Function to find the largest number in an array
function findLargest(arr) {
  let largest = arr[0]; // assume the first number is the largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // update if a larger number is found
    }
  }
  return largest;
}

// Example test
console.log(findLargest([10, 25, 3, 99, 42])); // Output: 99
// 4. Function that checks if a number is even or odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example tests
console.log(checkEvenOdd(4)); // Output: Even
console.log(checkEvenOdd(7)); // Output: Odd
// 5. Function that reverses a given string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example test
console.log(reverseString("hello")); // Output: "olleh"
// 6. Merge two arrays using the spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
// 7. Use ES6 filter to return even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
// 8. Rewrite using template literals
const name = "Alice";
const message = `Hello ${name}, welcome!`;

console.log(message); // Output: Hello Alice, welcome!