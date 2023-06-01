// JAVASCRIPT CLASSES LECTURE  NOTES 3/23/2023

let car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2004,
    color: "pink"
  }
  
//    class - keyword to declare a js class
//    class name uses PascalCase - first letter is capitalized and all subsequent words capitalized
  
//   recipeBook  RecipeBook
  
//   class + NameOfClass {
  
//   }
  
  class Car {
    constructor() {
      this.make = "Toyota",
      this.model = "Tacoma",
      this.year = 2004,
      this.color = "pink"
    }
  }
  
//   instantiation - creating an instance of a class(object)
//   new - reserved keyword allows to make a new object from the class
//   syntax:   let/const variable = new Class()
  
  let pinkCar = new Car()
  console.log(pinkCar)
  
  
  class Car {
    constructor(makeString, modelString, yearNumber, colorString) {
      this.make = makeString,
      this.model = modelString,
      this.year = yearNumber,
      this.color = colorString
    }
  }
  
  let myDreamCar = new Car(2023,"Silver","Porsche", "Boxter",  )
  Car { make: 'Porsche', model: 'Boxter', year: 2023, color: 'Silver' }
  
  let myDreamCar = new Car(2023,"Silver","Porsche", "Boxter",  )
  Car { make: 2023, model: 'Silver', year: 'Porsche', color: 'Boxter' }
  console.log(myDreamCar)
  
  console.log(yourDreamCar)
  Car { make: 'Audi', model: 'S4', year: 2023, color: 'Navy' }
  
  
  
  class Car {
    constructor(makeString, modelString, yearNumber, colorString) {
      this.make = makeString,
      this.model = modelString,
      this.year = yearNumber,
      this.color = colorString,
      this.isOperational = true
    }
    carBoasting() {
      return `My ${this.make} ${this.model} is super cool!`
    }
    brokeDown() {
      this.isOperational = false
    }
  
  }
  
  let yourDreamCar = new Car("Audi", "S4", 2023, "Navy")
  
  console.log(yourDreamCar.carBoasting())
  // My Audi S4 is super cool!
  console.log(yourDreamCar)
  
  console.log(yourDreamCar.brokeDown())
  console.log(yourDreamCar)

  //////////////////////////////////

  // Javascript Classes lecture notes

// let Car = {
//     make: "Toyota",
//     model: "Tacoma",
//     year: 2004,
//     color: "Pink"
// }

// vocabulary

    //class // - is a keyword to declare a javascript class

    // class name uses PascaleCase --> firs tletter is capitalized and all subsequent words capitalized

    //constructor() {} is used to create a  

    // instantiation --> creating an istance of a class(object) 

    // new keyword allows you to make a new object from the class --> let/const variableName = new class()

   
/////////////////////////////////////////

//Syntax

// class + NameOfClass {

// }

// class Car {
//     constructor() {
//         this.make = "Toyota",
//         this.model = "Tacoma",
//         this.year = 2004,
//         this.color = "Pink"
//     } 
// }

//////////////////////////////////////

// instantiation hard coded



// let pinkCar = new Car()
// console.log(pinkCar)

//output  Car { make: 'Toyota', model: 'Tacoma', year: 2004, color: 'Pink' }

///////////////////////////////////////

// instantiation dynamic coded

// class Car {
//     constructor(makeString, modelString, yearNumber, colorString) {
//         this.make = makeString,
//         this.model = modelString,
//         this.year = yearNumber,
//         this.color = colorString
//     } 
// }

// let myDreamCar = new Car("Porsche", "Boxter", 2023, "Silver")
// // console.log(myDreamCar)

// //output: Car { make: 'Porsche', model: 'Boxter', year: 2023, color: 'Silver' }

// let yourDreamCar = new Car("Audi", "S4", 2023, "Navy")
// console.log(yourDreamCar)

//output: Car { make: 'Audi', model: 'S4', year: 2023, color: 'Navy' }

//////////////////////////////////////////////////////


// class Car {
//     constructor(makeString, modelString, yearNumber, colorString) {
//         this.make = makeString,
//         this.model = modelString,
//         this.year = yearNumber,
//         this.color = colorString,
//         this.isOperational = true
//     } 
// }

// carBoasting() {
//     return `My ${this.make} ${this.model} is super cool!`
// }
// brokeDown( {
//     this.isOperational = false
// })


// let yourDreamCar = new car("Audi", "S4", 2023, "Navy")
// console.log(yourDreamCar.carBoasting())
// //output: My Audi S4 is super cool!

// console.log(yourDreamCar)

// console.log(yourDreamCar.brokeDown())
// console.log(yourDreamCar)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

let Car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2004,
    color: "Pink"
}


class Coffee { 
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

let myCoffee1 = new Coffee("black", 1, 1)
console.log(myCoffee1)

let myCoffee2 = new Coffee("LATTE", 2 , 3)
console.log(myCoffee2)

console.log(myCoffee1.coffeeProfile())

// let myCoffee1 = new

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
