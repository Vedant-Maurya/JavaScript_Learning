// var, let and const is basically used to define the variables  name 

//**************************************************** var explain *******************************************************************//

// var => Can be re-declared and updated.

var name = "Ram";  
// console.log(name); // Output: Ram

var name = "Shyam"; // Re-declared (Allowed)
// console.log(name); // Output: Shyam

name = "Mohan"; // Updated (Allowed)
// console.log(name); // Output: Mohan


//****************************************************** let explain *****************************************************************//

// let => Can be updated allowed but not re-declared allowed [ You can change (update) but cannot declare again in the same place ] 


let age = 25;
// console.log(age); // Output: 25


// let age = 35;   // Re-declared (NOT-ALLOWED)
// console.log(age);       // Output: errors


age = 30; // Updated (Allowed)
// console.log(age); // Output: 30

// let age = 35; ❌ Error: Cannot re-declare 'age' in the same scope


//****************************************************** const explain ***************************************************************//


// const ( Constant values, cannot change ) => Cannot be allowed re-declared or updated.


const pi = 3.14;
console.log(pi); // Output: 3.14

// pi = 3.14159; ❌ Error: Cannot update a 'const' variable

// const pi; ❌ Error: Must be initialized


//***********************************************************************************************************************//