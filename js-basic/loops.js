// FOR LOOP BASICS
// for (initialization; condition; increment) { code }

// Simple counting loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Loop through array items
const items = ['apple', 'banana', 'orange'];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// Nested loops - multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// ⚠️ AVOID INFINITE LOOPS - Never create a condition that's always true
// for (let i = 0; i >= 0; i++) { } // This runs forever!

// ============================================
// FOR...OF LOOP BASICS
// ============================================
// for (variable of iterable) { code }
// Use for...of to loop over values from arrays and strings

// Loop through array of numbers
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// Loop through string characters
const str = 'freeCodeCamp';
for (let char of str) {
  console.log(char);
}

// Loop through array of objects
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

// ⚠️ Use 'let' if you need to modify the variable inside the loop
// Using 'const' will throw an error if you try to reassign:
// for (const num of numbers) {
//   num = num + 1; // ERROR - can't reassign const
// }

// Use 'let' instead:
for (let num of numbers) {
  num = num + 1;
  console.log(num);
}
