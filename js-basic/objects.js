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


/* ========================================
   JSON.stringify()
   ======================================== */
// When you use it:
// When you want to send or store data (APIs, localStorage, files, network).

// Example:
const user = { name: "John", age: 30 };
const jsonString = JSON.stringify(user);

// What happens:
// JS object (can't be sent easily) → JSON string (can be sent/stored)

// Optional extras (good to know, not mandatory):
// - Replacer: choose which properties to include
// - Spacer: makes JSON readable (pretty-print)
// Note: You usually don't need these for exams, just know they exist.


/* ========================================
   JSON.parse()
   ======================================== */
// When you use it:
// When you receive JSON data and want to work with it in JavaScript.

// Example:
const jsonString2 = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString2);

console.log(obj.name);  // "John"
console.log(obj.age);   // 30

// What happens:
// JSON string (can't access properties easily) → JS object (obj.name, obj.age work)


/* ========================================
   MEMORY TRICK
   ======================================== */
// Stringify = send/store
// Parse = receive/use

/* ========================================
   FINAL OVERVIEW: OBJECT BASICS
   ======================================== */

// DEFINITION OF AN OBJECT
// An object is a data structure made up of properties.
// A property consists of a key and a value.
// Access data using dot notation or bracket notation.

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person.name);        // Alice
console.log(person["name"]);     // Alice


// SETTING PROPERTIES OF AN EXISTING OBJECT
// Use dot notation or bracket notation with the assignment operator.

const person2 = {
  name: "Alice",
  age: 30
};

person2.job = "Engineer";
person2["hobby"] = "Knitting";
console.log(person2); // {name: 'Alice', age: 30, job: 'Engineer', hobby: 'Knitting'}


// REMOVING PROPERTIES FROM AN OBJECT
// Use the delete operator to remove a property.

const person3 = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person3.job;
console.log(person3.job); // undefined


// CHECKING IF AN OBJECT HAS A PROPERTY
// Method 1: hasOwnProperty() - returns boolean

const person4 = {
  name: "Alice",
  age: 30
};

console.log(person4.hasOwnProperty("name")); // true
console.log(person4.hasOwnProperty("job")); // false

// Method 2: in operator - returns true if property exists

const person5 = {
  name: "Bob",
  age: 25
};

console.log("name" in person5); // true


// ACCESSING PROPERTIES FROM NESTED OBJECTS
// Chain dot notation or bracket notation to drill down.

const person6 = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person6.contact.phone.work); // "098-765-4321"


// PRIMITIVE vs NON-PRIMITIVE DATA TYPES RECAP
// Primitives: numbers, strings, booleans, null, undefined, symbols
//   - Single values
//   - Not objects
//   - Immutable (value cannot be changed after creation)
// Non-Primitives: objects, arrays, functions
//   - Can hold multiple values
//   - Objects themselves
//   - Can have properties and methods


// OBJECT METHODS
// Definition: Functions associated with an object
// The 'this' keyword refers to the object itself

const person7 = {
  name: "Bob",
  age: 30,
  sayHello: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person7.sayHello()); // "Hello, my name is Bob"


// OBJECT CONSTRUCTOR
// Definition: A special function used to create and initialize objects
// Invoked with the 'new' keyword
// The Object() constructor creates a new empty object.

const emptyObj = new Object();


// OPTIONAL CHAINING OPERATOR (?.)
// Definition: Safely access object properties or call methods
// without worrying whether they exist

const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user.profile?.address?.street); // "123 Main St"
console.log(user.profile?.phone?.number);   // undefined


// OBJECT DESTRUCTURING
// Definition: Extract values from objects and assign to variables
// More concise and readable way

const person8 = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person8;

console.log(name); // Alice
console.log(age);  // 30


// WORKING WITH JSON
// JSON = JavaScript Object Notation
// Lightweight, text-based data format for exchanging data

// JSON Example
const jsonExample = {
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
};


// JSON.stringify(): Convert JS object to JSON string
// Useful for storing or transmitting data

const user2 = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString3 = JSON.stringify(user2);
console.log(jsonString3); // '{"name":"John","age":30,"isAdmin":true}'


// JSON.parse(): Convert JSON string back to JS object
// Useful when retrieving data from servers or localStorage

const jsonString4 = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString4);

// Result: { name: 'John', age: 30, isAdmin: true }
console.log(userObject);