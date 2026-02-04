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

/* ========================================
   CONSTRUCTORS
   ======================================== */
// Constructors are for creating and initializing objects.
// We rarely use some of them (like Object()) directly because object literals are more readable,
// but constructors are still important for structure and defensive programming.

// 1️⃣ CONSTRUCTORS = OBJECT CREATORS
// Any function used with 'new' is a constructor.

function Person(name) {
  this.name = name;
}

const p = new Person("Alice");

// Constructors exist to create and initialize objects


// 2️⃣ WHY Object() IS RARELY USED
const area = {};
const  brad = new Object();

// Same thing, but:
// {} is cleaner, more readable, and idiomatic JS
// So we avoid Object() specifically, not constructors in general.


// 3️⃣ CONSTRUCTORS ARE STILL EVERYWHERE (JUST HIDDEN)
// You already use constructors all the time without realizing:
// []          // new Array()
// {}          // new Object()
// "hi"        // new String() (wrapper when needed)
// JS just gives you nicer syntax.


// 4️⃣ WHERE DEFENSIVE PROGRAMMING COMES IN
// Constructors like Object(value) are useful when:
// - input type is unknown
// - data comes from users / APIs / external sources
// - you want guarantees
// Object(value); // ensures "this is now an object"


/* ========================================
   FINAL MENTAL MODEL
   ======================================== */
// Object literals {} → daily use, readable
// Constructors (new Something) → structure, patterns, guarantees
// Object(value) → defensive conversion, not creation


/* ========================================
   JSON (JAVASCRIPT OBJECT NOTATION)
   ======================================== */
// JSON is used to send and transfer data between things like servers, APIs, and applications.
// It's a data format, not executable code.
// Once JSON is loaded into JavaScript, you access its data using:

// DOT NOTATION → simpler, cleaner, when the key name is normal
// Example:
const jsonData = {
  name: "Alice",
  age: 30,
  city: "NYC"
};

console.log(jsonData.name);  // "Alice"
console.log(jsonData.age);   // 30

// BRACKET NOTATION → more flexible, used for keys with spaces, special characters, or variables
// Example:
const jsonData2 = {
  "first name": "Bob",
  "age": 25,
  "user-id": 12345
};

console.log(jsonData2["first name"]);  // "Bob" (can't use dot with spaces)
console.log(jsonData2["age"]);         // 25
console.log(jsonData2["user-id"]);     // 12345 (can't use dot with hyphens)

// Using variables with bracket notation
const key = "name";
console.log(jsonData[key]);  // "Alice"

// MENTAL MODEL
// JSON = for data transfer; dot is convenient, bracket is flexible
