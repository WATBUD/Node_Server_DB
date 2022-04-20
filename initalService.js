'use strict';
var _this;
class initalService {
    constructor() {
        env.log('initalService','initalService','begin')
        try {
            super();
            _this = this;
            
        } catch(e) {
            env.log('ERROR','initalService',e)
        }
    }

    static getInstance() {
        if (this.instance) {
            env.log('initalService', 'getInstance', `Get exist initalService() INSTANCE`);
            
            return this.instance;
        }
        else {
            env.log('initalService', 'getInstance', `New initalService() INSTANCE`);
            this.instance = new initalService();

            return this.instance;
        }
    }
    


}

module.exports = initalService;