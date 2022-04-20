// 'use strict';
var mysql = require('mysql');
//var _this=this;
var verification_DB = mysql.createConnection({
  host: '192.168.50.123',
  user: 'louis',
  password: '!!!Eel45p4u4',
  database: 'Part_Number_System',
  port: '3306'
});
certification_Insert = "INSERT INTO `Certification`(`SN`, `Model Name`, `Customer ID`, `Model ID`, `MCU ID`, `Year`, `Month`, `Day`, `Black List`) VALUES ('3','2','3','4','5','6','7','8','9')";
certification_Select = "SELECT * FROM `Customer` WHERE `ID`=1";
class mysqlService {
  constructor() {
    console.log("verification_DB constructor!");
    try {
      this.axd = 55;
      this.fooo = Math.sqrt(2);
      document.addEventListener("keyup", (event) => {
        console.log("mysqlService");
        this.setCommand();
      });
    } catch (e) {
      console.log("constructor err!",e);
    }
  }

  static getInstance() {
    if (this.instance) {
      console.log("verification_DB instance!");

      return this.instance;
    }
    else {
      this.instance = new mysqlService();
      console.log("mysqlService ERROR!");

      return this.instance;
    }
  }
  setCommand() {
    console.log("setCommand");
    verification_DB.connect(function (err, rows, fields) {
      if (err) {
        console.log("err",err);
        throw err;
      }
      console.log("verification_DB Connected!");
      // console.log('%c rows','background: red; color: white',rows);
      // console.log('%c fields','background: red; color: white',fields);
      verification_DB.query(certification_Insert, function (err, rows, fields, results) {
        console.log('err: ', err);
        console.log('rows: ', rows);
        mysql.in
        //console.log('fields: ',fields);
        console.log('results: ', results);
        verification_DB.end();
        return rows;
        var process = require('process');
        if (process) {
          console.log(`This process is pid ${process.pid}`);
          console.log('This process is pid ' + process.pid);
          process.exit(0);
        }
      });
    });
  }
  onGeneratedRow(row, connection) {
    if (row.constructor.name == 'RowDataPacket') {
      console.log('First Name: ', row.FirstName);
      console.log('Last Name: ', row.LastName);
    }
  }

  //var _setCommand=setCommand();
  //console.log('%c _setCommand','background: red; color: white',_setCommand);

  // swpanSN(){

  // }



}
exports.instance = this;
//module.exports = fooo;
module.exports = mysqlService.getInstance();

//export default sadadad=this;


// conn.query('SELECT 12 + 34 AS result', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The result is: ', rows[0].result);
// }); 



