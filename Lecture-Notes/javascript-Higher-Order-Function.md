// Higher Order Functions 3/20/2023

  // Syntactical Sugar - large concepts of code in easy to use syntax.  Does the heavy-lifting so we don't have to

  //  HIGHER ORDER FUNCTIONS (HOFs)
      // - a function that takes a function as an argument
      // - used by calling built-in methods
      //  - more efficient that for loops
      // BUT used in very specific circumstances

    //  .forEach(), .map(), .filter()  - specifically ARRAY methods

   // REMEMBER THIS: there are THREE BASIC PARAMETERS IN HOFs  - ORDER IS IMPORTANT
        // - value (required)
        // - index
        // - array
    
    // .forEach 
    // - execute action ONCE per item in the array
    // - take anonymous function as argument
    // - cannot designate start and stop, it loops through the whole array
    // - cant not pull a return value to extract data

    const showsArray = [ "Mayor of Kingstown", "Ted Lasso", "Your Honor", "You", "Married at First Sight", "The Last of Us"]
    const numsArray = [5, 8, 15, 36, 42]

    // showsArray.forEach(() => {
    //   console.log("Hello Bravo");
    // })
      
      // The anonymous function also takes an argument
      
      // - "value" is required
      // - value of the element at the current index ex. showsArray[0] value = Mayors of Kingstown
      //  - showArray[i] values at i

      // anonymous function can take a second argument - "index"
      // - current index in iteration (index of array

      //  It can take a THIRD argument - "array"

      // showsArray.forEach((value) => {
      //   console.log(`You like the show ${value}`)
      // })
      
      // showsArray.forEach((value, index) => {
      //   console.log(`You like the show ${value}. It's index is ${index}`)
      // })

      showsArray.forEach((value, index, array) => {
        console.log(`You like the show ${value}. It's index is ${index} in the array that contains ${array}`)
      })

        // numsArray.forEach((hippo, tiger, lemon) => {
        //   console.log("value: ", hippo)
        //   console.log("index: ", tiger)
        //   console.log("array: ", lemon)
        // })

        // .forEach doesn't return anything. 
        // no way to stop or break a forEach() loop other than by throwing an exception.  If you need to do stop/break the loop, than .forEach is the wrong tool.
//
        // Map
        // - iterates over each element and returns A NEW ARRAY THAT HAS THE SAME LENGTH OF THE ORIGINAL ARRAY
        //  - we must assign our map statement to a new variable
        // - great for transforming or displaying each of the values in an array

        // const numberArray = [1, 2, 3, 4]

        // // const multiplyBeThree = numberArray.map((value )=> {
        // //   return value * 3
        // // })
        
        // const multiplyBeThree = numberArray.map(value => value * 3)
        // // console.log(multiplyBeThree)

        // const numsArray = [5, 8, 15, 36, 42]

        // const anyArray = [ 3, 678, -92, 57]

        // const evenOrOdd = (array) => {
        //   return array.map((value) => {
        //     if(value % 2 === 0) {
        //       return "even"
        //     } else if(value % 2 !== 0) {
        //       return "odd"
        //     } else {
        //       return "oops! something went wrong!"
        //     }
        //   })
        // }
        // // console.log(evenOrOdd(numsArray))
        // // console.log(evenOrOdd(anyArray))


        // // FILTER

        // // It returns a new array that is a subset of the original array based on condition 
        // // has built-in IF statement

        // const showsArray = [ "Mayor of Kingstown", "Ted Lasso", "Your Honor", "You", "Married at First Sight", "The Last of Us"]

        // const searchT = showsArray.filter(value => {
        //   return value.includes("t") || value.includes("T")
        // })

        // // console.log(searchT)

        // // Prompt:  Create a function that takes in an array of mixed data and returns an array of only odd numbers

        // const mixedDataArray = [3, "hi", true, "yo", 42, null, "Bravo", false, 15 ]

        // // Pseudocode

        // // create a function named onlyOdds
        // // Parameter is an array of mixed data types
        // // evaluate data type of each element  --> typeof 
        // //create a new variable that will hold numbers 
        // // use filter to get out odds
        // // return the final variable


        // const onlyOdds = (array) => {
        //   let numbers = array.filter((value) => {
        //     return typeof value === "number"
        //   })
        //   let odds = numbers.filter(value => {
        //     return value % 2 !== 0
        //   })
        //   return odds
        // }
        // console.log(onlyOdds(mixedDataArray))

        // //  REFACTOR:
        // const onlyOdds2 = (array) => {
        //   let odds = array.filter(value => typeof value === "number"  && value % 2 !== 0)
        //   return odds
        // }

        // console.log(onlyOdds2(mixedDataArray))