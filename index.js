'use strict'

const authenticate = require('./lib/authentication')
const workout = require('./lib/workout')
const workouts = require('./lib/workouts')

module.exports= {
    authenticate: authenticate,
    workout: workout,
    workouts: workouts
}