react-inputs-events 03/31/2023

DOM(document object model) listing event

    - user interactions tracked by the DOM
    -example: typing on a form, clicking a button, selecting an element

Updating sate with the user input

    1. create stae for the input
    2. create a basic functional component in App.js

    ```js
    //import
    import React from "react"

    //functional component declaration
    const App = () => {
        //return to the UI
        return(
            <>
            </>
        )
    }
    //export
    export default App
    ```
    3. create state that will track the name of the user as a string

    ```js
        //import
    import React, {useState} from "react"

    //functional component declaration
    const App = () => {
        //declare use state variable with array destructuring
        const [user, setUser] = useState("Bravo 2023")
        //return statement to the UI
        return(
            <>
                <h1>{user}</h1>
            </>
        )
    }
    //export
    export default App
    ```
    4. Provide a space to capture what the user is typing
        -use the input tag: it specifies the input field where the user can enter data
        -attribute of input:
            -type: it specifies what type of input you will use
            -placeholder: hint of the expected data for the input field
            -value: is specifies what state variable will store the value
            -onChange: it will listen for any changes to the input field, and send DOM event to functions
        
    5. Display user input
        -create custom function

```js
//import
    import React, {useState} from "react"

    //functional component declaration
    const App = () => {
        //declare use state variable with array destructuring
        const [user, setUser] = useState()
        //return statement to the UI
        //custum function to handle onChange
        //e parameter is event, use this to check console
        // const handleChange = (e) => {
        //     console.log(e.target)
        // }
        //access e.target.value to see value in console
        // const handleChange = (e) => {
        //     console.log(e.target.value)
        // }
        //use setter function to display value of user input
        const handleChange = (e) => {
            setUser(e.target.value)
        }
        return(
            <>
                <h1>Aloha Bravo!!!</h1>
                <input type="text" //placeholder="what is your name?"
                value={user} 
                onChange={handleChange}
                /> //self closing tag that allows user submit information
            </>
            //display value of user input
            <p>{user}</p>
        )
    }
    //export
    export default App

```

    ```js
                //import
    import React, {useState} from "react"

    //functional component declaration
    const App = () => {
        //declare use state variable with array destructuring
        const [user, setUser] = useState("what is your name?")
        //return statement to the UI
        return(
            <>
                <h1>Aloha Bravo!!!</h1>
                <input type="text" //placeholder="what is your name?"
                value={user} onChange=""
                /> //self closing tag that allows user submit information
            </>
        )
    }
    //export
    export default App
    ```

    6. add addition user input

```js
    //import
    import React, {useState} from "react"

    //functional component declaration
    const App = () => {
        //declare use state variable with array destructuring
        const [user, setUser] = useState("")
        const [nickName, setNickName] = useState("")
        
        //return statement to the UI
        //custum function to handle onChange
        //e parameter is event, use this to check console
        // const handleChange = (e) => {
        //     console.log(e.target)
        // }
        //access e.target.value to see value in console
        // const handleChange = (e) => {
        //     console.log(e.target.value)
        // }
        //use setter function to display value of user input
        const handleChange = (e) => {
            setUser(e.target.value)
        }
        const handleNickNameChange = (e) => {
            setNickName(e.target.value)
        }
        return(
            <>
                <h1>Aloha Bravo!!!</h1>
                <input type="text" //placeholder="what is your name?"
                value={user} 
                onChange={handleChange}
                /> //self closing tag that allows user submit information
                <input type="text" //placeholder="what is your name?"
                value={nickName} 
                onChange={handleNickNameChange}
                />
            </>
            //display value of user input
            <p>{user}, thanks for helping Charlean, Can we call you {nickName}</p>
        )
    }
    //export
    export default App
```

7. move return into component
    -move return value into component
    add component call and pass use state variable and setter function

    import useState
    or move usestate variable logic and reuturn to component

-ask about conditional rendering
syllibus react functional props
&& allows for conditional rendering
- review react.dev
