var mysql = require('mysql');
const verification_DB = mysql.createConnection({
  host: '192.168.50.123',
  user: 'louis',
  password: '!!!Eel45p4u4',
  database: 'Part_Number_System',
  port: '3306'
});
var axd = 55;
const foo = Math.sqrt(2);
verification_DB.connect(function (err, rows, fields) {
  if (err) throw err;
  console.log("verification_DB Connected!");
  // console.log('%c rows','background: red; color: white',rows);
  // console.log('%c fields','background: red; color: white',fields);
  verification_DB.query('SELECT * FROM `Customer` WHERE `ID`=1', function (err, rows, fields, results) {
    console.log('err: ', err);
    console.log('rows: ', rows);

    //console.log('fields: ',fields);
    //console.log('results: ',results);
    verification_DB.end();
    var process = require('process');
    if (process) {
      console.log(`This process is pid ${process.pid}`);
      console.log('This process is pid ' + process.pid);
      process.exit(0);
    }
  });

});
// conn.query('SELECT 12 + 34 AS result', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The result is: ', rows[0].result);
// }); 



