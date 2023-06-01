// JAVASCRIPT LOOPS BRAVO 3/16/2023

// Interation:  repeating action over and over a certain number of time again until condition is met 

// Scope and Variable Declarations
// - Scope
// 1. Global - accessed/seen anywhere in the program
// 2. Local (aka block scope)- ony available inside block in which it's defined

// - variable
// var - global 
// let - local scope, can be assigned but not redeclared
// const - global cannot be reassigned OR redeclared

// if(true) {
//   var myName = "Trish"
//   // console.log(myName) // this will work
// }
// if(true) {
//   var myName = "Trish"
// }
// console.log(myName) //this will work

// if(true) {
//   let myName = "Trish"
//   console.log(myName) // 
// }

let myCat = "Geppetto"
// console.log(myCat)

myCat = "Kevin"
// console.log(myCat)

const yourName = "Sam"
// console.log(yourName)  // "Sam"

// yourName = "Apple"
// console.log(yourName)

// --------------------------

// FOR LOOP

// To set up for loop:
//  1. where to start counting
//  2. where to stop counting
//  3. how to get from the start to the stop (increment)

//  index as the variable (i)

//  1. let index=0  (i=0)
//  2. let index < 10 (i<10)
//  3. index = index + 1  (i++)


let numsArray = [3, 5, 11, 4, 2, 1]
// console.log(numsArray.length) //  output --> 6

for(let i=0;i<numsArray.length;i++) {
  //  console.log("index: ", i, "value: ", numsArray[i])
}
// output:
// index:  0 value:  3
// index:  1 value:  5
// index:  2 value:  11
// index:  3 value:  4
// index:  4 value:  2
// index:  5 value:  1

numsArray[2]

 let nameArray = ["James", "Valeria", "DeMario", "Evelyn"]
 
 for(let i=0; i<nameArray.length; i++) {
  //  console.log(nameArray[i])
 }
//  James
//  Valeria
//  DeMario
//  Evelyn

for(let i=1; i<10; i++) {
  console.log(i)
}

const nArray = [4, 11, 1, 3, "a", 42]

for(let i=0; i<nArray.length; i++) {
  if(nArray[i] % 2 === 0) {
    console.log(`${nArray[i]} is an even number!`)
  } else if(nArray[i] % 2 !== 0){
    console.log(`${nArray[i]} is an odd number!`)
  } else {
    console.log("Hey, that doesn't work here")
  }
}

// final output:
// 4 is an even number!
// 11 is an odd number!
// 1 is an odd number!
// 3 is an odd number!
// 9 is an odd number!
// 42 is an even number!


// string interpolation syntax: `${variableName}`