var Request = require('request-promise');


var exports = module.exports = function () {

    return {
        register: register,
        deregister: deregister
    };

    function register(params) {
        return Request({
            method: "POST",
            uri: params.uri,
            body: params.body,
            json: true
        })
            .then(resp => console.log(resp))
            .catch(err => console.error('Service could not be registered!'));
    }

    function deregister(params) {
        var requestOptions = {
            method: "POST",
            uri: params.uri,
            body: {
                prefix: params.body.prefix
            },
            json: true
        };

        return Request(requestOptions)
            .then(resp => console.log(resp))
            .catch(err => console.error('Service could not be unregistered!'));
    }

};
