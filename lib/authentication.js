'use strict'

var request = require('request'),
    common = require('./common'),
    paths = common.urls.paths

function getForm(params){
    return  {
        username: params.email,
        password: params.password
    }
}

function authenticate(params){
    return new Promise((resolve, reject) =>{
        var form = getForm(params)
        var url = paths.auth
        request.post({ url:url, form:form }, (err, response, body) => {
            if (err)
                reject(handleError(err))
            else
                resolve(JSON.parse(body))
        })
    })
}

module.exports = authenticate