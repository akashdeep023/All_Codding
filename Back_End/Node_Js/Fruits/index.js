//iska name -> index.js hi hota hai
//spacel js file jo Fruits ke sabhi file ka data require karti hai compile karti hai fir export karti hai
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple,banana,orange];

module.exports = fruits; //export