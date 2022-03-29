

const http = require('http');
const PORT = 2345;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world');
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

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

  res.json(products);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));




//console.log('Hello Node.js');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '192.168.50.123',
    user: 'louis',
    password: '!!!Eel45p4u4',
    database:'GSKY App verification',
    port: '3306'
});
// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database:'mysql',
//     port: 80
// });




conn.connect(function(err, rows, fields) {
    if (err) throw err;
    console.log("Connected!");
    // console.log('%c rows','background: red; color: white',rows);
    // console.log('%c fields','background: red; color: white',fields);
});



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
  
   res.json(products);
  });



// conn.query('SELECT 12 + 34 AS result', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The result is: ', rows[0].result);
// }); 







conn.query('SELECT * FROM `Customer List` WHERE `ID`=1', function(err, rows, fields,results) {
    console.log('err: ', err);
    console.log('rows: ', rows);

    //console.log('fields: ',fields);
    //console.log('results: ',results);

}); 



conn.end();



 