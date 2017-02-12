'use strict'

var request = require('request'),
    common = require('./common'),
    apiUrl = common.urls.api,
    paths = common.urls.paths

function getQueryString(params){
    return {
        access_token: params.access_token,
        types: params.types || "jogging,run"
    }
}

// before_time must be in milliseconds.
// By default, before_time is today

function workouts(params) {
    return new Promise((resolve, reject) =>{ 
    var qs = getQueryString(params)
    var url = apiUrl + paths.activitiesList
    	if (!params || !params.before_time) {
    		before_time = new Date().getTime()
    	} else {
    		before_time = params.before_time
    	}
    url = url + '/' + before_time;

    request.get({ url: url, qs: qs }, (err, response, body) => {
        if(err)
            reject(err)
        else
            resolve(JSON.parse(body))
        });
    })
}

module.exports = workouts