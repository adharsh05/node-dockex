const mongoose = require('mongoose')

module.exports  = function(mongoose){
    return [{
        name: {type: String, required: true},
        email: {type: String}
    }, {
        timestamp: true,
        createdy: true,
        updatedby: true
    }];
};