// Javascript Intro Lecture Notes 3/15/2023 

// CMD + '/' comments out Code 

// Technically, JS is
//  - dynamically typed
//  - interpreted language
//  - scripting language 

//   console.log() - built-in method that prints out the evaluation of what's between the parentheses

// ------

//  Data types - how JS is broken down

//  Primitive Data Types:
// Numbers
// Booleans
// Strings
// Undefined
// Null
// Symbol

// --------------
//  NUMBERS
//  Integers
//  Floats - decimals or fractions

  // perform math: add, subtract, multiply, divide, and modulo

  console.log(5 + 3) // 8
  console.log (5 / 3) // 1.6666666666666667 (float)

  // Modulo the percent sign % - divides numerator by denominator  displays the remainder

  console.log(6 % 2)  // 0   6 / 2 = 3 with no remainder, so the output is 0
  console.log(5 % 2) // 1  5 / 2 = 2 with a remainder of 1, so the output is 1

//  -----------------
// STRINGS - text that is defined and wrapped by quotes
//  can use double or single quotes - be consistent

// console.log(hello world)  - this will throw an error

console.log("hello world")
console.log('hello world')

console.log("A")
console.log("This is a beautiful day to learn JavaScript")
console.log("42")

//  String concatenation
//  Combines multiple strings

console.log("Hello" + "World") // HelloWorld
console.log("Hello " + "World") // Hello World

console.log("36" + 36) // 3636 - converts number 36 to a string and then concats the strings 

// type coercion - force-changes data type to fulfill process

console.log("36 + 36 = ", 36 + 36) // 36 + 36 = 72

// --------------------

// BOOLEANS
//  - true or false values 

console.log(true) // true
console.log(false) // false

// ------------------

// Undefined - declared value that has not yet been assigned
var name
console.log(name)

// Null - has no value

// Symbol - used for accessing keys in a JS object 

// --------------------

// Variables
  // var - global variable, it can be reassigned
  // preferred variable declaration are let and const

  //  let - can be reassigned
  //  const - cannot be reassigned

  // Name variable  - use descriptive names in camelCase

  // Assignment operator - single equal sign, assigns value to varible

  // Assigned value - value used when variable is called

  var myFavoriteNumber = 42 
  console.log(myFavoriteNumber) // 42
  console.log(myFavoriteNumber + 10) // 
  console.log(myFavoriteNumber) // 42


  //  reassigning variables
  myFavoriteNumber = 15
  console.log(myFavoriteNumber)

  var yourFavoriteNumber = 18
  console.log(myFavoriteNumber + yourFavoriteNumber) // 33

  // String Properties and Built-in Methods

  var message = "Hello Bravo!"

  // length property - tells us how many characters the value of the variable is
  console.log(message.length)

  //  index - tells us the location of each character with the string - returns a value
  //  Computer use zero- indexing so the first character starts at 0
  //  To access a character at specific index we use BRACKET NOTATION

  console.log(message[0]) //  H
  console.log(message[7]) // r
  console.log(message[5]) // 

  //  charAt() - return value at a specific index
   console.log(message.charAt(4)) // 

  //  includes() - checks for subset of characters and returns a Boolean
   console.log(message.includes("lo")) // true
   console.log(message.includes("Lo")) // false
   console.log(message.includes("fo")) // false

  //  slice() - returns a subset of characters. Takes 2 arguments: start index of subset, end index of subset

  console.log(message.slice(0, 5))


  



  


















  

