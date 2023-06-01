Objects

// const favSong = {
//     artist: "Aretha Franklin",
//     song: "Day Dreaming"
// }

// keys are also called properties  artist, song;
// values Aretha Franklin, Day Dreaming;
// when an object's key holds a function, the function is called a method

// access object properties with dot notation.  nameOfTheObject.nameOfTheKey
// console.log(favSong.artist); // --> "Aretha Franklin"

// console.log(favSong.song); // --> "DayDreaming"

////////////////////////////////////////////////

// function brings in behavior.  a function that belongs to an object is referred as a method

const favSong = {
    artist: "Aretha Franklin",
    song: "Day Dreaming",
    displaySong: function() {
        return `Sip on tea and listen to ${favSong.song} by ${favSong.artist}.`
    }
}

//////////////////////////////////////

// because the method belongs to the object, the object can be refrenced usimg the keyword this inside the method

const favSong = {
    artist: "Aretha Franklin",
    song: "Day Dreaming",
    displaySong: function() {
        return `Sip on tea and listen to ${thisSong.song} by ${thisSong.artist}.`
    }
}

/////////////////////////////////////////

// to refrence the method, nameOfObject.nameOfTheKey()
// console.log(favSong.displaySong())
// output: "Sip on tea and listening to "Day Dreaming" by Aretha Franklin.""

// destructure an object
// refrencing multiple keys from the same object, destructure the object by assigning the key names to the name of the object
// const {artist, song, displaySong} = favSong

// console.log(artist()) // output: "Aretha Franklin"
// console.log(song()) // output: "Day Dreaming"
// console.log(displaySong()) 

const favList = [
    { artist: "Aretha Franklin", song: "Day Dreaming"},
    { artist: "The Mamas and The Papas", song: "Californa Dreamin"}, 
    { artist: "The Police", song: "Roxanne"},
    { artist: "The Eagles", song: "Hotel California"}
]

// print out songs that include california
// store a filter method in a variable named getSong
// filter method will create a subset of the original array, by iterating accross each value in the array and checking for the conditions set

const getSong = favList.filter((value) => {
    return value.song.includes("Californa")
})

console.log(getSong) // { artist: "The Mamas and The Papas", song: "Californa Dreamin"}, { artist: "The Eagles", song: "Hotel California"}

/////////////////////////
Objects

// const favSong = {
//     artist: "Aretha Franklin",
//     song: "Day Dreaming"
// }

// keys are also called properties  artist, song;
// values Aretha Franklin, Day Dreaming;
// when an object's key holds a function, the function is called a method

// access object properties with dot notation.  nameOfTheObject.nameOfTheKey
// console.log(favSong.artist); // --> "Aretha Franklin"

// console.log(favSong.song); // --> "DayDreaming"

////////////////////////////////////////////////

// function brings in behavior.  a function that belongs to an object is referred as a method

// const favSong = {
//     artist: "Aretha Franklin",
//     song: "Day Dreaming",
//     displaySong: function() {
//         return `Sip on tea and listen to ${favSong.song} by ${favSong.artist}.`
//     }
// }

//////////////////////////////////////

// because the method belongs to the object, the object can be refrenced usimg the keyword this inside the method

// const favSong = {
//     artist: "Aretha Franklin",
//     song: "Day Dreaming",
//     displaySong: function() {
//         return `Sip on tea and listen to ${thisSong.song} by ${thisSong.artist}.`
//     }
// }

/////////////////////////////////////////

// to refrence the method, nameOfObject.nameOfTheKey()
// console.log(favSong.displaySong())
// output: "Sip on tea and listening to "Day Dreaming" by Aretha Franklin.""

// destructure an object
// refrencing multiple keys from the same object, destructure the object by assigning the key names to the name of the object
// const {artist, song, displaySong} = favSong

// console.log(artist()) // output: "Aretha Franklin"
// console.log(song()) // output: "Day Dreaming"
// console.log(displaySong()) 

const favList = [
    { artist: "Aretha Franklin", song: "Day Dreaming"},
    { artist: "The Mamas and The Papas", song: "Californa Dreamin"}, 
    { artist: "The Police", song: "Roxanne"},
    { artist: "The Eagles", song: "Hotel California"}
]

// print out songs that include california
// store a filter method in a variable named getSong
// filter method will create a subset of the original array, by iterating accross each value in the array and checking for the conditions set

const getSong = favList.filter((value) => {
    return value.song.includes("Californa")
})

console.log(getSong) // { artist: "The Mamas and The Papas", song: "Californa Dreamin"}, { artist: "The Eagles", song: "Hotel California"}