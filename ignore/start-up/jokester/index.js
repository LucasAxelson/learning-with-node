const jokes = require("give-me-a-joke")
const colors = require("colors")


jokes.getRandomDadJoke(function(joke) {
    console.log(joke)
    // console.log(joke.rainbow) //Works, but very obnoxious
    // console.log(joke.underline.green) 
}) 