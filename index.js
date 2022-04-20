const verification_DB = require("./verification_DB");

//var deviceService = require('./verification_DB')

const inital = require("./inital");
const express = require("express");
const app = express();
const port = 3000;
_this = this;
_this.verification_DB = verification_DB;
//console.log(verification_DB);
//console.log(verification_DB.fooo);
// console.log(verification_DB.instance.fooo);
// console.log(_this.verification_DB.fooo);

// var inital = (function () {
//   var _this;
//   function inital() {
//     _this = this;
//     _this.verification_DB = verification_DB.instance;
//     console.log('inital');

//     console.log(_this.verification_DB);
//     app.get("/", (req, res) => res.send("Hello World!"));
//     app.get("/products", (req, res) => {
//       const products = [
//         {
//           id: 1,
//           name: "hammer",
//         },
//         {
  
  
//           id: 2,
//           name: "screwdriver",
//         },
//         ,
//         {
//           id: 3,
//           name: "wrench",
//         },
//       ];
//       console.log(this);
//       console.log('%c this', 'background: red; color: white', this);
//       console.log('%c fooo', 'background: red; color: white', verification_DB.fooo);
//       console.log('%c sadadad', 'background: red; color: white', verification_DB.sadadad);
//       console.log('%c axd', 'background: red; color: white', verification_DB.axd);
//       res.json(products);
//     });
//     app.listen(port, (
//     ) => {
//       console.log(verification_DB.fooo);
//       console.log(`Example app listening on port ${port}!`);
//     });
//   }


// })()





