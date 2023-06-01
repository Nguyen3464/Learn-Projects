My notes

import "./App.css" syntax

passing prop starting in app.js

app.js is parent 
component is the child
import React from "react"

-in component call add titleName="text"
```js
App.js file

import React, {useState} from "react"
import MediaPlayer from "./"
im

const App = () => {

    //declare an array for episodes to give access to title prop in episode component
const episodes = ["text0", "text1"]

const [CurrentEpisdoe, setcurrentEpisode] = useState(episdoes[0])

//button behavior function that gets passed to mediaplayer button
const triggerNextEpisdoe = () => {
    let nextEpisdoe = episdoe.indexOf(currentEpisode) + 1
    setCurrentEpisdoe(episdoe[nextEpisode])

}
        return(
            <>
                <h1>PageName</h1>
                <MediaPlayer />
                <div className="cards">
                {episode.map(episode, index) => {
                    return <Episode title={episode} key={index}/>
                }}
                </div>
            </>
        )
}
Episode.js file

const Episode = (props.title) => {
    return(
        <>
            <div 
            className="Card">Episdoe: {prop.title}
            </div>
        </>
    )
}

MediaPlayer.js

import React from "react"

const MediaPlayer = (props) => {
    return(
        <>
            <div clasName="media-player">
            <h3>Current Episode: {props.CurrentEpisode}</h3>
            <button onClick={props.triggerNextEpisdoe}>Play Next Episode</Button>
            </div>
        </>
    )
})

export defualt MediaPlayer

Apps.css

.cards {
    border: 2px solid black;
    height: 400px;
    width: 200px;
    padding: 20px;
}

.cards {
display: flex;
flex-wrap: wrap;
justify-content: center;
}

.media-player {

}
```
//////////////////////////////////////////////
