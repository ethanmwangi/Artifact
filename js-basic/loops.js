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
