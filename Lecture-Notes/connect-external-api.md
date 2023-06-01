# set up Frontend scafolding
import { useState } from 'react'
import mockNasa from './mockNasa'

const App = () => {
    const [nasaData, SetNasaData] = useState(mockNasa)
    console.log('mock data:', nasaData)

    const handleClick = () => {
        <!-- console.log('clicked') -->
        <!-- console.log(nasaData[0].img_src) -->
        setNasaData(mockNasa[0].img_src)
    }

    return(
        <>
            <h1> Mars Rover Pictures</h1>
            <button onClick={handleClick}>Click Me!</button>
            {nasaData && 
            <img style={{height: "200px"}} src={nasaDAta[0]} />  alt="random Mars Rover"
            }
        </>
    )
}
export default App

# connect to external API

    - request external API's Key, sign up and retirive it from email
    - enter your API key to url
    - make fetch call directly
    - then hide api key before pushing to git // dont push api key

import { useState } from 'react'
<!-- import mockNasa from './mockNasa' -->

const App = () => {
    const [nasaData, SetNasaData] = useState("")
    console.log('mock data:', nasaData)

#    GET request

    const nasaFetch = () {
    fetch("urlkey=FDASF#@FWV")
    .then(response => response.json())
    .then(payload =>  setNasaData(payload)){
        <!-- console.log(payload) -->
        console.log("nasa: ", payload.photo[0].img_src) // accessing single attribute nested in API dataset
    })
    .catch(error => console.log(error))

    }

    const handleClick = () => {
        <!-- console.log('clicked') -->
        <!-- console.log(nasaData[0].img_src) -->
        setNasaData(mockNasa[0].img_src)
    }

    return(
        <>
            <h1> Mars Rover Pictures</h1>
            <button onClick={nasaFetch}>Click Me!</button>
            {nasaData && nasaData.photo.map((obj, index) => {
                return <img src={obj.img_src} alt="mars Rover" key={index} />
            })
            <!-- <img style={{height: "200px"}} src={nasaDAta[0]} />  alt="random Mars Rover"
            // nasaData[0].img_src accessing single attribute nested in API dataset -->
            }
        </>
    )
}
export default App

# hide secret API key

    - create a .env in root inside src folder
    - add .env to gitignore just ".env"
    - inside .env file 
        - REACT_APP_NASA_API_KEY=urlkey=FDASF#@FWV // when saving API key REACT_APP keyword is needed
        
        to ustilize API key assigin it to a variable

        - inside APP.js
        const apiKey = process.env.REACT_APP_API_KEY

        - use string interpolation in fetch 

        fetch(`urlkey=FDASF#@FWV${apiKey}`)

        - restart react server when decalring enviorment variable ".env"

# add to render.com

    - inside frontend
    - click on enviorment tab
    - add enviorment variable // takes place of .env file on local
    - REACT_APP_NASA_API_KEY ||  FDASF#@FWV