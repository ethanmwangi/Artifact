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


/* ========================================
   FUNCTIONS vs METHODS
   ======================================== */
// Core difference (one sentence)
// A function is standalone. A method is a function that lives on an object 
// and usually works with that object's data.

// 1️ FUNCTIONS (standalone)
// - Exist on their own
// - Don't belong to any object
// - Don't automatically know about object data

function greet(name) {
  return "Hello " + name;
}

greet("Alice"); // greet doesn't know or care about any object

// 2️⃣ OBJECT METHODS
// - Functions stored as object properties
// - Called through the object
// - Can access object data using 'this'

const person = {
  name: "Bob",
  sayHello() {
    return "Hello, my name is " + this.name;
  }
};

person.sayHello(); // sayHello belongs to person, this.name means "name on THIS object"

// 3️ THE REAL MENTAL MODEL
// When you write: person.sayHello();
// JS reads it as: "Run sayHello with person as the context"
// So: this === person
// That's the magic difference.

// 4 WHY METHODS EXIST (practical reason)
// Methods are for behavior tied to data.

// Function (generic)
function calculateAge(birthYear) {
  return 2026 - birthYear;
}

// Method (tied to object)
const user = {
  birthYear: 1995,
  calculateAge() {
    return 2026 - this.birthYear;
  }
};

// If behavior uses object's data → method
// If behavior is generic & reusable → function

// 5️⃣ QUICK COMPARISON
// ┌─────────────────┬──────────┬────────┐
// │ Thing           │ Function │ Method │
// ├─────────────────┼──────────┼────────┤
// │ Lives alone?    │ ✅       │ ❌     │
// │ Belongs to obj? │ ❌       │ ✅     │
// │ Uses this?      │ ❌       │ ✅     │
// │ Call style      │ fn()     │ obj.fn()│
// └─────────────────┴──────────┴────────┘

// Memory hook: Method = function + object + this
