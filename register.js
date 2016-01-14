var Request = require('request-promise');


var exports = module.exports = function(params){
    Request({
        method: "POST",
        uri: params.uri,
        body: params.body,
        json: true
    }).then(function (resp) {
        console.log(resp);
    });
};
