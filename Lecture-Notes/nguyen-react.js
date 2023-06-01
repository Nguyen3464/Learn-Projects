///////////////////////////////////////////////////////////////////////////

// React 03/24/2023

//Learning Objectives

// Vocabulary

    // React: Javacript library for building user interfaces (UI)
        // React is popular because of the following feature:
            // component based
            // reuseable
            // scalable
            // user interfaces
        
    // Javascript libray a collection of code snippets and dependencies to preform task on a JS application

    // UI: how the user interacts with an application

    // Document Object Model (DOM): is the visual representation of the html elements on the browser
        // DOM orginizes the html elements into a node-tree 
    
    //JSX javascript html hybrid 

///////////////////////////////////////////////////////////////////////////

// can reproduce the basic structure of a function-based React component

    // copy code block probided in syllabus

///////////////////////////////////////////////////////////////////////////

// can describe a component

    // syntax in html that allows JScode to be nested in html file
    // ```js
    // const App =() => {
    //    return <h1>Hello World</h1>
    // }
    // ```

    //a function that returns JSX to the UI 
    // react components use PascalCase naming convention

///////////////////////////////////////////////////////////////////////////

// can define JSX

    //Javascript synax extension which allows html syntax and have the functionality of JS
        // Hybrid between html and JS
        // to add additional elements in the return:
        // () and <></> around the JSX elements
        // React fragments: <> </>, empty angle brackets ```js ---> for markdown files

    /*<script type="text/babel">
        const App = () => {
            return(
                <>
                    <h1>Bravo Jams</h1>            
                    <h3>Enjoy these sweet beats</h3>    
                </>
            )
        }
    </script>*/

///////////////////////////////////////////////////////////////////////////

// can demonstrate the process of setting up a basic function-based React component

        // song component
            // "Angel" by Lalah Hathway
            // "I Will Always Love you" by Whitney Huston
            //"Killing Me Softly" by the Fugees
            //"All Along the Watchtower" by Jimi Hendrix
        
        // footer component
            // "Don't forget your tea"

        <script type="text/babel">
            const App = () => {
                return(
                    <>
                        <h1>Bravo Jams</h1>            
                        <h3>Enjoy these sweet beats</h3>    
                        <Song />
                        <Footer /> //react can only send one component, so you need to use a "component call" to chain your components to the main App component to send to the UI
                    </>
                )
            }

            const Song = () => {
                return(
                    <>
                    <ul>
                        <li>"Angel" by Lalah Hathway</li>
                        <li>"I Will Always Love you" by Whitney Huston</li>
                        <li>"Killing Me Softly" by the Fugees</li>
                        <li>"All Along the Watchtower" by Jimi Hendrix</li>
                    </ul>
                    </>
                )
            }
            const Footer = () => {
                return(
                    <>
                        <footer>Dont forget you tea.</footer>
                    </>
                )
                
            }
        </script>
//////////////////////////////////////////////////////////////////////////

// Create a react application using yarn

// yarn will be package manager for react javascript applications

// in terminal $ yarn create react-app react-lecture-app using kabob case naming conventions

// cd into react application directory 

// react app notes are stored in react-lecture-app README.md file

// Two additional directories
    // public has the index.html file
    // src has the App.js

//////////////////////////////////////////////////////////////////////////

// Render the react application

// $ yarn start
    // terminal will act as a server: allows the local computer to process and render the application in the browser
    // yarn start will open browser page  running react framework
    // terminal will change to a server
    // command + t to open up new terminal tab to run git commands, and yarn commands

//////////////////////////////////////////////////////////////////////////

// inside src tab: App.js is where the app components will be built

// Basic component  format

// import the dependencies needed for the component
import React from "react"

// basic functional component declaration
const App = () => {
    return(
        <>
            <h1>Bravo Soup List</h1>
            <h3>Prepare your spoons and get your napkins ready</h3>
        </>
    )
}

// export so the functional component can be rendered in browser
export default App

//////////////////////////////////////////////////////////////////////////

// additional components will be segregated on individual component directory

// create a components folder under the src directory
    // in the explorer
        // src
            // components
                // Header.js
                    // 

// create a file to store functional component: best practice is to have the same names for both 

// import the component onto Apps.js with its relative path
// "src./components/Header" --> change "./component/Header"
    // tells the package manager too see the header is in the same folder under src directory

import React from "react"
import Header from "./component/Header"
import Soups from "./component/Soups"

const App = () => {
    return(
        <>
            <Header />
            <Soups />
        </>
    )
}

const Header = () => {
    return(
        <>
            <h1>Bravo Soup List</h1>
            <h3>Prepare your spoons and get your napkins ready</h3>
        </>
    )
}

const Soups = () => {
    return(
        <>
            <ul>
                <li>Frosted Flakes</li>
                <li>Alphabet Soup</li>
                <li>Albondigas</li>
            </ul>
        </>
    )
}

export default App

///////////////////////////////////////////////////////////////////////////////////////////////////

// // React State

// // React State is a special variagble that stores data, that determines how the component will render to the user interface and adds UI behavior
//     //acts as a memory for when variables are expected to be changed through user interactions

// // cd into the react-challenges repository

// // Create a new branch: state-initials1-initials2 (ex. state-aw-sp)

// // Create a new React application with no spaces: yarn create react-app state-student1-student2 (ex. yarn create react-app state-austin-sarah)

// // cd into the project

// // Open the project in a text editor

// // Create a directory in src called components

// // 1.) will start with a basic functional component on Apps.js with a heading tag and a paragraph tag to display the joke

// // 2.) create a defult joke that appears when the webpage renders

// // react hooks: are a special function that allows components to have access to React features like state
//         // To add react state : inport a react hook called useState : react hooks that returns value
//             // state variables, 
//             // setter state function
//             // also gives an initial value for the state variable
                        
// // array destructurimg values from usestate

//     const [joke, setJoke] = useState("Why did the cowboy have a winer dog? Sombody told him to get a long little doggy.")

// // Now we can refrence the state variable with {} instead of hard coding a value

// // 3.) allow user interaction to change value of the joke useing "clicking a button"

// // store a list of jokes in an array called moreJokes

// // add a custom junction called handleJoke to pass the setter function "setJoke" that will change the value of the useState variable

// const moreJokes = ["Why did the walrus go to a tupperware party?", "What award did the dentist get for fixing everyone's teeth?"]

// // static way
// const handleJoke = () => {
//     setJoke("Why did the walrus go to a tupperware party?")
// }

// // add a button with an onClick attribute that will preform a function call

// <button onClick="{handleJoke}"> //handleJoke() function call ---> {handleJoke} when dealing with react syntax

// </button>


// //dynamic way

// const handleJoke = () => {
//     setJoke("Why did the walrus go to a tupperware party?")
// }

// // 4.) refactor to have multiple components

// // 5.) styleing
//         // - add a background image
//         // - chage background color to the text
//         // - chage the apperance to the button

// ///////////////////////////////////////////////

// // Static coding of jokes

// // imports

// import React from "react"


// // functional component declaration

//      const App = () => {

//             const [joke, setJoke] = useState("Why did the cowboy have a winer dog? Sombody told him to get a long little doggy.")
            
//             const handleJoke = () => {
//                     setJoke("Why did the walrus go to a tupperware party?")
//              }

//         return(
//             <>
//                 <h1>Favorite Joke from the Coop</h1>
//                 <p>Joke: Why did the cowboy have a winer dog? Sombody told him to get a long little doggy.</p>
//                 <button> onClick={handleJoke}
//                 click on button
//                 </button>
//             </>
//        ) 
//     }
// // export

// export default App

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// // Dynamic coding of jokes

// import React, {useState} from "react"  // import {useSate from "react"},  because we already are importing from "react", place it on the same line import React, {useState} from "react"

// // functional component declaration

//      const App = () => {
// // add useState above the return statement   

//         const [joke, setJoke] = useState("Why did the cowboy have a winer dog? Sombody told him to get a long little doggy.")
// // add array of jokes
        
//         const moreJokes = ["Why did the walrus go to a tupperware party?", "What award did the dentist get for fixing everyone's teeth?"]

//         const handleJoke = () => {
//             setJoke(moreJokes[1])
//         }

//         return(
//             <>
//                 <h1>Favorite Joke from the Coop</h1>
//                 <p>Joke:{joke}</p>
//                 // Now we can refrence the state variable with {} instead of hard coding a value
//             </>
//        ) 
//     }
// // export

// export default App

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 

React State 3/27/23 Bravo

## Getting Started
- $ git pull origin main
- $ git checkout -b bravo-state
- $ yarn create react-app react-state
- $ cd react-state
- $ yarn start
- $ code . 

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 

Plan
1. We will start with a basic functional component on App.js with a heading tag and a paragraph tag to display jokes.

- Static coding of the joke 

*/

  // imports
  import React from "react"

  // functional component declaration
  const App = () => {
    return(
      <>
        <h1>Favorite Jokes from the Coop</h1>
        <p>Joke: Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy.</p>
      </>
    )
  }

  // export
  export default App 
  


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 

2. Create a default joke that appears when the webpage renders.

- react state: special variable that stores data that determines how the component will render to the UI and adds behavior

- If a component has state, it is referred to as a logic component. If not, it is a display component.

- react hook: special functions that allow a component to have access to React features like state

- useState: react hook that returns to values
    - state variable
    - setter state function
  - also gives an initial value for the state variable

To add react state
- import a react hook called useState

  // import hook from react
    // import {useState} from "react"

  // because we already importing from "react", place it on the same lines as the other import 
  
  */

  import React, {useState} from "react"


//- array destructing values from useState

  const [joke, setJoke] = useState("Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy.")


/* 

Now we can reference the state variable with {}instead of hardcoding a value

{joke} 

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 

3. Allow user interaction (clicking a button) to change the value of the joke
- store a list of jokes in an array called moreJokes

- Add a custom function called handleJoke to pass the setter function `setJoke` that will change the value of the state variable `joke` 

*/


  const moreJokes = [
    "Why did the walrus go to a tupperware party? To find a tight Seal!",
    "What award did the dentist get for fixing everyone's teeth? A plaque!",
    "Why was Cinderella so bad at soccer? She kept running away from the ball!",
    "Why did the scarecrow get an award? He was outstanding in his field.",
    "Why couldn't the bicycle stand up by itself? It was too tired",
    "Why do ducks have feathers? To cover their butt quacks!",
    "Why did the functions stop calling each other? Because they were having constant arguments!",
    "When I was a kid, my dad got fired from his job as a road worker for theft. I refused to believe he could do such a thing, but when I got home, the signs were all there.",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word.",
    "If you tell a dad joke and you are not a dad is it a faux pas?"
  ]
  // static way 
//   const handleJoke = () => {
//     setJoke("Why did the walrus go to a tupperware party? To find a tight Seal!")
//   }

  // dynamic way
  const handleJoke = () => {
    const randomNum = Math.floor(Math.random() * moreJokes.length)
    setJoke(moreJokes[randomNum])
  }


/* 

- Add a button with an onClick attribute that will perform the function call

  <button onClick={handleJoke}>
    Click for a new joke
  </button> 

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

4. Refactor to have multiple components to allow a user to show their top 3 jokes
- create a folder named components in src directory
- create a file named `Joke.js` to store the logic with state
- App.js will become the display component

To see the logic from Joke.js,
- import the file to App.js
- component call within the return statement

- Create multiple component calls to reuse the logic. Each will have a separate instance that will not impact the functionality of the other component calls.


5. Styling 
  a. Add a background image using the jsx tag

  b. Change background color to the text using attributes

  c. Change the appearance of the button using inline styling

  */

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////