'use strict'

var request = require('request'),
    moment = require('moment'),
    common = require('./common'),
    apiUrl = common.urls.api,
    paths = common.urls.paths,
    // regex = common.regex.workout,
    handleError = common.handleError

function getQueryString(params){
    return {
        access_token: params.access_token,
        metrics: params.metrics || "ALL"
    }
}

function workoutGet(params) {
    return new Promise((resolve, reject) =>{ 
    var qs = getQueryString(params)
    var url = apiUrl + paths.activity.get + '/' + params.workoutId

    request.get({ url: url, qs: qs }, (err, response, body) => {
        if(err)
            reject(err)
        else
            resolve(JSON.parse(body))
        });
    })
}

module.exports = {
    get: workoutGet
}