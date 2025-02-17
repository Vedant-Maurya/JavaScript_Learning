// Primitive Dataypes

// 7th types => string, number, boolean, null, undefined, bigInt, symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 14974981249545


// Reference (Non Primitive)

// Array, Objects, Functions


const heros = ["Ram", "Shyan", "Sita"]      // => Array examples

let myObject = {                            //  => Object examples
    naam: "Rohit",
    age: 22,
}

const myFunction = function(){              // function examples
    console.log("Hello World");

}

console.log(typeof(myFunction));
// console.table(typeof(bigNumber,myFunction,heros));












//********************Memory Summary**********************/

// Stack (Primitive), Heap (Non-Primitive)

//  Stack => and stack only cover the string, number, booleans and those types of datatypes and its give me copy of the data 

let myYoutubename  ="hiteshchoudhary.com"

let anothername = myYoutubename
anothername = "Chaiaurcode"

console.log(myYoutubename);
console.log(anothername);



//  heap => and heap cover the object, array, and those of data types but is not give copy its give the originally value

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo =  userOne

userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
















