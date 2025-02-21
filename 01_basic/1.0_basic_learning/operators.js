// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Ternary Operator
// 7. Type Operators
// 8. Spread & Rest Operators
// 9. Nullish Coalescing Operator (??)
// 10. Optional Chaining Operator (?.)

//********************************************** Arithmetic Operators **************************************************************//
// 1. Arithmetic Operators (Math operations)
// 📌 Definition: Arithmetic operators perform basic math operations like addition, subtraction, multiplication, and division.


const a = 10;
const b = 5;

console.log(a + b);  // Addition: 15
console.log(a - b);  // Subtraction: 5
console.log(a * b);  // Multiplication: 50
console.log(a / b);  // Division: 2
console.log(a % b);  // Modulus: 0
console.log(a ** b); // Exponentiation: 100000


//************************************************ Assigment Operators ************************************************************//
// 2. Assignment Operators  (Assign values)
// 📌 Definition: Assignment operators assign values to variables.

let x = 10;
x += 5;  // x = x + 5
console.log(x); // 15

x -= 2;  // x = x - 2
console.log(x); // 13

x *= 2;  // x = x * 2
console.log(x); // 26

x /= 2;  // x = x / 2
console.log(x); // 13

x %= 3;  // x = x % 3
console.log(x); // 1

x **= 2; // x = x ** 2
console.log(x); // 1

//************************************************ Comparison Operators ***************************************************************//
// 3. Comparison Operators (Compare values)
// 📌 Definition: These operators compare values and return true or false.

const p = 20;
const q = 10;

console.log(p > q);   // true
console.log(p < q);   // false
console.log(p >= q);  // true
console.log(p <= q);  // false
console.log(p == q);  // false (checks value)
console.log(p === q); // false (checks value & type)
console.log(p != q);  // true
console.log(p !== q); // true


//*********************************************** Logical Operators *******************************************************************//
// 4. Logical Operators (Combine conditions)
// 📌 Definition: These operators are used to combine multiple conditions.

const r = true;
const s = false;

console.log(r && s); // false (AND)
console.log(r || s); // true (OR)
console.log(!r);     // false (NOT)
console.log(!s);     // true


//************************************************ Bitwise Operators ****************************************************************//
// 5. Bitwise Operators

const num1 = 5;  // 0101 in binary
const num2 = 3;  // 0011 in binary

console.log(num1 & num2); // AND -> 0001 (1)
console.log(num1 | num2); // OR  -> 0111 (7)
console.log(num1 ^ num2); // XOR -> 0110 (6)
console.log(~num1);       // NOT -> 1010 (-6)
console.log(num1 << 1);   // Left shift -> 1010 (10)
console.log(num1 >> 1);   // Right shift -> 0010 (2)


//************************************************ Ternary Operators *****************************************************************//
// 6. Ternary Operator (Short if-else)
// 📌 Definition: A shorthand way to write if-else statements

const age = 18;
const status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult



//****************************************** Type Operators **********************************************************************//
// 7. Type Operators (Check variable type)
// 📌 Definition: Used to check the type of a variable.


console.log(typeof "Hello");  // string
console.log(typeof 10);       // number
console.log(typeof true);     // boolean
console.log(typeof {});       // object
console.log(typeof []);       // object (array)
console.log(typeof function(){}); // function
console.log(typeof null);     // object (special case)
console.log(typeof undefined);// undefined


//******************************************* Spread and Rest Operators ****************************************************//
// 8. Spread & Rest Operators (...) (Used to expand arrays & objects)
// 📌 Definition: Used to copy or merge arrays/objects.


let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]

