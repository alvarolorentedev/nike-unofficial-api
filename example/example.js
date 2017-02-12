var nikeplus = require('../index')

var params = {
    email: '',
    password: ''
}

var token = undefined
var profile_img_url = undefined

nikeplus.authenticate(params)
    .then((result) => {
        console.log(result)
        token = result.access_token
        profile_img_url = result.profile_img_url
        return result
    })
    .then((result) => {return nikeplus.workouts({access_token: token})})
    .then((result) => {
        // console.log(result)
        return result
    })
    .then((result) => {return nikeplus.workout.get({access_token: token, workoutId: result.activities[0].id})})
    .then((result) => {
        console.log(result)
        return result
    })
    
    .catch((result) => console.log(result))
