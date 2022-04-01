const verification_DB =require("./verification_DB");
const express = require("express");
const app = express();
const port = 3000;




app.get("/", (req, res) => res.send("Hello World!"));


app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "hammer",
  },
  {
    id: 2,
    name: "screwdriver",
  },
  ,
  {
    id: 3,
    name: "wrench",
  },
 ];
 console.log(this);
 console.log('%c this','background: red; color: white',this);
 console.log('%c fooo','background: red; color: white',verification_DB.fooo);
 console.log('%c sadadad','background: red; color: white',verification_DB.sadadad);
 console.log('%c axd','background: red; color: white',verification_DB.axd);
 res.json(products);
});

app.listen(port, (
) => {

console.log(`Example app listening on port ${port}!`);
});







