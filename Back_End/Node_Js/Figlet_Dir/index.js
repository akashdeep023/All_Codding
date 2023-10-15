//----------------------------------Installing npm Packages--------------------------------------------------
const figlet = require("figlet");       //package require me ./ nhi likhna parta

figlet("Akash deep", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});