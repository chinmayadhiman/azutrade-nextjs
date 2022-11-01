const fs = require('fs')
const path = require("path");
const publicPath = path.join(__dirname, "pages");
// fs.writeFile('about.txt', "hello user")
fs.writeFile(`about.txt`, "hello user what are you doing", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
// import * as fs from "fs";
import { stringify } from "querystring";
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    let stringifyData = JSON.stringify(req.body.about);
    fs.writeFile(`about.txt`, stringifyData, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
    res.send("successfully submitted")
  } else {
  fs.readFile(`about.txt`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send( data );
  });
  
  }
}

