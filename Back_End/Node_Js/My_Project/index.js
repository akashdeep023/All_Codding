const figlet = require("figlet");
figlet("Joke By Akash deep", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

const giveMeAJoke = require("give-me-a-joke");
// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
    console.log("-----------------------------------") //this line from me
});