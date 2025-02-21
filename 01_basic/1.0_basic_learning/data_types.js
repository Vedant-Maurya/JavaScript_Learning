// 1️⃣ Number
// 2️⃣ String
// 3️⃣ Boolean
// 4️⃣ Undefined
// 5️⃣ Null
// 6️⃣ BigInt
// 7️⃣ Symbol
// 8️⃣ Object
// 9️⃣ Array (Special type of Object)
// 🔟 Function (Special type of Object)


//************************************************** Number ***********************************************************************//
// 1️⃣ Number (for numbers)
// Used for integers and floating-point numbers.

const age = 25;   // Integer
const price = 99.99;   // Decimal number
// console.log(age, price);
// console.log(typeof(age));

//**************************************************** String *********************************************************************//
// 2️⃣ String (for text)
// Used for text (written inside quotes).

const name = "John";
const greeting = 'Hello, World!';
// console.log(name, greeting);
// console.log(typeof(name));

//****************************************************** Boolean *******************************************************************//
// 3️⃣ Boolean (true or false)
// Stores true or false.

const isLoggedIn = true;
const isRaining = false;
// console.log(isLoggedIn, isRaining);
// console.log(typeof(isLoggedIn));

//******************************************************* Undefined ******************************************************************//
// 4️⃣ Undefined (no value assigned)
// A variable declared but not assigned a value.

let myVar;
// console.log(myVar);  // undefined
// console.log(typeof(myVar));

//********************************************************* Null ****************************************************************//
// 5️⃣ Null (empty value)
// Represents an empty or unknown value.

const emptyValue = null;
// console.log(emptyValue);
// console.log(typeof(emptyValue));


//******************************************************** BigInt *****************************************************************//
// 6️⃣ BigInt (for very large numbers)
// Used for very large numbers.

const bigNumber = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(typeof(bigNumber));

//********************************************************** Symbol ***************************************************************//
// 7️⃣ Symbol (for unique values)
// Creates a unique value.

const uniqueId = Symbol("id");
// console.log(uniqueId);
// console.log(typeof(uniqueId))


//********************************************************* Object ****************************************************************//
// 8️⃣ Object (stores multiple values)
// Stores key-value pairs.

const person = {
    name: "Alice",
    age: 22
};
// console.log(person.name, person.age);
// console.log(typeof(person));


//******************************************************** Array *****************************************************************//
// 9️⃣ Array (list of values)
// Stores multiple values in a list.

const fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits[0]);  // Apple
// console.log(fruits[1]);  // Mango
// console.log(fruits[2]);  // Banana

// console.log(typeof(fruits));


//********************************************************* Function ****************************************************************//
// 🔟 Function (for reusable code)
// Stores reusable code blocks.

function greet() {
    // console.log("Hello, JavaScript!");
}
greet();
// console.log(typeof(greet));
