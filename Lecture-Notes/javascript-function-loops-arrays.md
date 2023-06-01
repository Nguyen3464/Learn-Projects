// JavaScript Functions Loops and Arrays! 3/20/2023



console.log(["hello", "yo"][0].toUpperCase())
// --> HELLO
console.log(["hello", "yo"][1].toUpperCase())
// --> YO

for (let index = 0; index < 10; index = index + 1)
for (let index = 0; index < 10; index++) {
  console.log(index)
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

const myArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(myArray.length) // data type - number

for (let index = 0; index < myArray.length; index++) {
  console.log(myArray[index] * 5)
}

// functions

// parameter - the variable that belongs to the function
// string interpolation - allows you to drop JS variables into text
// const coffeeMaker = (coffeeType) => {
//   return `Your ${coffeeType} is ready!`
// }
// call, invoke, create a function invocation
// console.log(coffeeMaker("americano"))
// argument - give a value to the parameter
// --> Your undefined is ready!

const coffeeOrder1 = ["americano", "black coffee", "hot chocolate", "espresso"]
const coffeeOrder2 = ["breve", "best drink ever", "cappuccino", "flat white"]

// lists or collections - array
// each, every - iteration

// prompt: create a function that takes in a list of coffee orders and return a list of the coffee order with a pleasant statement
// input - array
// iteration, for loop
// string interpolation
// output - array of strings

// just one order, not working yet:
// const coffeeMaker = (array) => {
//   for (let index = 0; index < array.length; index++) {
//     return `Your ${array[index]} is ready!`
//   }
// }
// console.log(coffeeMaker(coffeeOrder1))
// --> Your americano is ready!

const coffeeMaker = (array) => {
  let coffeeOrderList = [] // storage for our for loop output
  for (let index = 0; index < array.length; index++) {
    coffeeOrderList.push(`Your ${array[index]} is ready!`)
  }
  return coffeeOrderList
}
console.log(coffeeMaker(coffeeOrder1))
// --> [ 'Your americano is ready!', 'Your black coffee is ready!', 'Your hot chocolate is ready!', 'Your espresso is ready!' ]
console.log(coffeeMaker(coffeeOrder2))
