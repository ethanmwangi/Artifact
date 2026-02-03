/* ========================================
   PRIMITIVE vs NON-PRIMITIVE TYPES
   ======================================== */

// PRIMITIVES: Copied by value
// Variables hold their own copy of the data
// Changing the original does NOT affect the copy

let a = 5;
let b = a;
a = 10;

console.log(b); // 5 (b is untouched)


/* ========================================
   NON-PRIMITIVES: Copied by reference
   ======================================== */
// Objects, arrays, functions are copied by reference
// Variables point to the same thing in memory
// Changing through one variable affects all references

let obj_a = { x: 1 };
let obj_b = obj_a;
obj_a.x = 2;

console.log(obj_b.x); // 2 (both variables point to same object)


/* ========================================
   MEMORY HOOK
   Primitives = copy the value
   Objects = copy the address
   ======================================== */