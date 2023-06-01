//JavaScript Arrays 3/16/2023

//Vocabulary

      /*Array - data types that holds sets of information, non-primitive defined by square brackets []*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Examples

//Find length of array

[4, 5, 6, "hello", true, "yo!"] // array
[4, 5, 6, "hello", true, "yo!"].length // number

[4, 5, 6, "hello", true, "yo!"]

console.log([].length)
//--> 0

console.log([3].length)
//--> 1

console.log([4, 5, 6, "hello", true, "yo!"].length)
//--> 6

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Find value at index.  

let myArray = [4, 5, 6, "hello", true, "yo!"]

console.log(myArray)
//-->[4, 5, 6, "hello", true, "yo!"]

console.log(myArray.length)
//-->6

console.log(myArray[0])
//--> 4

console.log(myArray[5])
//--> yo!

console.log(myArray[myArray.length - 1])
//--> yo!

console.log(myArray[100])
//--> undefined

///////////////////////////////////////////////////

//Reassign value at index

myArray[3] = "Hello Bravo class!"
console.log(myArray)
//--> [ 4, 5, 6, 'Hello Bravo class!', true, 'yo!' ]

//////////////////////////////////////////////////////

//.Push()

//takes an argument and adds the argument to the end of the array

let myArray = [4, 5, 6, "hello", true, "yo!"]

console.log("push:", myArray.push("hello world!"))
//--> push: 7

console.log(myArray)
//--> [ 4, 5, 6, 'hello', true, 'yo!', 'hello world!' ]

//////////////////////////////////////////////////////

//.Pop()

//removes the last item in the array

myArray.pop()
console.log(myArray)
//-->[4, 5, 6, "hello", true,]

//////////////////////////////////////////////////////

//.reverse() 

//reverses the order or the index

myArray.reverse()
console.log(myArray)
//--> [ 'yo!', true, 'hello', 6, 5, 4 ]

//////////////////////////////////////////////////////

//.slice()

//slice is an accessor that takes a portion of an array and returns a subset array.  Subset array needs to be assigned to a variable to accessed

console.log(myArray.slice(2, 4))
//--> [ 'hello', 6 ]


let subsetArray = myArray.slice(2, 4)
console.log("slice:", subsetArray)
//--> slice: [ 'hello', 6 ]

//////////////////////////////////////////////////////

//.join()

//join turns an array into a string data type

let myArray = [4, 5, 6, "hello", true, "yo!"]

console.log(myArray.join())
//--> 4,5,6,hello,true,yo!

console.log(myArray.join(""))
// --> 456hellotrueyo!

console.log(myArray.join("*"))
// --> 4*5*6*hello*true*yo!

//////////////////////////////////////////////////////

//Example

//reverse the order of the string

let bravo = "hello bravo class!"

console.log(bravo.split())
// --> [ 'hello bravo class!' ]

console.log(bravo.split().reverse())

console.log(bravo.split(""))
// --> ['h', 'e', 'l', 'l', 'o',' ', 'b', 'r', 'a', 'v','o', ' ', 'c', 'l', 'a','s', 's', '!']

console.log(bravo.split("").reverse())
// --> [ '!', 's', 's', 'a', 'l', 'c', ' ', 'o', 'v', 'a', 'r', 'b', ' ', 'o', 'l', 'l', 'e', 'h']

console.log(bravo.split("").reverse().join(""))
// --> !ssalc ovarb olleh
