const verification_DB = require("./verification_DB");
//var deviceService = require('./verification_DB')
//const inital = require("./inital");
const express = require("express");
const server = express();
const port = 3000;
_this = this;
//_this.verification_DB = verification_DB;
//console.log(verification_DB);
//console.log(verification_DB.fooo);
// console.log(verification_DB.instance.fooo);
// console.log(_this.verification_DB.fooo);
server.on('listening', function () {
    console.log('%c listening', 'background: red; color: white');

    resolve();//I added my own promise to help me await
});
server.get("/", (req, res) => res.send("Hello World!"));
server.get("/products", (req, res) => {
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
    console.log('%c this', 'background: red; color: white', this);
    console.log('%c fooo', 'background: red; color: white', verification_DB.fooo);
    console.log('%c sadadad', 'background: red; color: white', verification_DB.sadadad);
    console.log('%c axd', 'background: red; color: white', verification_DB.axd);
    res.json(products);
});
server.get("/setCommand", (req, res) => {
    verification_DB.myFirstPromise.then((successMessage) => {
        // successMessage 是任何您由上方 resolve(...) 傳入的東西。
        // 在此僅作為成功訊息，但是它不一定是字串。
        console.log("Yay! " + successMessage);
        console.log('%c setCommand', 'background: red; color: white');
        res.json("setCommand success");
    });
    //verification_DB.myFirstPromise();

});
server.listen(port, (
) => {
    //console.log(verification_DB.fooo);
    console.log(`Example app listening on port ${port}!`);
});



var inital = (function () {
    var _this;
    function inital() {
        _this = this;
        //_this.verification_DB = verification_DB.instance;
        console.log('inital');
        // document.addEventListener("keyup", (event) => {
        //     console.log("mysqlService");
        // });
        inital.startup = function () {
            if (!!inital.INSTANCE) {
                throw new Error('Can only ever have one instance at the same time');
            }
            inital.INSTANCE = new inital(opts);
        };

    }
    inital.prototype._initDev = false;
    return inital;

})();

function start() {
    console.log(inital);
    //inital.startup();
}
//start();
//console.log(inital);




