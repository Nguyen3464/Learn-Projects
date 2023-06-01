//Javascript Conditionals 3/15/23 Bravo

//Vocabulary

      /*Conditionals also known as decision trees, if/else statements, conditional statements.  They allow the code to determine the outcome of an evaluation based on a true or false value
      two elements are needed --> a condition and code block

      Boolean - true or false value

      Conditions can be created by three categories of operators
        
            Equality operators - Are these values the same?
                  == loose, looks only at the value
                  console.log(42 == 42) //output: true
                  console.log(42 == "42")  //output: true
                  === strict, looks both the value and datatype, best practice
                  console.log(42 === 42) //output: true
                  console.log(42 === "42")  //output: false
                  !== strictly not equal to
                  console.log(42 !== 42) //Output: false
                  console.log(42 !== 22) //Output: true

            Logical operators - Are these evaluations the same?
                  && And
                  all conditions have to be true to get a true value
                  console.log(42 === 42 && "Charlean".length === 8) //output: true
                  if any condition is false, the output will be false
                  console.log(42 === 42 && "Charlean".length === 7) //output: false

                  || Or
                  only requires one condition to be true to get a true output
                  console.log(42 === 42 || "Charlean".length === 7) //output: true
                  console.log("Charlean".length === 7 || 42 === 42 )  //output: true

                  ! Bang operator, Not, Negation, Opposite
                  console.log("Charlean".length === 7 || !(42 === 42) ) //Output: false
                  console.log("Charlean".length === 7) //Output: false
                  console.log(42 === 42) //Output: true
                  console.log(!42 === 42) //Output: false

            Relational operators - arithmetic evaluations
                  > greater than
                  < less than
                  >= greater than or equal to
                  <= less than or equal to
                  let favNum = 18
                  let myName = "Borja"
                  console.log(favNum > 2*10) //output: false
                  console.log(favNum > myName.length + 13) //output: false
                  console.log(favNum >= myName.length + 13) //output: true */

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Conditional Statement Structure

            
      if (conditionCheck) {
        //code block that contains the action to take
      } else if (conditionCheck) {
        //code block that contains the action to take. This keyword that allows you to provide additional conditional statements
      } else { 
        //code block that contains the action to take. This is thecatchall, if all other conditions are false, else will produce a default output
      }           

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Example

      let joke = "bees"

      joke = "school"

      joke = "stairs"

      if (joke === "bees") {
        console.log("🤔 Can bees fly in the rain? 🤪 Not without their yellow jackets.")
      } else if (joke === "school") {
        console.log("Luke comes home from his first day of school, and his mother asks, “What did you learn today? 'Not enough,' Luke replies. 🤔 They said I have to go back tomorrow. 🤪 ")
      } else {
        console.log("I don't trust stairs. They're always up to something.")
      }
  
          

