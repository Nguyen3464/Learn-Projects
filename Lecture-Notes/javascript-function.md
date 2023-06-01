// JavaScript Functions 3/17/2023

// Functions - gives you control over when an action happens, functions are reusable

// encapsulation - code machine that has self contained logic, you can predict the output

// arrow function - a particular style of function that is the best way to write a function for our stack

// variable declaration
// function name - camelCase, communicate intent
// assignment operator
// function syntax - parentheses and arrow
// curly braces - wraps the executable code
// return
// function invocation

// functions are behavior

// const coffeeMaker = () => {
//   return "coffee is made"
// }

// console.log(coffeeMaker())
// --> undefined
// --> coffee is made
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())

// input - in the parentheses, variable called a parameter
// const coffeeMaker = (coffeeType) => {
//   return `${coffeeType} is made`
// }

// console.log(coffeeMaker())
// --> undefined is made
// console.log(coffeeMaker("latte"))
// --> latte is made
// console.log(coffeeMaker("espresso"))
// console.log(coffeeMaker("irish coffee"))
// console.log(coffeeType) --> error: coffeeType is not defined

// function with multiple parameters and arguments
// const coffeeMaker = (coffeeType, coffeeSize) => {
//   return `Your ${coffeeSize} ${coffeeType} is made`
// }
// // console.log(coffeeMaker("irish coffee"))
// --> Your undefined irish coffee is made
// console.log(coffeeMaker("irish coffee", "large"))
// let sizeSmall = "small"
// console.log(coffeeMaker("irish coffee", sizeSmall))
// one more level of abstraction
// --> Your small irish coffee is made
// passing in arguments to the function invocation assigns a value to the parameter

// pseudo code - writing out your code in plain english
// prompt: create a function that takes in a coffee type and coffee size and returns the price of the coffee based on the size
// small - 3, med - 4, large - 5
// conditional statement - if statement
// evaluation on the size - equality evaluation
// string interpolation on the return

// const coffeeMaker = (coffeeType, coffeeSize) => {
//   if (coffeeSize === "small") {
//     return `${coffeeType} is $3`
//   } else if (coffeeSize === "medium") {
//     return `${coffeeType} is $4`
//   } else if (coffeeSize === "large") {
//     return `${coffeeType} is $5`
//   } else {
//     return "Something went wrong"
//   }
// }
// let sizeSmall = "small"
// let sizeArray = ["small", "medium", "large"]
// console.log(coffeeMaker("irish coffee", sizeSmall))
// // --> irish coffee is $3
// console.log(coffeeMaker("irish coffee", sizeArray[1]))
// console.log(coffeeMaker("irish coffee", sizeArray[2]))
// console.log(coffeeMaker("irish coffee", "Small"))

const coffeeMaker = (coffeeType, coffeeSize) => {
  let coffeeSizeLower = coffeeSize.toLowerCase()
  if (coffeeSizeLower === "small") {
    return `${coffeeType} is $3`
  } else if (coffeeSizeLower === "medium") {
    return `${coffeeType} is $4`
  } else if (coffeeSizeLower === "large") {
    return `${coffeeType} is $5`
  } else {
    return "Something went wrong"
  }
}
let sizeArray = ["small", "medium", "large"]
console.log(coffeeMaker("irish coffee", "LARGE"))
console.log(coffeeMaker("irish coffee", "meDium"))
console.log(coffeeMaker("irish coffee", "SMall"))
